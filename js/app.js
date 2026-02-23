// ===== Application State =====
let currentView = 'home';
let currentCategory = null;
let currentExercise = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let questionResults = [];
let userProgress = {
    completed: [],
    scores: {}
};

// ===== Initialize App =====
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    updateStats();
    showHome();
});

// ===== Local Storage Functions =====
function saveProgress() {
    localStorage.setItem('ofimatica-progress', JSON.stringify(userProgress));
}

function loadProgress() {
    const saved = localStorage.getItem('ofimatica-progress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

function markExerciseCompleted(exerciseId, score) {
    if (!userProgress.completed.includes(exerciseId)) {
        userProgress.completed.push(exerciseId);
    }
    userProgress.scores[exerciseId] = score;
    saveProgress();
    updateStats();
}

// ===== Navigation Functions =====
function showView(viewName) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    document.getElementById(`${viewName}-view`).classList.add('active');
    currentView = viewName;
}

function showHome() {
    showView('home');
    updateStats();
}

function showCategory(category) {
    currentCategory = category;
    showView('category');

    const titles = {
        word: 'Exercicis Word',
        excel: 'Exercicis Excel',
        integrated: 'Casos Integrats'
    };
    document.getElementById('category-title').textContent = titles[category];
    populateExercisesList(category);
}

function backToCategory() {
    if (currentCategory) {
        showCategory(currentCategory);
    } else {
        showHome();
    }
}

function populateExercisesList(category) {
    const container = document.getElementById('exercises-list');
    const exercises = exercisesDB[category];

    container.innerHTML = exercises.map((exercise, index) => {
        const isCompleted = userProgress.completed.includes(exercise.id);
        const score = userProgress.scores[exercise.id] || 0;

        return `
            <div class="exercise-item" onclick="loadExercise('${category}', ${index})">
                <div class="exercise-item-info">
                    <h4>${exercise.title}</h4>
                    <p>${exercise.description}</p>
                </div>
                <div class="exercise-item-status">
                    ${isCompleted ?
                `<span class="status-badge status-completed">✓ Completat (${score}/${exercise.total_points})</span>` :
                `<span class="status-badge status-pending">Pendent</span>`
            }
                </div>
            </div>
        `;
    }).join('');
}

// ===== Exercise Functions =====
function loadExercise(category, index) {
    const exercise = exercisesDB[category][index];
    currentExercise = { ...exercise, category, index };
    currentQuestionIndex = 0;
    userAnswers = new Array(exercise.questions.length).fill(null);
    questionResults = new Array(exercise.questions.length).fill(null);

    showView('exercise');

    // Update header
    document.getElementById('exercise-number').textContent =
        `Exercici ${index + 1}/${exercisesDB[category].length}`;
    document.getElementById('exercise-type').textContent =
        category.charAt(0).toUpperCase() + category.slice(1);

    // Update content
    document.getElementById('exercise-title').textContent = exercise.title;
    document.getElementById('difficulty-badge').textContent = exercise.difficulty;
    document.getElementById('scenario-content').innerHTML = exercise.scenario;

    // Reset results
    document.getElementById('results-section').classList.add('hidden');

    // Show first question
    showQuestion(0);
}

function showQuestion(index) {
    currentQuestionIndex = index;
    const question = currentExercise.questions[index];
    const totalQuestions = currentExercise.questions.length;

    // Update progress
    document.getElementById('question-progress').textContent =
        `Pregunta ${index + 1} de ${totalQuestions}`;
    const progressPercent = ((index + 1) / totalQuestions) * 100;
    document.getElementById('mini-progress-fill').style.width = `${progressPercent}%`;

    // Update navigation buttons
    document.getElementById('prev-question-btn').disabled = index === 0;

    if (index === totalQuestions - 1) {
        document.getElementById('next-question-btn').classList.add('hidden');
        document.getElementById('finish-btn').classList.remove('hidden');
    } else {
        document.getElementById('next-question-btn').classList.remove('hidden');
        document.getElementById('finish-btn').classList.add('hidden');
    }

    // Render question
    renderQuestion(question, index);
}

function renderQuestion(question, index) {
    const container = document.getElementById('question-section');
    const userAnswer = userAnswers[index];
    const result = questionResults[index];

    let questionHTML = `
        <div class="question-card ${result ? (result.correct ? 'correct' : 'incorrect') : ''}">
            <div class="question-header">
                <span class="question-type-badge">${getQuestionTypeName(question.type)}</span>
                <span class="question-points">${question.points} punts</span>
            </div>
            <div class="question-text">${question.question}</div>
    `;

    // Render based on question type
    switch (question.type) {
        case 'multiple_choice':
        case 'identify_error':
        default:
            questionHTML += renderMultipleChoice(question, userAnswer, result);
            break;
    }

    // Add feedback if answered
    if (result) {
        questionHTML += `
            <div class="feedback-section show ${result.correct ? 'correct' : 'incorrect'}">
                <div class="feedback-header ${result.correct ? 'correct' : 'incorrect'}">
                    ${result.correct ? '✓ Correcte!' : '✗ Incorrecte'}
                </div>
                <div class="feedback-text">${question.explanation}</div>
            </div>
        `;
    }

    questionHTML += `</div>`;
    container.innerHTML = questionHTML;
}

function renderMultipleChoice(question, userAnswer, result) {
    let html = '<div class="options-list">';

    question.options.forEach((option, i) => {
        const isSelected = userAnswer === i;
        const isCorrect = i === question.correct;
        let classes = 'option-item';

        if (result) {
            if (isCorrect) classes += ' correct';
            if (isSelected && !isCorrect) classes += ' incorrect';
        } else if (isSelected) {
            classes += ' selected';
        }

        html += `
            <div class="${classes}" onclick="${result ? '' : `selectOption(${i})`}">
                <div class="option-letter">${String.fromCharCode(65 + i)}</div>
                <div class="option-text">${option}</div>
                ${result && isCorrect ? '<span>✓</span>' : ''}
                ${result && isSelected && !isCorrect ? '<span>✗</span>' : ''}
            </div>
        `;
    });

    html += '</div>';
    return html;
}

function renderShortAnswer(question, userAnswer, result) {
    const value = userAnswer || '';
    const disabled = result ? 'disabled' : '';

    return `
        <input type="text" 
               class="answer-input" 
               id="answer-input" 
               value="${value}" 
               placeholder="Escriu la teva resposta..."
               ${disabled}
               onchange="saveShortAnswer(this.value)">
        ${result && result.correct ? '<p style="color: var(--success-color); margin-top: 0.5rem;">✓ Resposta correcta</p>' : ''}
        ${result && !result.correct ? `<p style="color: var(--danger-color); margin-top: 0.5rem;">✗ Resposta correcta: ${question.correct_answer || question.correct_answers[0]}</p>` : ''}
    `;
}

function renderOrdering(question, userAnswer, result) {
    const currentOrder = userAnswer || question.items.map((_, i) => i);

    let html = '<div class="ordering-list" id="ordering-list">';

    currentOrder.forEach((itemIndex, position) => {
        const item = question.items[itemIndex];
        const isCorrect = result && question.correct_order[position] === itemIndex;

        html += `
            <div class="ordering-item ${result ? (isCorrect ? 'correct' : 'incorrect') : ''}" 
                 draggable="${result ? 'false' : 'true'}"
                 data-index="${itemIndex}">
                <div class="ordering-number">${position + 1}</div>
                <div class="ordering-text">${item}</div>
                <div class="drag-handle">☰</div>
                ${result ? (isCorrect ? '<span style="color: var(--success-color);">✓</span>' : '<span style="color: var(--danger-color);">✗</span>') : ''}
            </div>
        `;
    });

    html += '</div>';

    return html;
}

function getQuestionTypeName(type) {
    switch (type) {
        case 'multiple_choice': return 'Tipus test';
        case 'identify_error': return 'Identificar error';
        default: return 'Pregunta';
    }
}

// ===== Answer Handling =====
function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    renderQuestion(currentExercise.questions[currentQuestionIndex], currentQuestionIndex);
}

