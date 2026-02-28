// ===== Exercise Generator =====
// This module generates new exercises with random data

const generatorData = {
    nombres: [
        'Maria García Pérez', 'Joan Martínez López', 'Anna Rodríguez Sánchez',
        'Pere Soler Vidal', 'Laura Fernández Ruiz', 'David Sánchez Moreno',
        'Marta López Jiménez', 'Carles Vila Pujol', 'Núria Roca Mas',
        'Albert Puig Ferrer', 'Cristina Sala Valls', 'Jordi Camps Serra',
        'Sílvia Solé Martí', 'Marc Vives Guiu', 'Elena Costa Font',
        'Pau Ribas Soler', 'Mireia Bosch Sans', 'Roger Farré Coll'
    ],

    dnis: [
        '12345678A', '23456789B', '34567890C', '45678901D', '56789012E',
        '67890123F', '78901234G', '89012345H', '90123456J', '01234567K',
        '11223344L', '55667788M', '99001122N', '33445566P', '77889900Q'
    ],

    carrers: [
        'Carrer d\'Aragó', 'Passeig de Gràcia', 'Carrer de Balmes', 'Carrer de Provença',
        'Avinguda Diagonal', 'Carrer de València', 'Carrer de Mallorca', 'Carrer del Consell de Cent',
        'Rambla de Catalunya', 'Carrer de Muntaner', 'Gran Via de les Corts Catalanes',
        'Carrer de Sepúlveda', 'Carrer de Floridablanca', 'Carrer de Tamarit'
    ],

    districtes: [
        'Ciutat Vella', 'Eixample', 'Sants-Montjuïc', 'Les Corts', 'Sarrià-Sant Gervasi',
        'Gràcia', 'Horta-Guinardó', 'Nou Barris', 'Sant Andreu', 'Sant Martí'
    ],

    tipusSolicituds: [
        'Certificat d\'empadronament', 'Certificat de convivència', 'Llicència d\'obres menors',
        'Llicència d\'activitat', 'Sol·licitud de subvenció', 'Reclamació administrativa',
        'Instància genèrica', 'Queixa o suggeriment'
    ],

    tipusActivitats: [
        'Cultural', 'Esportiva', 'Formativa', 'Social', 'Juvenil', 'Gent Gran'
    ],

    carrecs: [
        'Alcalde/essa', 'Secretari/ària', 'Regidor/a de l\'Àrea', 'Tècnic/a d\'Administració',
        'Cap de Servei', 'Gerent de Districte'
    ]
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
        title: 'Certificat d\'empadronament (Generat)',
        description: 'Redactar un certificat oficial d\'empadronament',
        difficulty: 'Fàcil',
        scenario: `
            <p><strong>Situació:</strong> ${nom.split(' ')[0]} ${nom.split(' ')[1]} ${nom.split(' ')[2]} (DNI: ${dni}) ha sol·licitat un certificat d'empadronament.</p>
            <p><strong>Dades del ciutadà:</strong></p>
            <ul>
                <li>Nom complet: ${nom}</li>
                <li>DNI: ${dni}</li>
                <li>Adreça: ${adreca}</li>
                <li>Data d'empadronament: ${dataEmpadronament}</li>
                <li>Districte: ${districte}</li>
            </ul>
        `,
        tasks: [
            'Crear l\'encapçalament oficial de l\'Ajuntament de Barcelona',
            'Incloure el títol "CERTIFICAT D\'EMPADRONAMENT"',
            'Redactar el cos del certificat amb les dades del ciutadà',
            'Afegir la fórmula de tancament oficial',
            'Incloure peu de firma amb data i càrrec'
        ],
        checklist: [
            'L\'encapçalament inclou el logo/text de l\'Ajuntament de Barcelona',
            'El títol està en majúscules i centrat',
            'S\'han inclòs totes les dades del ciutadà correctament',
            'La redacció és formal i utilitza el llenguatge administratiu adequat',
            'Inclou la data d\'emissió del certificat',
            'Hi ha espai per a la signatura i segell oficial'
        ],
        solution: `
            <h4>Solució model:</h4>
            <p>Segueix l'estructura estàndard dels certificats d'empadronament:</p>
            <ul>
                <li>Encapçalament oficial</li>
                <li>Títol en majúscules</li>
                <li>Fórmula "CERTIFICA:"</li>
                <li>Dades del ciutadà en negreta</li>
                <li>Fórmula de tancament</li>
                <li>Signatura i segell</li>
            </ul>
        `,
        type: 'word'
    };
}

