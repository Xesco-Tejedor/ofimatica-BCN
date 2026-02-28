// ===== Exercise Database with Real Knowledge Testing =====

const exercisesDB = {
    word: [
        {
            id: 'word-1',
            title: 'Certificat d\'empadronament',
            description: 'Coneixements sobre certificats oficials',
            difficulty: 'Fàcil',
            category: 'word',
            scenario: `
                <p><strong>Situació:</strong> La Sra. Maria García Pérez (DNI: 45678912B) ha sol·licitat un certificat d'empadronament per presentar-lo a la seva empresa.</p>
                <p><strong>Dades del ciutadà:</strong></p>
                <ul>
                    <li>Nom complet: Maria García Pérez</li>
                    <li>DNI: 45678912B</li>
                    <li>Adreça: Carrer d'Aragó, 123, 3r 2a, 08015 Barcelona</li>
                    <li>Data d'empadronament: 15 de gener de 2020</li>
                    <li>Districte: Eixample</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'encapçalament correcte per a un certificat oficial de l\'Ajuntament de Barcelona?',
                    options: [
                        'Barcelona - Certificat d\'Empadronament',
                        'AJUNTAMENT DE BARCELONA\nServei d\'Atenció Ciutadana\nDistricte de l\'Eixample',
                        'Certificat Oficial - Ajuntament BCN',
                        'Empadronament - Barcelona'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'L\'encapçalament oficial sempre inclou el nom complet de l\'organisme en majúscules, seguit del servei i, si escau, el districte.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina fórmula legal s\'utilitza normalment abans d\'exposar les dades del ciutadà en un certificat?',
                    options: [
                        'FA CONSTAR:',
                        'CERTIFICA:',
                        'MANIFESTA:',
                        'NOTIFICA:'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'La fórmula legal estàndard és "CERTIFICA:" en majúscules, seguida de dos punts.'
                },
                {
                    type: 'identify_error',
                    question: 'Quin d\'aquests fragments conté un ERROR en un certificat d\'empadronament en català?',
                    options: [
                        'Que segons consta en el Padró Municipal d\'Habitants d\'aquest municipi...',
                        'La Sra. MARIA GARCÍA PÉREZ, amb DNI núm. 45678912B...',
                        'Figura empadronado en este municipio desde el día...',
                        'I perquè consti i als efectes oportuns, s\'expedeix el present certificat...'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'L\'opció 3 està en castellà ("empadronado", "este municipio") quan el document ha de ser en català. Hauria de dir "figura empadronada en aquest municipi".'
                },
                {
                    type: 'multiple_choice',
                    question: 'Com s\'han de destacar les dades personals del ciutadà en el cos del certificat?',
                    options: [
                        'En cursiva',
                        'Subratllades',
                        'En negreta o majúscules',
                        'Amb un color diferent'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'Les dades personals (nom, DNI, adreça) es destaquen en negreta o majúscules per facilitar-ne la identificació.'
                },
                {
                    type: 'order',
                    question: 'Ordena correctament les parts d\'un certificat oficial:',
                    items: [
                        'Fórmula de tancament ("I perquè consti...")',
                        'Encapçalament oficial',
                        'Títol del document',
                        'Fórmula legal ("CERTIFICA:")',
                        'Cos amb dades del ciutadà',
                        'Signatura i segell'
                    ],
                    correct_order: [1, 2, 3, 4, 0, 5],
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Encapçalament, 2) Títol, 3) Fórmula legal, 4) Cos, 5) Tancament, 6) Signatura.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Completa la frase de tancament: "I perquè consti i als efectes _______, s\'expedeix el present certificat a Barcelona, a [data]."',
                    options: [
                        'legals',
                        'necessaris',
                        'oportuns',
                        'convenients'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'La fórmula estàndard de tancament és "als efectes oportuns", que significa "per als fins que calgui".'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin element NO és obligatori en un certificat d\'empadronament?',
                    options: [
                        'Data d\'emissió del certificat',
                        'DNI del ciutadà',
                        'Fotografia del ciutadà',
                        'Signatura de l\'autoritat competent'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'La fotografia NO és obligatòria en un certificat d\'empadronament. Els elements obligatoris són: dades del ciutadà, DNI, adreça, data d\'empadronament, data d\'emissió i signatura.'
                },
                {
                    type: 'multiple_choice',
                    question: 'En quin idioma s\'ha d\'expedir per defecte un certificat oficial a Barcelona si el ciutadà no especifica preferència?',
                    options: [
                        'Castellà',
                        'Català',
                        'Anglès',
                        'Bilingüe'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'A Catalunya, l\'idioma oficial per defecte de l\'administració és el català. El ciutadà pot sol·licitar-lo en castellà si ho desitja.'
                }
            ],
            total_points: 90,
            pass_score: 60
        },
        {
            id: 'word-2',
            title: 'Notificació de resolució administrativa',
            description: 'Coneixements sobre notificacions oficials',
            difficulty: 'Mitjà',
            category: 'word',
            scenario: `
                <p><strong>Situació:</strong> S'ha de notificar al Sr. Joan Martínez López la resolució del seu expedient de sol·licitud de llicència d'activitat.</p>
                <p><strong>Dades de l'expedient:</strong></p>
                <ul>
                    <li>Núm. expedient: 2024/LA/00123</li>
                    <li>Interessat: Joan Martínez López</li>
                    <li>DNI: 12345678A</li>
                    <li>Adreça: Carrer de Balmes, 45, 08007 Barcelona</li>
                    <li>Tipus de sol·licitud: Llicència d'activitat per a cafeteria</li>
                    <li>Resolució: FAVORABLE</li>
                    <li>Data de resolució: 10 de febrer de 2026</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quin element ha d\'aparèixer PRIMER en una notificació administrativa?',
                    options: [
                        'El nom de l\'interessat',
                        'El número d\'expedient i data',
                        'L\'assumpte de la notificació',
                        'La resolució adoptada'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Primer s\'identifica l\'expedient amb el número i la data, després l\'interessat i l\'assumpte.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquesta frase de notificació:',
                    options: [
                        'Mitjançant la present, es procedeix a notificar-li la resolució adoptada...',
                        'En data 10 de febrer de 2026, s\'ha resolt CONCEDIR la llicència...',
                        'Pot interposar recurs en el termini de 15 dies...',
                        'Contra aquesta resolució, que posa fi a la via administrativa...'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'El termini per interposar recurs contenciós administratiu és de DOS MESOS, no 15 dies. Els 15 dies són per al recurs de reposició.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quan una resolució és FAVORABLE, quin verb s\'utilitza?',
                    options: [
                        'S\'ha resolt APROVAR',
                        'S\'ha resolt CONCEDIR',
                        'S\'ha resolt ACCEPTAR',
                        'S\'ha resolt AUTORITZAR'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'El verb tècnic correcte és "CONCEDIR" per a resolucions favorables de llicències i autoritzacions.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin tipus de recurs es pot interposar contra una resolució que "posa fi a la via administrativa"?',
                    options: [
                        'Recurs d\'alçada',
                        'Recurs de reposició',
                        'Recurs contenciós administratiu',
                        'Recurs de revisió'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'Quan una resolució posa fi a la via administrativa, el recurs procedent és el contenciós administratiu davant els jutjats.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Davant de quin òrgan s\'interposa el recurs contenciós administratiu?',
                    options: [
                        'Davant l\'Ajuntament de Barcelona',
                        'Davant la Generalitat de Catalunya',
                        'Davant els Jutjats Contenciosos Administratius',
                        'Davant el Tribunal Suprem'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'El recurs contenciós administratiu s\'interposa davant els Jutjats Contenciosos Administratius de la província corresponent.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Contra aquesta resolució, que posa fi a la via administrativa, pot interposar recurs contenciós administratiu en el termini de:',
                    options: [
                        'Quinze dies',
                        'Un mes',
                        'Dos mesos',
                        'Tres mesos'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'El termini per interposar recurs contenciós administratiu és de dos mesos des de la notificació.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'ordre correcte de les parts en una notificació administrativa?',
                    options: [
                        'Resolució, Recursos, Dades de l\'expedient, Interessat',
                        'Dades de l\'expedient, Interessat, Cos, Resolució, Recursos',
                        'Interessat, Expedient, Recursos, Resolució',
                        'Cos, Resolució, Interessat, Recursos'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Expedient, 2) Interessat, 3) Cos, 4) Resolució, 5) Recursos.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Què significa que una resolució "posa fi a la via administrativa"?',
                    options: [
                        'Que no es pot recórrer',
                        'Que només es pot recórrer davant els tribunals',
                        'Que l\'expedient està tancat definitivament',
                        'Que cal pagar taxes'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Significa que s\'esgota la via administrativa i només es pot recórrer davant la via judicial (contenciós administratiu).'
                }
            ],
            total_points: 95,
            pass_score: 65
        },
        {
            id: 'word-3',
            title: 'Acta de reunió de la Junta de Govern Local',
            description: 'Coneixements sobre redacció d\'actes oficials',
            difficulty: 'Mitjà',
            category: 'word',
            scenario: `
                <p><strong>Situació:</strong> Has d'elaborar l'acta de la sessió ordinària de la Junta de Govern Local celebrada el 15 de febrer de 2026.</p>
                <p><strong>Dades de la sessió:</strong></p>
                <ul>
                    <li>Tipus de sessió: Ordinària</li>
                    <li>Data: 15 de febrer de 2026</li>
                    <li>Hora d'inici: 10:00h</li>
                    <li>Hora de finalització: 12:30h</li>
                    <li>Lloc: Sala de Plens de l'Ajuntament</li>
                    <li>President: Sr. Pere Soler (Alcalde)</li>
                    <li>Secretari: Sra. Maria Camps</li>
                    <li>Assistents: 8 regidors</li>
                    <li>Absents justificats: 2 regidors</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'encapçalament correcte d\'una acta de la Junta de Govern Local?',
                    options: [
                        'Acta de la reunió del dia 15 de febrer',
                        'ACTA DE LA SESSIÓ ORDINÀRIA DE LA JUNTA DE GOVERN LOCAL',
                        'Reunió de la Junta - 15/02/2026',
                        'Acta núm. 1 - Junta de Govern'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'L\'encapçalament ha d\'incloure en majúscules: ACTA + tipus de sessió + òrgan.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'ordre correcte de les parts d\'una acta oficial?',
                    options: [
                        'Encapçalament, Assistents, Ordre del dia, Obertura, Desenvolupament, Tancament',
                        'Obertura, Ordre del dia, Assistents, Tancament',
                        'Encapçalament, Ordre del dia, Desenvolupament, Assistents',
                        'Assistents, Encapçalament, Obertura, Tancament'
                    ],
                    correct: 0,
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Encapçalament, 2) Assistents, 3) Ordre del dia, 4) Obertura, 5) Desenvolupament, 6) Tancament.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina fórmula s\'utilitza normalment per obrir una acta a Barcelona?',
                    options: [
                        'En la ciutat de Barcelona...',
                        'A la ciutat de Barcelona...',
                        'Reunits a Barcelona...',
                        'S\'obre la sessió a...'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'La fórmula d\'obertura estàndard és "A la ciutat de Barcelona, a [data], es reuneix..."'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquest fragment d\'acta:',
                    options: [
                        'Es reuneix la Junta de Govern Local, sota la presidència del Sr. Pere Soler...',
                        'Assisteixen els regidors: Sra. Anna Puig, Sr. Joan Martí, Sra. Laura Vidal...',
                        'S\'obre la sessió a les 10:00 hores del matí...',
                        'El president va dir que s\'aprovava el punt primer de l\'ordre del dia'
                    ],
                    correct: 3,
                    points: 15,
                    explanation: 'Les actes s\'escriuen en tercera persona i estil indirecte. Hauria de ser: "El president manifesta que s\'aprova..." o "S\'aprova el punt primer..."'
                },
                {
                    type: 'multiple_choice',
                    question: 'Com s\'han de reflectir les votacions en una acta?',
                    options: [
                        'Només el resultat final (aprovat/rebutjat)',
                        'Vots a favor, en contra i abstencions amb noms dels votants',
                        'Només els vots en contra',
                        'Un resum general sense detalls'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Cal detallar el nombre de vots a favor, en contra i abstencions, i identificar els membres que voten en cada sentit.'
                },
                {
                    type: 'fill_blank',
                    question: 'Completa la frase de tancament: "I no havent-hi més assumptes a tractar, el president aixeca la sessió a les _____ hores, de la qual cosa, com a secretari, estenc aquesta acta."',
                    correct_answer: '12:30',
                    case_sensitive: false,
                    points: 10,
                    explanation: 'Cal indicar l\'hora exacta de finalització de la sessió (en aquest cas, 12:30h segons les dades).'
                },
                {
                    type: 'multiple_choice',
                    question: 'Qui ha de signar una acta de la Junta de Govern Local?',
                    options: [
                        'Només el president',
                        'Només el secretari',
                        'El president i el secretari',
                        'Tots els assistents'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'Les actes oficials han de ser signades pel president de la sessió i pel secretari que l\'estén.'
                },
                {
                    type: 'short_answer',
                    question: 'En quin temps verbal s\'han d\'escriure les actes oficials?',
                    correct_answers: ['present', 'present d\'indicatiu', 'temps present'],
                    case_sensitive: false,
                    points: 10,
                    explanation: 'Les actes s\'escriuen en present d\'indicatiu per donar-los caràcter de document oficial vigent (ex: "S\'aprova", "Es tracta", "Manifesta").'
                }
            ],
            total_points: 90,
            pass_score: 60
        },
        {
            id: 'word-4',
            title: 'Informe tècnic sobre equipament municipal',
            description: 'Coneixements sobre elaboració d\'informes tècnics',
            difficulty: 'Difícil',
            category: 'word',
            scenario: `
                <p><strong>Situació:</strong> Has d'elaborar un informe tècnic sobre l'estat del Casal de Barri "La Fraternitat".</p>
                <p><strong>Dades de l'equipament:</strong></p>
                <ul>
                    <li>Nom: Casal de Barri "La Fraternitat"</li>
                    <li>Adreça: Carrer de Provença, 234, Barcelona</li>
                    <li>Any de construcció: 1985</li>
                    <li>Superfície: 450 m²</li>
                    <li>Problema detectat: Humitats a la sala polivalent</li>
                    <li>Data d'inspecció: 12 de febrer de 2026</li>
                    <li>Inspector: Sr. Carles Roca (tècnic municipal)</li>
                </ul>
            `,
            questions: [
                {
                    type: 'order',
                    question: 'Ordena les parts d\'un informe tècnic municipal:',
                    items: [
                        'Conclusions',
                        'Antecedents',
                        'Proposta de resolució',
                        'Objecte de l\'informe',
                        'Consideracions tècniques',
                        'Signatura del tècnic'
                    ],
                    correct_order: [1, 3, 4, 0, 2, 5],
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Antecedents, 2) Objecte, 3) Consideracions, 4) Conclusions, 5) Proposta, 6) Signatura.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin element NO és obligatori en l\'encapçalament d\'un informe tècnic?',
                    options: [
                        'Número d\'expedient',
                        'Data de l\'informe',
                        'Nom del tècnic que l\'emet',
                        'Pressupost estimat de la solució'
                    ],
                    correct: 3,
                    points: 10,
                    explanation: 'El pressupost pot anar al cos de l\'informe o en un annex, però no és obligatori a l\'encapçalament. Sí ho són: número d\'expedient, data i identificació del tècnic.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina secció de l\'informe descriu els fets que motiven la seva elaboració?',
                    options: [
                        'Consideracions tècniques',
                        'Conclusions',
                        'Antecedents',
                        'Objecte de l\'informe'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'La secció "Antecedents" exposa els fets previs i el context que justifiquen l\'elaboració de l\'informe.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquest fragment d\'informe:',
                    options: [
                        'ANTECEDENTS: En data 5 de febrer de 2026 es va rebre una queixa veïnal...',
                        'OBJECTE: El present informe té per objecte analitzar l\'estat de l\'equipament...',
                        'CONSIDERACIONS: Jo crec que les humitats són greus i cal actuar ràpid...',
                        'CONCLUSIONS: D\'acord amb les consideracions anteriors, es conclou que...'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'Els informes tècnics han de ser objectius i impersonals. No s\'utilitza la primera persona ("jo crec"). Hauria de ser: "S\'observa que les humitats..." o "Es considera que..."'
                },
                {
                    type: 'multiple_choice',
                    question: 'En la secció "Proposta de resolució", quin verb és més adequat?',
                    options: [
                        'Proposo que es faci...',
                        'S\'hauria de fer...',
                        'Es proposa que s\'adopti...',
                        'Caldria fer...'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'La fórmula correcta és impersonal i formal: "Es proposa que s\'adopti la següent resolució..." o "S\'informa favorablement..."'
                },
                {
                    type: 'multiple_choice',
                    question: 'Completa la fórmula de tancament d\'un informe: "És tot el que tinc l\'_____ d\'informar, amb la salvaguarda de millor criteri tècnic."',
                    options: [
                        'deure',
                        'objectiu',
                        'honor',
                        'plaer'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'La fórmula de tancament estàndard és "És tot el que tinc l\'honor d\'informar" seguida de la clàusula de salvaguarda.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Què significa la clàusula "amb la salvaguarda de millor criteri tècnic"?',
                    options: [
                        'Que l\'informe pot estar equivocat',
                        'Que es reserva la possibilitat que hi hagi opinions tècniques més fonamentades',
                        'Que cal demanar un segon informe',
                        'Que l\'informe no és definitiu'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'És una clàusula de prudència que reconeix que poden existir altres opinions tècniques igualment vàlides o més fonamentades.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Com s\'anomenen els documents adjunts que complementen un informe?',
                    options: [
                        'Adjunts',
                        'Annexos',
                        'Addendes',
                        'Suplements'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Els documents complementaris (fotografies, plànols, pressupostos) s\'anomenen "annexos" i es numeren (Annex I, Annex II, etc.).'
                }
            ],
            total_points: 90,
            pass_score: 60
        },
        {
            id: 'word-5',
            title: 'Registre d\'entrada de documents',
            description: 'Coneixements sobre el Registre General',
            difficulty: 'Fàcil',
            category: 'word',
            scenario: `
                <p><strong>Situació:</strong> Arriba un document al Registre General de l'Ajuntament que cal registrar.</p>
                <p><strong>Dades del document:</strong></p>
                <ul>
                    <li>Remitent: Associació de Veïns del Barri Gòtic</li>
                    <li>Assumpte: Sol·licitud d'autorització per a festa major</li>
                    <li>Data de presentació: 16 de febrer de 2026, 11:45h</li>
                    <li>Forma de presentació: Presencial</li>
                    <li>Número de pàgines: 3 + 2 annexos</li>
                    <li>Destinatari: Regidoria de Cultura</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quin és el format correcte d\'un número de registre d\'entrada del 2026?',
                    options: [
                        'E/2026/001234',
                        '2026-E-1234',
                        'REG-001234-2026',
                        '001234/2026/E'
                    ],
                    correct: 0,
                    points: 10,
                    explanation: 'El format estàndard és: E (entrada) / ANY / NÚMERO SEQÜENCIAL amb zeros a l\'esquerra.'
                },
                {
                    type: 'order',
                    question: 'Ordena els passos per registrar un document d\'entrada:',
                    items: [
                        'Posar el segell de registre al document',
                        'Verificar la documentació presentada',
                        'Assignar número de registre',
                        'Introduir les dades al sistema informàtic',
                        'Lliurar còpia segellada al presentador',
                        'Trametre l\'original al destinatari'
                    ],
                    correct_order: [1, 2, 3, 0, 4, 5],
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Verificar, 2) Assignar número, 3) Introduir dades, 4) Segellar, 5) Lliurar còpia, 6) Trametre original.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin camp del registre identifica qui presenta el document?',
                    options: [
                        'Destinatari',
                        'Remitent',
                        'Tramitador',
                        'Secretari'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'El camp "Remitent" o "Interessat" identifica la persona física o jurídica que presenta el document.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquest assentament de registre:',
                    options: [
                        'Núm. registre: E/2026/001234 - Data: 16/02/2026 11:45h',
                        'Remitent: Associació de Veïns del Barri Gòtic',
                        'Assumpte: Sol·licitud autorització festa major',
                        'Destinatari: Sr. Joan Puig (Regidor de Cultura)'
                    ],
                    correct: 3,
                    points: 15,
                    explanation: 'El destinatari ha de ser l\'òrgan administratiu (Regidoria de Cultura), no la persona física del regidor.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Què s\'ha d\'incloure al segell de registre?',
                    options: [
                        'Només el número de registre',
                        'Número de registre i data',
                        'Número de registre, data i hora',
                        'Número de registre, data, hora i signatura'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'El segell de registre ha d\'incloure: número de registre, data i hora de presentació per garantir la traçabilitat.'
                },
                {
                    type: 'fill_blank',
                    question: 'El registre d\'entrada garanteix la _____ del document i la seva data de presentació.',
                    correct_answer: 'traçabilitat',
                    case_sensitive: false,
                    points: 10,
                    explanation: 'El registre garanteix la "traçabilitat" del document, permetent seguir el seu recorregut administratiu.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Què ha de rebre el ciutadà després de registrar un document?',
                    options: [
                        'L\'original amb el segell',
                        'Una còpia segellada',
                        'Un resguard sense segell',
                        'Només un número de referència verbal'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'El ciutadà rep una còpia del document amb el segell de registre com a justificant de presentació. L\'original es tramita internament.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quants dies té l\'Administració per resoldre una sol·licitud si no s\'especifica un termini concret?',
                    options: [
                        '1 mes',
                        '2 mesos',
                        '3 mesos',
                        '6 mesos'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'El termini màxim per resoldre és de 3 mesos (90 dies) si no hi ha un termini específic establert per normativa.'
                }
            ],
            total_points: 90,
            pass_score: 60
        },
        {
            id: 'word-6',
            title: 'Convocatòria de sessió plenària',
            description: 'Coneixements sobre convocatòries oficials',
            difficulty: 'Mitjà',
            category: 'word',
            scenario: `
                <p><strong>Situació:</strong> Has de redactar la convocatòria per a la sessió ordinària del Ple Municipal.</p>
                <p><strong>Dades de la sessió:</strong></p>
                <ul>
                    <li>Tipus de sessió: Ordinària</li>
                    <li>Data prevista: 28 de febrer de 2026</li>
                    <li>Hora: 18:00h</li>
                    <li>Lloc: Saló de Sessions del Ple</li>
                    <li>Punts de l'ordre del dia: 8</li>
                    <li>Data de convocatòria: 21 de febrer de 2026</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Amb quanta antelació mínima s\'ha de convocar una sessió ordinària del Ple?',
                    options: [
                        '24 hores',
                        '48 hores',
                        '2 dies hàbils',
                        '5 dies hàbils'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'Les sessions ordinàries del Ple s\'han de convocar amb un mínim de 2 dies hàbils d\'antelació.'
                },
                {
                    type: 'order',
                    question: 'Ordena les parts d\'una convocatòria de Ple:',
                    items: [
                        'Ordre del dia',
                        'Lloc, data i hora de la sessió',
                        'Encapçalament (CONVOCATÒRIA)',
                        'Signatura de l\'Alcalde/essa',
                        'Destinataris de la convocatòria',
                        'Fórmula de convocatòria'
                    ],
                    correct_order: [2, 5, 1, 0, 4, 3],
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Encapçalament, 2) Fórmula, 3) Lloc/data/hora, 4) Ordre del dia, 5) Destinataris, 6) Signatura.'
                },
                {
                    type: 'short_answer',
                    question: 'Qui té la competència per convocar el Ple Municipal?',
                    correct_answers: ['l\'alcalde', 'alcalde', 'l\'alcaldessa', 'alcaldessa'],
                    options: [
                        'El Secretari Municipal',
                        'L\'Alcalde/essa',
                        'El Regidor de Governació',
                        'La Junta de Govern Local'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'La competència per convocar el Ple correspon a l\'Alcalde/essa com a president/a de la corporació.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin element s\'utilitza per incloure precs i preguntes en una sessió ordinària del Ple?',
                    options: [
                        'S\'ha de demanar la paraula per sorpresa',
                        'És l\'últim punt obligatori de l\'ordre del dia',
                        'S\'ha de presentar per escrit 24h abans',
                        'No es poden fer precs i preguntes al Ple'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'El punt "Precs i preguntes" sempre ha de ser l\'últim punt de l\'ordre del dia en les sessions ordinàries.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és el primer punt obligatori de qualsevol ordre del dia?',
                    options: [
                        'Donar compte de resolucions',
                        'Aprovació de l\'acta anterior',
                        'Assumptes urgents',
                        'Precs i preguntes'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'El primer punt sempre és "Aprovació, si escau, de l\'acta de la sessió anterior".'
                },
                {
                    type: 'multiple_choice',
                    question: 'Completa la fórmula de convocatòria: "En ús de les atribucions que em confereix la legislació vigent, es _____ els membres del Ple Municipal..."',
                    options: [
                        'reuneixen',
                        'cita',
                        'convoca',
                        'avisa'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'La fórmula correcta és "es convoca" en tercera persona, seguida dels destinataris.'
                },
                {
                    type: 'multiple_choice',
                    question: 'A qui s\'ha de notificar la convocatòria del Ple?',
                    options: [
                        'Només als regidors del govern',
                        'A tots els regidors i al secretari',
                        'Només a l\'oposició',
                        'A tots els ciutadans'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'La convocatòria s\'ha de notificar a tots els membres del Ple (regidors de govern i oposició) i al secretari de la corporació.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Com s\'anomena una sessió del Ple que no està programada al calendari anual?',
                    options: [
                        'Sessió urgent',
                        'Sessió especial',
                        'Sessió extraordinària',
                        'Sessió de tràmit'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'Les sessions no programades s\'anomenen "extraordinàries" i poden ser urgents o no urgents segons la necessitat.'
                }
            ]
        }
    ],
    excel: [
        {
            id: 'excel-1',
            title: 'Registre de sol·licituds ciutadanes',
            description: 'Coneixements sobre gestió de bases de dades',
            difficulty: 'Mitjà',
            category: 'excel',
            scenario: `
                <p><strong>Situació:</strong> Has rebut un llistat de 10 sol·licituds ciutadanes que cal organitzar i analitzar.</p>
                <p><strong>Camps disponibles:</strong> Núm. expedient, Nom, DNI, Tipus de sol·licitud, Data, Estat</p>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Per ordenar les sol·licituds de més recent a més antiga, quin criteri has d\'aplicar al camp "Data"?',
                    options: [
                        'Ordenar A-Z',
                        'Ordenar Z-A',
                        'Ordenar de menor a major',
                        'Ordenar de major a menor'
                    ],
                    correct: 3,
                    points: 10,
                    explanation: 'Per mostrar les dates més recents primer, cal ordenar de major a menor (descendent).'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina funció d\'Excel utilitzaries per comptar quantes sol·licituds estan en estat "Resolt"?',
                    options: [
                        'SUMA.SI',
                        'CONTA.SI',
                        'BUSCARV',
                        'COMPTA'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'La funció CONTA.SI (o COUNTIF en anglès) compta cel·les que compleixen un criteri específic.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Per aplicar format condicional que posi en VERD les sol·licituds "Resolt", has de:',
                    options: [
                        'Seleccionar la columna Estat > Format condicional > Nova regla > El valor de la cel·la és igual a "Resolt"',
                        'Canviar el color de fons manualment',
                        'Utilitzar la funció COLOR()',
                        'Crear una taula dinàmica'
                    ],
                    correct: 0,
                    points: 10,
                    explanation: 'El format condicional permet aplicar automàticament colors segons el valor de les cel·les.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin tipus de taula cal crear abans de generar un gràfic de sectors amb recomptes?',
                    options: [
                        'Taula de dades brutes',
                        'Taula dinàmica o de resum',
                        'Taula amb format condicional',
                        'No cal cap taula prèvia'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Cal crear una taula resum o dinàmica que compti quantes sol·licituds hi ha de cada estat abans de fer el gràfic.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Si vols que el gràfic de sectors mostri percentatges, has d\'activar:',
                    options: [
                        'Etiquetes de dades > Percentatge',
                        'Títol del gràfic',
                        'Llegenda',
                        'Eix de valors'
                    ],
                    correct: 0,
                    points: 10,
                    explanation: 'A les opcions d\'etiquetes de dades pots activar que es mostrin els percentatges.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquesta fórmula: =CONTA.SI(F2:F11;"Resolt")',
                    options: [
                        'El rang hauria de ser F2:F10',
                        'Hauria de ser SUMA.SI en lloc de CONTA.SI',
                        'No hi ha cap error, la fórmula és correcta',
                        'Falta el signe $ per fixar les referències'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'La fórmula és correcta: CONTA.SI compta les cel·les del rang F2:F11 que contenen "Resolt".'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'ordre correcte de passos per crear un gràfic de sectors?',
                    options: [
                        'Inserir gràfic, Seleccionar dades, Crear taula resum',
                        'Crear taula resum, Seleccionar-la, Inserir gràfic, Personalitzar',
                        'Seleccionar dades, Inserir gràfic, Crear taula resum',
                        'Personalitzar, Inserir gràfic, Seleccionar dades'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'Primer es crea la taula resum, després se selecciona, s\'insereix el gràfic i finalment es personalitza.'
                }
            ],
            total_points: 85,
            pass_score: 60
        },
        {
            id: 'excel-2',
            title: 'Pressupost de despeses per departament',
            description: 'Coneixements sobre elaboració de pressupostos',
            difficulty: 'Mitjà',
            category: 'excel',
            scenario: `
                <p><strong>Situació:</strong> Has de crear un pressupost trimestral per al Departament de Cultura amb diferents partides.</p>
                <p><strong>Dades del pressupost:</strong></p>
                <ul>
                    <li>Partida 1: Personal - 45.000 €</li>
                    <li>Partida 2: Material fungible - 8.500 €</li>
                    <li>Partida 3: Activitats culturals - 22.000 €</li>
                    <li>Partida 4: Manteniment equipaments - 12.500 €</li>
                    <li>Pressupost total trimestre anterior: 85.000 €</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quina funció d\'Excel utilitzaries per calcular el total del pressupost?',
                    options: [
                        'AVERAJE',
                        'COMPTE',
                        'SUMA',
                        'TOTAL'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'La funció SUMA (o SUM en anglès) suma tots els valors d\'un rang de cel·les.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és el pressupost total del trimestre actual?',
                    options: [
                        '85.000 €',
                        '88.000 €',
                        '90.000 €',
                        '92.000 €'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: '45.000 + 8.500 + 22.000 + 12.500 = 88.000 €'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina és la fórmula correcta per calcular la variació percentual entre el valor nou (B2) i l\'antic (A2)?',
                    options: [
                        '=B2-A2',
                        '=(B2-A2)/B2',
                        '=(B2-A2)/A2',
                        '=B2/A2'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'La variació percentual es calcula: (Valor nou - Valor antic) / Valor antic.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin percentatge representa la partida de Personal sobre el total?',
                    options: [
                        '45,45%',
                        '50,00%',
                        '51,14%',
                        '52,94%'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: '45.000 / 88.000 × 100 = 51,14%'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquesta fórmula per calcular el percentatge: =A2/B2',
                    options: [
                        'Falta multiplicar per 100',
                        'Hauria de ser =B2/A2',
                        'Falta el signe $',
                        'No hi ha cap error'
                    ],
                    correct: 0,
                    points: 15,
                    explanation: 'Per obtenir un percentatge cal multiplicar per 100: =A2/B2*100 o bé aplicar format de percentatge a la cel·la.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'ordre correcte dels passos per crear un gràfic de barres del pressupost?',
                    options: [
                        'Seleccionar dades, Inserir gràfic, Verificar, Personalitzar, Aplicar estil',
                        'Inserir gràfic, Seleccionar dades, Personalitzar, Aplicar estil, Verificar',
                        'Personalitzar, Seleccionar dades, Inserir gràfic, Verificar, Aplicar estil',
                        'Aplicar estil, Seleccionar dades, Inserir gràfic, Personalitzar, Verificar'
                    ],
                    correct: 0,
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Seleccionar dades, 2) Inserir gràfic, 3) Verificar, 4) Personalitzar, 5) Aplicar estil.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin símbol s\'utilitza per fixar una referència de cel·la en una fórmula d\'Excel?',
                    options: [
                        '%',
                        '&',
                        '$',
                        '#'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'El símbol $ fixa les referències (ex: $A$1 fixa fila i columna, $A1 només columna, A$1 només fila).'
                }
            ],
            total_points: 85,
            pass_score: 60
        },
        {
            id: 'excel-3',
            title: 'Control d\'inventari de material d\'oficina',
            description: 'Coneixements sobre gestió d\'estoc',
            difficulty: 'Fàcil',
            category: 'excel',
            scenario: `
                <p><strong>Situació:</strong> Gestiones l'inventari de material d'oficina i has de controlar l'estoc mínim.</p>
                <p><strong>Dades de l'inventari:</strong></p>
                <ul>
                    <li>Article: Paper A4 - Estoc actual: 15 paquets - Estoc mínim: 20</li>
                    <li>Article: Bolígrafs blaus - Estoc actual: 45 unitats - Estoc mínim: 30</li>
                    <li>Article: Carpetes - Estoc actual: 8 unitats - Estoc mínim: 10</li>
                    <li>Article: Tòner impressora - Estoc actual: 3 unitats - Estoc mínim: 5</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quants articles estan per sota de l\'estoc mínim?',
                    options: [
                        '1 article',
                        '2 articles',
                        '3 articles',
                        '4 articles'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'Paper A4 (15<20), Carpetes (8<10) i Tòner (3<5) estan per sota del mínim = 3 articles.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina funció utilitzaries per comptar automàticament quants articles estan per sota de l\'estoc mínim?',
                    options: [
                        'CONTA',
                        'CONTA.BUITS',
                        'CONTA.SI',
                        'SUMA.SI'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'CONTA.SI permet comptar cel·les que compleixen una condició (ex: estoc actual < estoc mínim).'
                },
                {
                    type: 'multiple_choice',
                    question: 'Per aplicar format condicional que marqui en VERMELL els articles amb estoc baix, la condició seria:',
                    options: [
                        'Si Estoc actual > Estoc mínim',
                        'Si Estoc actual < Estoc mínim',
                        'Si Estoc actual = Estoc mínim',
                        'Si Estoc actual ≠ Estoc mínim'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Cal marcar quan l\'estoc actual és MENOR que l\'estoc mínim per alertar de la necessitat de reposició.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin operador s\'utilitza en la fórmula per calcular unitats a comprar? (Estoc mínim [Operador] Estoc actual)',
                    options: [
                        '+ (sumar)',
                        '- (restar)',
                        '* (multiplicar)',
                        '/ (dividir)'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Cal restar: Estoc mínim - Estoc actual = Unitats a comprar.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquesta fórmula per calcular el valor total de l\'inventari: =A2*B2+A3*B3+A4*B4',
                    options: [
                        'Hauria d\'utilitzar SUMA en lloc de +',
                        'És massa llarga, hauria d\'utilitzar SUMAPRODUCTE',
                        'Falta multiplicar per l\'IVA',
                        'No hi ha cap error'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'Per multiplicar rangs i sumar els resultats és més eficient utilitzar SUMAPRODUCTE(A2:A4;B2:B4).'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'ordre correcte per generar un informe d\'estoc baix?',
                    options: [
                        'Imprimir, Filtrar, Seleccionar, Ordenar',
                        'Seleccionar taula, Filtrar, Ordenar, Afegir columna, Imprimir',
                        'Ordenar, Seleccionar, Afegir columna, Imprimir',
                        'Filtrar, Imprimir, Seleccionar, Ordenar'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Seleccionar taula, 2) Filtrar, 3) Ordenar, 4) Afegir columna, 5) Imprimir.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina funció utilitzaries per calcular el valor total de l\'inventari multiplicant preu unitari per quantitat en rangs?',
                    options: [
                        'SUMA',
                        'PRODUCTE',
                        'SUMAPRODUCTE',
                        'MULTIPLICA'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: 'SUMAPRODUCTE multiplica els elements corresponents de dos rangs i suma els resultats.'
                }
            ],
            total_points: 85,
            pass_score: 60
        },
        {
            id: 'excel-4',
            title: 'Estadístiques de serveis ciutadans',
            description: 'Coneixements sobre anàlisi de dades',
            difficulty: 'Mitjà',
            category: 'excel',
            scenario: `
                <p><strong>Situació:</strong> Has de crear un informe estadístic mensual d'atenció ciutadana.</p>
                <p><strong>Dades del mes de gener 2026:</strong></p>
                <ul>
                    <li>Setmana 1: 245 consultes</li>
                    <li>Setmana 2: 312 consultes</li>
                    <li>Setmana 3: 198 consultes (festius)</li>
                    <li>Setmana 4: 287 consultes</li>
                    <li>Total mes anterior (desembre): 980 consultes</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quin és el total de consultes del mes de gener?',
                    options: [
                        '980 consultes',
                        '1.042 consultes',
                        '1.084 consultes',
                        '1.120 consultes'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: '245 + 312 + 198 + 287 = 1.042 consultes'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina funció utilitzaries per calcular la mitjana setmanal de consultes?',
                    options: [
                        'SUMA',
                        'MITJANA',
                        'COMPTA',
                        'MODA'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'La funció MITJANA (o AVERAGE en anglès) calcula la mitjana aritmètica d\'un rang de valors.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina setmana va tenir MÉS consultes?',
                    options: [
                        'Setmana 1',
                        'Setmana 2',
                        'Setmana 3',
                        'Setmana 4'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'La setmana 2 amb 312 consultes és la que en té més.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina funció d\'Excel retorna automàticament el valor màxim d\'un llistat?',
                    options: [
                        'GRAN',
                        'ALTA',
                        'MAX',
                        'MÀXIM'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'La funció MAX retorna el valor màxim d\'un rang de cel·les.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquesta fórmula per calcular la variació: =(1042-980)/1042*100',
                    options: [
                        'Hauria de dividir per 980, no per 1042',
                        'Falta el signe $ per fixar referències',
                        'Hauria d\'utilitzar la funció VARIACIÓ',
                        'No hi ha cap error'
                    ],
                    correct: 0,
                    points: 15,
                    explanation: 'La variació percentual es calcula respecte al valor ANTERIOR: (1042-980)/980*100 = 6,33%'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin tipus de gràfic és més adequat per mostrar l\'evolució setmanal de consultes?',
                    options: [
                        'Gràfic de sectors (circular)',
                        'Gràfic de línies o columnes',
                        'Gràfic de dispersió',
                        'Gràfic de rosquilla'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Els gràfics de línies o columnes són ideals per mostrar evolucions temporals (tendències).'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'ordre correcte de passos per crear una taula dinàmica?',
                    options: [
                        'Afegir camps, Seleccionar dades, Inserir taula dinàmica',
                        'Seleccionar dades, Inserir taula dinàmica, Triar ubicació, Afegir camps, Personalitzar',
                        'Inserir taula dinàmica, Triar ubicació, Afegir camps, Seleccionar dades',
                        'Personalitzar, Afegir camps, Inserir taula dinàmica'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Seleccionar dades, 2) Inserir taula dinàmica, 3) Triar ubicació, 4) Afegir camps, 5) Personalitzar.'
                },
            ],
            total_points: 85,
            pass_score: 60
        },
        {
            id: 'excel-5',
            title: 'Registre de temps de tramitació d\'expedients',
            description: 'Coneixements sobre càlcul de dates i terminis',
            difficulty: 'Difícil',
            category: 'excel',
            scenario: `
                <p><strong>Situació:</strong> Has de controlar els terminis de tramitació d'expedients administratius.</p>
                <p><strong>Dades dels expedients:</strong></p>
                <ul>
                    <li>Expedient 1: Data entrada: 05/02/2026 - Data resolució: 20/02/2026</li>
                    <li>Expedient 2: Data entrada: 10/02/2026 - Data resolució: 15/03/2026</li>
                    <li>Expedient 3: Data entrada: 12/02/2026 - Pendent de resolució (avui: 16/02/2026)</li>
                    <li>Termini màxim legal: 30 dies hàbils</li>
                </ul>
            `,
            questions: [
                {
                    type: 'short_answer',
                    question: 'Quina fórmula utilitzaries per calcular els dies transcorreguts entre dues dates?',
                    correct_answers: ['=B2-A2', 'B2-A2', '=data_final-data_inicial'],
                    case_sensitive: false,
                    points: 15,
                    explanation: 'Per calcular dies entre dates, simplement es resten: Data final - Data inicial.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quants dies va trigar a resoldre\'s l\'expedient 1?',
                    options: [
                        '10 dies',
                        '15 dies',
                        '20 dies',
                        '25 dies'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Del 05/02 al 20/02 hi ha 15 dies (20 - 5 = 15).'
                },
                {
                    type: 'short_answer',
                    question: 'Quina funció d\'Excel permet calcular dies HÀBILS (excloent caps de setmana)?',
                    correct_answers: ['DIES.LABORABLES', 'NETWORKDAYS', 'DIAS.LAB'],
                    case_sensitive: false,
                    points: 15,
                    explanation: 'La funció DIES.LABORABLES (NETWORKDAYS en anglès) calcula dies hàbils excloent caps de setmana i festius opcionals.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquesta fórmula per calcular si s\'ha superat el termini: =SI(B2-A2>30;"FORA DE TERMINI";"DINS DE TERMINI")',
                    options: [
                        'Hauria d\'utilitzar >= en lloc de >',
                        'Hauria d\'utilitzar DIES.LABORABLES per comptar dies hàbils',
                        'Els textos haurien d\'anar sense cometes',
                        'No hi ha cap error'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'El termini legal és de 30 dies HÀBILS, no naturals. Cal utilitzar DIES.LABORABLES per excloure caps de setmana.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Per calcular la data límit de resolució (30 dies hàbils després de l\'entrada), quina funció utilitzaries?',
                    options: [
                        '=A2+30',
                        '=DIA.LAB(A2;30)',
                        '=DATA(A2;30)',
                        '=SUMA(A2;30)'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'DIA.LAB (WORKDAY en anglès) suma dies hàbils a una data, excloent caps de setmana i festius.'
                },
                {
                    type: 'fill_blank',
                    question: 'Per calcular quants dies FALTEN per arribar al termini, la fórmula seria: Data límit _____ AVUI().',
                    correct_answer: '-',
                    case_sensitive: false,
                    points: 10,
                    explanation: 'Cal restar la data actual: Data límit - AVUI() = Dies restants.'
                },
                {
                    type: 'order',
                    question: 'Ordena els passos per crear un control de terminis:',
                    items: [
                        'Aplicar format condicional (vermell si fora de termini)',
                        'Crear columna "Data entrada"',
                        'Crear columna "Dies transcorreguts" amb fórmula',
                        'Crear columna "Data límit" amb DIA.LAB',
                        'Crear columna "Estat" amb SI condicional'
                    ],
                    correct_order: [1, 3, 2, 4, 0],
                    points: 15,
                    explanation: 'L\'ordre correcte és: 1) Data entrada, 2) Data límit, 3) Dies transcorreguts, 4) Estat, 5) Format condicional.'
                }
            ],
            total_points: 90,
            pass_score: 60
        }
    ],
    integrated: [
        {
            id: 'integrated-1',
            title: 'Gestió completa d\'expedient de llicència',
            description: 'Coneixements sobre processos administratius complets',
            difficulty: 'Difícil',
            category: 'integrated',
            scenario: `
                <p><strong>Situació:</strong> Has de processar una sol·licitud de llicència d'obres menors.</p>
                <p><strong>Dades:</strong></p>
                <ul>
                    <li>Sol·licitant: Pere Soler Vidal</li>
                    <li>Tipus d'obra: Reforma de bany</li>
                    <li>Pressupost: 8.500 €</li>
                    <li>Taxa municipal: 4% del pressupost</li>
                    <li>IVA: 21%</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'import de la taxa municipal (4% de 8.500€)?',
                    options: [
                        '340 €',
                        '850 €',
                        '425 €',
                        '170 €'
                    ],
                    correct: 0,
                    points: 10,
                    explanation: '8.500 × 0,04 = 340 €'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'import total a pagar (8.500€ pressupost + 340€ taxa + 21% IVA sobre el total)?',
                    options: [
                        '10.285,00 €',
                        '10.696,40 €',
                        '11.120,50 €',
                        '9.860,00 €'
                    ],
                    correct: 1,
                    points: 20,
                    explanation: 'Pressupost (8.500) + Taxa (340) = 8.840 €. IVA 21%: 8.840 × 1,21 = 10.696,40 €'
                },
                {
                    type: 'multiple_choice',
                    question: 'En la notificació d\'inici de tràmit, quin número d\'expedient seria correcte per a una llicència d\'obres del 2026?',
                    options: [
                        '2026/LO/00045',
                        'LO-2026-45',
                        '45/2026/LO',
                        'EXP-LO-45-2026'
                    ],
                    correct: 0,
                    points: 10,
                    explanation: 'El format estàndard és: ANY/TIPUS/NÚMERO amb zeros a l\'esquerra.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquest càlcul d\'Excel per a l\'IVA:',
                    options: [
                        '=C2*0.21 (on C2 és el pressupost)',
                        '=(C2+D2)*0.21 (on C2 és pressupost i D2 és taxa)',
                        '=C2*1.21 (on C2 és el pressupost)',
                        '=(C2+D2)*1.21-C2-D2 (on C2 és pressupost i D2 és taxa)'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'L\'opció 3 multiplica només el pressupost per 1,21, però l\'IVA s\'aplica sobre pressupost + taxa. Correcte: =(C2+D2)*0.21'
                },
                {
                    type: 'multiple_choice',
                    question: 'En un cas integrat Word+Excel, què és FONAMENTAL per mantenir la coherència?',
                    options: [
                        'Utilitzar el mateix tipus de lletra',
                        'Que el número d\'expedient i els imports coincideixin exactament',
                        'Que ambdós documents tinguin el mateix nom d\'arxiu',
                        'Que estiguin a la mateixa carpeta'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'La coherència de dades (número d\'expedient, imports, dates) entre documents és essencial per evitar errors administratius.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és el termini de resolució per a llicències d\'obres menors?',
                    options: [
                        '15 dies hàbils',
                        '30 dies hàbils',
                        '2 mesos',
                        '3 mesos'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'El termini estàndard per a llicències d\'obres menors és de 30 dies hàbils des de la presentació completa de la documentació.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'ordre correcte per processar l\'expedient de llicència?',
                    options: [
                        'Verificar, Registrar, Calcular, Resoldre, Notificar',
                        'Notificar, Resoldre, Calcular, Registrar, Verificar',
                        'Registrar, Calcular, Resoldre, Verificar, Notificar',
                        'Calcular, Verificar, Registrar, Notificar, Resoldre'
                    ],
                    correct: 0,
                    points: 20,
                    explanation: 'Primer verificar documentació, registrar, calcular taxes, resoldre i finalment notificar.'
                }
            ],
            total_points: 100,
            pass_score: 70
        },
        {
            id: 'integrated-2',
            title: 'Gestió completa de subvenció municipal',
            description: 'Procés complet: sol·licitud, càlcul i notificació',
            difficulty: 'Difícil',
            category: 'integrated',
            scenario: `
                <p><strong>Situació:</strong> L'Associació Cultural "El Raval Viu" sol·licita una subvenció per organitzar un festival de música.</p>
                <p><strong>Dades de la sol·licitud:</strong></p>
                <ul>
                    <li>Entitat: Associació Cultural "El Raval Viu"</li>
                    <li>CIF: G12345678</li>
                    <li>Representant: Sra. Laura Martínez Soler</li>
                    <li>Activitat: Festival de Música del Raval 2026</li>
                    <li>Pressupost total activitat: 15.000 €</li>
                    <li>Subvenció sol·licitada: 60% del pressupost</li>
                    <li>Subvenció màxima permesa: 8.000 €</li>
                    <li>Data de sol·licitud: 18/02/2026</li>
                    <li>Termini de resolució: 2 mesos</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quin import de subvenció correspon al 60% del pressupost?',
                    options: [
                        '8.000 €',
                        '9.000 €',
                        '10.000 €',
                        '12.000 €'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: '15.000 × 0,60 = 9.000 €'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin import REAL es pot concedir si hi ha un màxim de 8.000 €?',
                    options: [
                        '7.000 €',
                        '8.000 €',
                        '9.000 €',
                        '12.000 €'
                    ],
                    correct: 1,
                    points: 15,
                    explanation: 'Tot i que el 60% són 9.000 €, el màxim permès és 8.000 €, per tant es concedeix aquest import.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'ordre correcte de passos per gestionar la subvenció?',
                    options: [
                        'Notificar, Registrar, Verificar, Calcular, Valorar',
                        'Verificar, Registrar, Valorar, Calcular, Redactar, Notificar',
                        'Calcular, Redactar, Notificar, Registrar, Valorar',
                        'Registrar, Redactar, Notificar, Calcular, Verificar'
                    ],
                    correct: 1,
                    points: 20,
                    explanation: 'L\'ordre correcte és: 1) Verificar, 2) Registrar, 3) Valorar, 4) Calcular, 5) Redactar, 6) Notificar.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquesta fórmula d\'Excel per calcular la subvenció: =MIN(A2*0.6, 8000)',
                    options: [
                        'Hauria de ser MAX en lloc de MIN',
                        'Falta el símbol € al final',
                        'El 8000 hauria d\'estar entre cometes',
                        'No hi ha cap error, la fórmula és correcta'
                    ],
                    correct: 3,
                    points: 15,
                    explanation: 'La fórmula és correcta: MIN retorna el valor més petit entre el 60% del pressupost i el màxim de 8.000 €.'
                },
                {
                    type: 'multiple_choice',
                    question: 'En la notificació de concessió, quin verb s\'utilitza?',
                    options: [
                        'S\'ha resolt APROVAR la subvenció',
                        'S\'ha resolt CONCEDIR la subvenció',
                        'S\'ha resolt ACCEPTAR la subvenció',
                        'S\'ha resolt ATORGAR la subvenció'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'El verb tècnic correcte per a subvencions és "CONCEDIR".'
                },
                {
                    type: 'multiple_choice',
                    question: 'Si la sol·licitud es va presentar el 18/02/2026 i el termini és de 2 mesos, quina és la data límit?',
                    options: [
                        '18 de març',
                        '18 d\'abril',
                        '18 de maig',
                        '30 d\'abril'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: '2 mesos des del 18 de febrer = 18 d\'abril de 2026.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin camp de la base de dades identifica de forma única l\'entitat sol·licitant?',
                    options: [
                        'Nom de l\'entitat',
                        'CIF/NIF',
                        'Adreça fiscal',
                        'Codi postal'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'El CIF (Codi d\'Identificació Fiscal) o NIF identifica de forma única les entitats jurídiques.'
                }
            ],
            total_points: 90,
            pass_score: 60
        },
        {
            id: 'integrated-3',
            title: 'Organització d\'esdeveniment municipal',
            description: 'Planificació completa: convocatòria, registre i pressupost',
            difficulty: 'Mitjà',
            category: 'integrated',
            scenario: `
                <p><strong>Situació:</strong> L'Ajuntament organitza unes Jornades de Participació Ciutadana i has de gestionar tot el procés.</p>
                <p><strong>Dades de l'esdeveniment:</strong></p>
                <ul>
                    <li>Nom: Jornades de Participació Ciutadana 2026</li>
                    <li>Data: 15 de març de 2026</li>
                    <li>Lloc: Centre Cívic del Districte</li>
                    <li>Places disponibles: 80 persones</li>
                    <li>Inscripcions rebudes: 95 persones</li>
                    <li>Cost per assistent: 12 € (esmorzar + material)</li>
                    <li>Pressupost total disponible: 1.200 €</li>
                    <li>Data límit d'inscripció: 8 de març de 2026</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quantes persones NO podran assistir per falta de places?',
                    options: [
                        '10 persones',
                        '15 persones',
                        '20 persones',
                        '25 persones'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: '95 inscripcions - 80 places = 15 persones que no podran assistir.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és el cost total per als 80 assistents a 12 € cadascun?',
                    options: [
                        '840 €',
                        '960 €',
                        '1.020 €',
                        '1.200 €'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: '80 persones × 12 € = 960 €'
                },
                {
                    type: 'multiple_choice',
                    question: 'El pressupost de 1.200 € és suficient per cobrir el cost dels 80 assistents?',
                    options: [
                        'No, falta pressupost',
                        'Sí, i sobren 240 €',
                        'Sí, però just just',
                        'Sí, i sobren 120 €'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: '1.200 € - 960 € = 240 € de sobrant.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin és l\'ordre correcte de passos per organitzar les jornades?',
                    options: [
                        'Redactar, Pressupost, Publicar, Registrar, Confirmar, Notificar llista',
                        'Publicar, Redactar, Pressupost, Confirmar, Registrar',
                        'Registrar, Confirmar, Publicar, Redactar, Pressupost',
                        'Pressupost, Redactar, Publicar, Registrar, Confirmar'
                    ],
                    correct: 0,
                    points: 20,
                    explanation: 'L\'ordre correcte és: 1) Redactar, 2) Pressupost, 3) Publicar, 4) Registrar, 5) Confirmar, 6) Notificar llista.'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquest fragment de la convocatòria:',
                    options: [
                        'Data: 15 de març de 2026 - Hora: 9:00h',
                        'Lloc: Centre Cívic del Districte',
                        'Places limitades: per ordre d\'arribada',
                        'Inscripció: fins el 10 de març de 2026'
                    ],
                    correct: 3,
                    points: 15,
                    explanation: 'La data límit d\'inscripció és el 8 de març, no el 10. Cal coherència entre les dades.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Completa la fórmula d\'ocupació: (Places ocupades / Places disponibles) × _____',
                    options: [
                        '10',
                        '100',
                        '1.000',
                        'No cal res més'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Per obtenir un percentatge cal multiplicar per 100: (80/80) × 100 = 100% d\'ocupació.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina funció d\'Excel utilitzaries per seleccionar automàticament només els admesos de la llista?',
                    options: [
                        'CERCA',
                        'EXTREU',
                        'FILTRE',
                        'ORDRE'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'La funció FILTRE (o l\'ús de filtres a la taula) permet mostrar només les files que compleixen un criteri.'
                }
            ],
            total_points: 90,
            pass_score: 60
        },
        {
            id: 'integrated-4',
            title: 'Gestió de personal i contractació',
            description: 'Cas complet: alta de treballador, càlcul de costos i notificació',
            difficulty: 'Difícil',
            category: 'integrated',
            scenario: `
                <p><strong>Situació:</strong> L'Institut Municipal de Mercats ha contractat un nou tècnic auxiliar per a la campanya d'estiu.</p>
                <p><strong>Dades del treballador:</strong></p>
                <ul>
                    <li>Nom: Anna Rodriguez Sánchez</li>
                    <li>DNI: 34567891C</li>
                    <li>Categoria: Tècnic Auxiliar (Grup C2)</li>
                    <li>Sou brut mensual base: 1.450 €</li>
                    <li>Complement de destinació: 320 €</li>
                    <li>Retenció IRPF: 12%</li>
                    <li>Seguretat Social (quota treballador): 6,35%</li>
                    <li>Data d'alta: 1 de juny de 2026</li>
                </ul>
            `,
            questions: [
                {
                    type: 'multiple_choice',
                    question: 'Quin és el sou brut TOTAL mensual (Base + Complement)?',
                    options: [
                        '1.450 €',
                        '1.720 €',
                        '1.770 €',
                        '1.850 €'
                    ],
                    correct: 2,
                    points: 10,
                    explanation: '1.450 € (Base) + 320 € (Complement) = 1.770 €.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin import es dedueix per IRPF (12% del brut total)?',
                    options: [
                        '174,00 €',
                        '212,40 €',
                        '185,20 €',
                        '206,10 €'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: '1.770 € × 0,12 = 212,40 €.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quin seria el sou NET a percebre (Brut Total - IRPF - Seguretat Social 6,35%)?',
                    options: [
                        '1.445,20 €',
                        '1.480,35 €',
                        '1.445,21 €',
                        '1.512,10 €'
                    ],
                    correct: 2,
                    points: 20,
                    explanation: 'Brut (1.770) - IRPF (212,40) - SS (1.770 × 0,0635 = 112,395 ≈ 112,40). Total Net: 1.770 - 212,40 - 112,40 = 1.445,20 €. (Nota: Depenent del truncament pot variar 1 cèntim: 1.445,21 €)'
                },
                {
                    type: 'identify_error',
                    question: 'Identifica l\'ERROR en aquesta clàusula del contracte de treball:',
                    options: [
                        'La durada del contracte serà de 3 mesos...',
                        'La jornada laboral serà de 37,5 hores setmanals...',
                        'El període de prova serà de 6 mesos per a aquesta categoria...',
                        'Les vacances seran de 22 dies hàbils per any complet...'
                    ],
                    correct: 2,
                    points: 15,
                    explanation: 'Per a un Tècnic Auxiliar (Grup C2), el període de prova màxim segons el TREBEP sol ser de 2 mesos, no 6. Els 6 mesos són per a titulats universitaris (Grup A).'
                },
                {
                    type: 'multiple_choice',
                    question: 'En Excel, quina funció usaries per calcular automàticament el sou net de 50 treballadors?',
                    options: [
                        'SUMA',
                        'Una fórmula amb referències relatives aplicada a tota la columna',
                        'BUSCARV',
                        'Taula dinàmica'
                    ],
                    correct: 1,
                    points: 10,
                    explanation: 'Les referències relatives (ex: =B2-C2-D2) permeten copiar la fórmula cap avall i que s\'ajusti automàticament a cada fila.'
                },
                {
                    type: 'order',
                    question: 'Ordena els conceptes en una nòmina oficial de dalt a baix:',
                    items: [
                        'Deduccions (IRPF, SS)',
                        'Dades de l\'empresa i treballador',
                        'Líquid a percebre (Net)',
                        'Devengos (Salari base, complements)',
                        'Període de liquidació',
                        'Signatura i segell'
                    ],
                    correct_order: [1, 4, 3, 0, 2, 5],
                    points: 15,
                    explanation: 'L\'ordre oficial és: 1) Dades, 2) Període, 3) Devengos (Ingressos), 4) Deduccions, 5) Net, 6) Signatura.'
                },
                {
                    type: 'multiple_choice',
                    question: 'Quina fórmula d\'Excel calcularia correctament el sou net de l\'Anna?',
                    options: [
                        '=1770 - (1770*0,12) - (1770*0,0635)',
                        '=(1450+320) * 0,8165',
                        '=1770 - 212,40 - 110',
                        'Ambdós A i B són correctes'
                    ],
                    correct: 3,
                    points: 20,
                    explanation: 'Ambdues fórmules arriben al mateix resultat (1.445,20 €). La B és una forma simplificada: 1 - 0,12 - 0,0635 = 0,8165.'
                }
            ],
            total_points: 100,
            pass_score: 70
        }
    ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = exercisesDB;
}