function saveShortAnswer(value) {
    userAnswers[currentQuestionIndex] = value;
}

function setupDragAndDrop() {
    const list = document.getElementById('ordering-list');
    if (!list) return;

    const items = list.querySelectorAll('.ordering-item');
    let draggedItem = null;

    items.forEach(item => {
        item.addEventListener('dragstart', (e) => {
            draggedItem = item;
            item.classList.add('dragging');
        });

        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
            saveOrderingAnswer();
        });

        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(list, e.clientY);
            if (afterElement == null) {
                list.appendChild(draggedItem);
            } else {
                list.insertBefore(draggedItem, afterElement);
            }
        });
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.ordering-item:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function saveOrderingAnswer() {
    const list = document.getElementById('ordering-list');
    if (!list) return;

    const items = list.querySelectorAll('.ordering-item');
    const order = Array.from(items).map(item => parseInt(item.dataset.index));
    userAnswers[currentQuestionIndex] = order;
}

// ===== Navigation =====
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < currentExercise.questions.length - 1) {
        showQuestion(currentQuestionIndex + 1);
    }
}

function finishExercise() {
    // Validate all answers
    currentExercise.questions.forEach((question, index) => {
        questionResults[index] = validateAnswer(question, userAnswers[index]);
    });

    // Calculate score
    const totalPoints = currentExercise.total_points;
    const earnedPoints = questionResults.reduce((sum, result) =>
        sum + (result.correct ? result.points : 0), 0);
    const percentage = Math.round((earnedPoints / totalPoints) * 100);

    // Mark as completed
    markExerciseCompleted(currentExercise.id, earnedPoints);

    // Show results
    showResults(earnedPoints, totalPoints, percentage);
}

function validateAnswer(question, userAnswer) {
    let correct = false;

    switch (question.type) {
        case 'multiple_choice':
        case 'identify_error':
        default:
            correct = userAnswer === question.correct;
            break;
    }

    return {
        correct,
        points: question.points
    };
}

