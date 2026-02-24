// ===== Exercise Generator =====
// This module generates new exercises with random data

const generatorData = {
    nombres: [
        'Maria García Pérez', 'Joan Martínez López', 'Anna Rodríguez Sánchez',
        'Pere Soler Vidal', 'Laura Fernández Ruiz', 'David Sánchez Moreno',
        'Marta López Jiménez', 'Carles Vila Pujol', 'Núria Roca Mas',
        'Albert Puig Ferrer', 'Cristina Sala Valls', 'Jordi Camps Serra'
    ],

    dnis: [
        '12345678A', '23456789B', '34567890C', '45678901D', '56789012E',
        '67890123F', '78901234G', '89012345H', '90123456J', '01234567K'
    ],

    carrers: [
        'Carrer d\'Aragó', 'Passeig de Gràcia', 'Carrer de Balmes', 'Carrer de Provença',
        'Avinguda Diagonal', 'Carrer de València', 'Carrer de Mallorca', 'Carrer del Consell de Cent',
        'Rambla de Catalunya', 'Carrer de Muntaner', 'Gran Via de les Corts Catalanes'
    ],

    districtes: [
        'Ciutat Vella', 'Eixample', 'Sants-Montjuïc', 'Les Corts', 'Sarrià-Sant Gervasi',
        'Gràcia', 'Horta-Guinardó', 'Nou Barris', 'Sant Andreu', 'Sant Martí'
    ],

    tipusSolicituds: [
        'Certificat d\'empadronament', 'Certificat de convivència', 'Llicència d\'obres menors',
        'Llicència d\'activitat', 'Sol·licitud de subvenció', 'Reclamació administrativa'
    ],

    estats: ['Resolt', 'En tràmit', 'Pendent']
};

// Random number generator
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Random element from array
function randomElement(array) {
    return array[randomInt(0, array.length - 1)];
}

// Generate random date
function randomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toLocaleDateString('ca-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Generate random address
function randomAddress() {
    const carrer = randomElement(generatorData.carrers);
    const numero = randomInt(1, 500);
    const pis = randomInt(1, 5);
    const porta = randomInt(1, 4);
    const codiPostal = `0800${randomInt(1, 9)}`;
    return `${carrer}, ${numero}, ${pis}r ${porta}a, ${codiPostal} Barcelona`;
}

// ===== Exercise Generators =====

function generateCertificatEmpadronament() {
    const nom = randomElement(generatorData.nombres);
    const dni = randomElement(generatorData.dnis);
    const adreca = randomAddress();
    const districte = randomElement(generatorData.districtes);
    const dataEmpadronament = randomDate(new Date(2020, 0, 1), new Date(2024, 11, 31));

    return {
        id: `word-gen-${Date.now()}`,
        title: 'Certificat d\'empadronament (Dinàmic)',
        description: 'Validació de dades en un certificat oficial',
        difficulty: 'Fàcil',
        category: 'word',
        total_points: 40,
        pass_score: 50,
        scenario: `
            <p><strong>Situació:</strong> S'ha generat un certificat per a ${nom} (DNI: ${dni}).</p>
            <p><strong>Dades del sistema:</strong></p>
            <ul>
                <li>Nom: ${nom}</li>
                <li>DNI: ${dni}</li>
                <li>Adreça: ${adreca}</li>
                <li>Districte: ${districte}</li>
            </ul>
        `,
        questions: [
            {
                type: 'multiple_choice',
                question: 'Segons la normativa de l\'Ajuntament de Barcelona, quin és el títol que ha de presidir aquest document?',
                options: [
                    'CERTIFICAT D\'EMPADRONAMENT',
                    'VOLANT DE RESIDÈNCIA',
                    'ACTA DE CONVIVÈNCIA',
                    'SOL·LICITUD DE REGISTRE'
                ],
                correct: 0,
                points: 10,
                explanation: 'El document sol·licitat és un Certificat d\'Empadronament, que té caràcter oficial i fefaent.'
            },
            {
                type: 'identify_error',
                question: `Si al cos del certificat apareix "DNI: ${dni.slice(0, -1)}X", què hem de fer?`,
                options: [
                    'Res, el número és correcte',
                    'Corregir la lletra segons la dada oficial',
                    'Demanar un nou DNI al ciutadà',
                    'Anul·lar l\'expedient'
                ],
                correct: 1,
                points: 15,
                explanation: 'Les dades del certificat han de coincidir exactament con la base de dades oficial (el Padró).'
            },
            {
                type: 'multiple_choice',
                question: 'Quina d\'aquestes fórmules de tancament és la correcta en català?',
                options: [
                    'Y para que conste...',
                    'I perquè consti i als efectes oportuns...',
                    'Donat per finalitzat el present...',
                    'Barcelona, a data d\'avui'
                ],
                correct: 1,
                points: 15,
                explanation: '"I perquè consti i als efectes oportuns" és la clàusula estàndard de tancament administrativa.'
            }
        ]
    };
}

function generateRegistreSolicituds() {
    const estatObjetiu = randomElement(generatorData.estats);

    return {
        id: `excel-gen-${Date.now()}`,
        title: 'Gestió de dades (Dinàmic)',
        description: 'Anàlisi de dades municipals amb Excel',
        difficulty: 'Mitjà',
        category: 'excel',
        total_points: 30,
        pass_score: 50,
        scenario: `
            <p><strong>Context:</strong> Estàs gestionant una taula amb 100 sol·licituds ciutadanes.</p>
            <p><strong>Objectiu:</strong> Filtrar i comptar les sol·licituds que estan en estat "${estatObjetiu}".</p>
        `,
        questions: [
            {
                type: 'multiple_choice',
                question: `Quina funció d'Excel utilitzaries per comptar quantes vegades apareix l'estat "${estatObjetiu}"?`,
                options: [
                    '=SUMA(A1:A100)',
                    `=CONTA.SI(E1:E100; "${estatObjetiu}")`,
                    '=BUSCARV()',
                    '=FILTRAR()'
                ],
                correct: 1,
                points: 15,
                explanation: 'CONTA.SI permet comptar cel·les que coincideixen amb un criteri de text específic.'
            },
            {
                type: 'multiple_choice',
                question: 'Si vols destacar en vermell les sol·licituds "Pendents", quina eina utilitzaries?',
                options: [
                    'Format condicional',
                    'Filtre avançat',
                    'Taula dinàmica',
                    'Validació de dades'
                ],
                correct: 0,
                points: 15,
                explanation: 'El format condicional canvia l\'estètica de la cel·la segons el seu contingut automàticament.'
            }
        ]
    };
}

// ===== Main Generator Function =====
function generateRandomExercise() {
    const generators = [
        generateCertificatEmpadronament,
        generateRegistreSolicituds
    ];

    const generator = randomElement(generators);
    const newExercise = generator();

    // Add to appropriate category
    if (!exercisesDB[newExercise.category]) {
        exercisesDB[newExercise.category] = [];
    }
    exercisesDB[newExercise.category].push(newExercise);

    // Update stats if function exists
    if (typeof updateStats === 'function') {
        updateStats();
    }

    // Show the new exercise
    const categoryIndex = exercisesDB[newExercise.category].length - 1;
    if (typeof loadExercise === 'function') {
        loadExercise(newExercise.category, categoryIndex);
    }

    return newExercise;
}

// Override the generateNewExercise function in app.js
if (typeof window !== 'undefined') {
    window.generateNewExercise = function () {
        return generateRandomExercise();
    };
}