function generateRegistreSolicituds() {
    const numSolicituds = 10;
    const solicituds = [];

    for (let i = 0; i < numSolicituds; i++) {
        solicituds.push({
            expedient: `2026/${randomElement(['CE', 'CC', 'LO', 'LA'])}/${String(randomInt(1, 999)).padStart(5, '0')}`,
            nom: randomElement(generatorData.nombres),
            dni: randomElement(generatorData.dnis),
            tipus: randomElement(generatorData.tipusSolicituds),
            data: randomDate(new Date(2026, 0, 1), new Date(2026, 1, 16)),
            estat: randomElement(['Resolt', 'En tràmit', 'Pendent'])
        });
    }

    return {
        id: `excel-gen-${Date.now()}`,
        title: 'Registre de sol·licituds ciutadanes (Generat)',
        description: 'Organitzar i gestionar una base de dades de sol·licituds',
        difficulty: 'Mitjà',
        scenario: `
            <p><strong>Situació:</strong> Has rebut un llistat desordenat de ${numSolicituds} sol·licituds ciutadanes que cal organitzar i analitzar.</p>
            <p><strong>Dades generades aleatòriament</strong></p>
        `,
        tasks: [
            'Crear una taula amb capçaleres adequades',
            `Introduir les dades de les ${numSolicituds} sol·licituds`,
            'Ordenar per data (més recent primer)',
            'Aplicar format condicional: Verd (Resolt), Groc (En tràmit), Vermell (Pendent)',
            'Crear una taula resum amb el recompte per estat',
            'Afegir un gràfic de sectors amb la distribució d\'estats'
        ],
        checklist: [
            'La taula té capçaleres clares i descriptives',
            'Les dades estan ordenades correctament',
            'El format condicional funciona correctament',
            'La taula resum mostra els recomptes correctes',
            'El gràfic és clar i llegible',
            'S\'han utilitzat fórmules (CONTA.SI o similar)'
        ],
        solution: `
            <h4>Dades generades:</h4>
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.875rem;">
                <tr style="background: #334155;">
                    <th style="padding: 0.5rem; border: 1px solid #475569;">Expedient</th>
                    <th style="padding: 0.5rem; border: 1px solid #475569;">Nom</th>
                    <th style="padding: 0.5rem; border: 1px solid #475569;">DNI</th>
                    <th style="padding: 0.5rem; border: 1px solid #475569;">Tipus</th>
                    <th style="padding: 0.5rem; border: 1px solid #475569;">Data</th>
                    <th style="padding: 0.5rem; border: 1px solid #475569;">Estat</th>
                </tr>
                ${solicituds.map(s => `
                    <tr>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">${s.expedient}</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">${s.nom}</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">${s.dni}</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">${s.tipus}</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">${s.data}</td>
                        <td style="padding: 0.5rem; border: 1px solid #475569;">${s.estat}</td>
                    </tr>
                `).join('')}
            </table>
            <p style="margin-top: 1rem;"><em>Copia aquestes dades a Excel i segueix les instruccions de l'exercici.</em></p>
        `,
        type: 'excel'
    };
}

function generateActaReunio() {
    const dataReunio = randomDate(new Date(2026, 0, 1), new Date(2026, 11, 31));
    const horaInici = `${randomInt(9, 13)}:00h`;
    const horaFi = `${randomInt(14, 18)}:00h`;
    const president = randomElement(generatorData.nombres);
    const secretari = randomElement(generatorData.nombres);
    const lloc = `Sala de reunions del Districte de ${randomElement(generatorData.districtes)}`;

    return {
        id: `word-gen-acta-${Date.now()}`,
        title: 'Acta de reunió (Generada)',
        description: 'Redactar l\'acta d\'una sessió administrativa oficial',
        difficulty: 'Mitjà',
        scenario: `
            <p><strong>Situació:</strong> Has d'elaborar l'acta de la sessió de la Comissió Tècnica celebrada el ${dataReunio}.</p>
            <p><strong>Dades de la sessió:</strong></p>
            <ul>
                <li>Lloc: ${lloc}</li>
                <li>Data: ${dataReunio}</li>
                <li>Hora d'inici: ${horaInici}</li>
                <li>Hora de finalització: ${horaFi}</li>
                <li>President: ${president}</li>
                <li>Secretari: ${secretari}</li>
                <li>Ordre del dia: 3 punts (Aprovació acta anterior, Seguiment obres, Precs i preguntes)</li>
            </ul>
        `,
        tasks: [
            'Incloure l\'encapçalament complet amb l\'òrgan i tipus de sessió',
            'Redactar la fórmula d\'obertura amb dades de lloc i hora',
            'Llistar els assistents i absents',
            'Redactar els acords presos en estil indirecte i en present',
            'Incloure la fórmula de tancament i l\'hora de finalització',
            'Afegir peu de firma per a President i Secretari'
        ],
        checklist: [
            'L\'encapçalament és correcte i formal',
            'S\'utilitza la tercera persona i estil indirecte',
            'L\'ordre del dia apareix clarament llistat',
            'Els temps verbals són en present d\'indicatiu',
            'La fórmula de tancament inclou l\'hora de finalització',
            'Les signatures estan correctament identificades'
        ],
        solution: `
            <h4>Punts clau de l'Acta:</h4>
            <ul>
                <li><strong>Encapçalament:</strong> ACTA DE LA SESSIÓ...</li>
                <li><strong>Obertura:</strong> "A la ciutat de Barcelona, a..."</li>
                <li><strong>Estil:</strong> "S'aprova", "El president manifesta", "Es dóna compte"</li>
                <li><strong>Tancament:</strong> "I no havent-hi més assumptes a tractar..."</li>
            </ul>
        `,
        type: 'word'
    };
}

// ===== Main Generator Function =====
function generateRandomExercise() {
    const generators = [
        generateCertificatEmpadronament,
        generateRegistreSolicituds,
        generateActaReunio
    ];

    const generator = randomElement(generators);
    const newExercise = generator();

    // Add to appropriate category
    if (!exercisesDB[newExercise.type]) {
        exercisesDB[newExercise.type] = [];
    }
    exercisesDB[newExercise.type].push(newExercise);

    // Update stats if function exists
    if (typeof updateStats === 'function') {
        updateStats();
    }

    // Show the new exercise if function exists
    const categoryIndex = exercisesDB[newExercise.type].length - 1;
    if (typeof loadExercise === 'function') {
        loadExercise(newExercise.type, categoryIndex);
    }

    return newExercise;
}

// Export to window
if (typeof window !== 'undefined') {
    window.generateRandomExercise = generateRandomExercise;
}