function showResults(earned, total, percentage) {
    const resultsSection = document.getElementById('results-section');
    const resultsContent = document.getElementById('results-content');

    const correctCount = questionResults.filter(r => r.correct).length;
    const totalQuestions = questionResults.length;

    let feedback = '';
    let feedbackClass = '';

    if (percentage >= currentExercise.pass_score) {
        if (percentage >= 90) {
            feedback = '🎉 Excel·lent! Domini complet de la matèria.';
            feedbackClass = 'excellent';
        } else {
            feedback = '✅ Aprovat! Bon coneixement de la matèria.';
            feedbackClass = 'good';
        }
    } else {
        feedback = '📚 No aprovat. Revisa els conceptes i torna-ho a intentar.';
        feedbackClass = 'needs-work';
    }

    let errorsHTML = '';
    const errors = questionResults.map((result, i) => ({ result, index: i }))
        .filter(item => !item.result.correct);

    if (errors.length > 0) {
        errorsHTML = `
            <div class="errors-summary">
                <h4>Detall d'errors (${errors.length})</h4>
                <div class="errors-list">
                    ${errors.map(err => {
            const question = currentExercise.questions[err.index];
            const userAnswerText = question.options[userAnswers[err.index]] || 'Cap (No contestada)';
            const correctOptionText = question.options[question.correct];

            return `
                            <div class="error-item">
                                <div class="error-question">
                                    <strong>Pregunta ${err.index + 1}:</strong> ${question.question}
                                </div>
                                <div class="error-details">
                                    <div class="error-user-answer">
                                        <span class="label">La teva resposta:</span>
                                        <span class="value incorrect">${userAnswerText}</span>
                                    </div>
                                    <div class="error-correct-answer">
                                        <span class="label">Resposta correcta:</span>
                                        <span class="value correct">${correctOptionText}</span>
                                    </div>
                                </div>
                                <div class="error-explanation">
                                    <strong>Explicació:</strong> ${question.explanation}
                                </div>
                            </div>
                        `;
        }).join('')}
                </div>
            </div>
        `;
    }

    resultsContent.innerHTML = `
        <div class="score-display ${feedbackClass}">
            <div class="score-number">${earned}/${total} punts (${percentage}%)</div>
            <div class="score-feedback">${feedback}</div>
        </div>
        <div class="score-breakdown">
            <p><strong>Preguntes correctes:</strong> ${correctCount} de ${totalQuestions}</p>
            <p><strong>Nota de tall:</strong> ${currentExercise.pass_score}%</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
        </div>
        ${errorsHTML}
    `;

    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function reviewAnswers() {
    // Go back to first question to review
    currentQuestionIndex = 0;
    document.getElementById('results-section').classList.add('hidden');
    showQuestion(0);
}

function nextExercise() {
    const { category, index } = currentExercise;
    const nextIndex = index + 1;

    if (nextIndex < exercisesDB[category].length) {
        loadExercise(category, nextIndex);
        window.scrollTo(0, 0);
    } else {
        alert('Has completat tots els exercicis d\'aquesta categoria! 🎉');
        showCategory(category);
    }
}

function retryExercise() {
    const { category, index } = currentExercise;
    loadExercise(category, index);
    window.scrollTo(0, 0);
}

// ===== Stats Functions =====
function updateStats() {
    const totalExercises =
        exercisesDB.word.length +
        exercisesDB.excel.length +
        exercisesDB.integrated.length;

    const completedCount = userProgress.completed.length;
    const percentage = Math.round((completedCount / totalExercises) * 100);

    // Calculate average score (as percentage)
    const scores = Object.keys(userProgress.scores).map(id => {
        const exercise = findExerciseById(id);
        if (!exercise) return 0;
        const earned = userProgress.scores[id];
        return Math.round((earned / exercise.total_points) * 100);
    });

    const avgScore = scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : 0;

    // Update header stats
    document.getElementById('progress-text').textContent = `${completedCount}/${totalExercises}`;
    document.getElementById('avg-score').textContent = scores.length > 0 ? `${avgScore}%` : '--';

    // Update home view stats
    document.getElementById('progress-fill').style.width = `${percentage}%`;
    document.getElementById('progress-percentage').textContent = `${percentage}%`;
    document.getElementById('completed-count').textContent = completedCount;
    document.getElementById('total-count').textContent = totalExercises;
    document.getElementById('avg-score-home').textContent = scores.length > 0 ? `${avgScore}%` : '--';

    // Update category stats
    updateCategoryStats('word');
    updateCategoryStats('excel');
    updateCategoryStats('integrated');
}

function updateCategoryStats(category) {
    const exercises = exercisesDB[category];
    const completed = exercises.filter(ex => userProgress.completed.includes(ex.id)).length;

    document.getElementById(`${category}-completed`).textContent = completed;
    document.getElementById(`${category}-total`).textContent = exercises.length;
}

function findExerciseById(id) {
    for (const category in exercisesDB) {
        const exercise = exercisesDB[category].find(ex => ex.id === id);
        if (exercise) return exercise;
    }
    return null;
}

// ===== Generator (placeholder) =====
function generateNewExercise() {
    alert('Generador d\'exercicis en desenvolupament.\n\nAviat podràs generar nous tests de coneixement!');
}
