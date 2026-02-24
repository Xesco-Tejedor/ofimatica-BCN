# 🏛️ Pràctica Ofimàtica - Ajuntament de Barcelona

Aplicació web portàtil per practicar exercicis d'ofimàtica amb **tests de coneixement real** per a les oposicions d'Auxiliar Administratiu de l'Ajuntament de Barcelona.

## ✨ Característiques Principals

### 🎯 Sistema de Tests Real amb Validació Automàtica
- **Preguntes tipus test**: Selecciona l'opció correcta entre 4 alternatives
- **Resposta curta**: Escriu la resposta exacta
- **Identificar errors**: Troba l'opció incorrecta
- **Ordenar elements**: Arrossega per ordenar correctament
- **Completar espais**: Omple els buits amb la paraula correcta

### 📊 Avaluació Objectiva
- Validació automàtica de respostes
- Puntuació real basada en coneixements
- Nota de tall per aprovar cada exercici
- Feedback immediat amb explicacions educatives

### 📚 Exercicis Disponibles

#### Word (2 exercicis)
1. **Certificat d'empadronament** - 8 preguntes (90 punts)
2. **Notificació de resolució administrativa** - 8 preguntes (95 punts)

#### Excel (1 exercici)
1. **Registre de sol·licituds ciutadanes** - 7 preguntes (85 punts)

#### Casos Integrats (1 exercici)
1. **Gestió completa d'expedient de llicència** - 7 preguntes (100 punts)

**Total: 4 exercicis amb 30+ preguntes de coneixement real**

---

## 🚀 Com Utilitzar

### 1. Obrir l'Aplicació
Simplement obre `index.html` amb qualsevol navegador modern (Chrome, Firefox, Edge).

### 2. Seleccionar Categoria
Tria entre Word, Excel o Casos Integrats.

### 3. Triar Exercici
Selecciona un exercici de la llista.

### 4. Llegir l'Escenari
Comprèn el cas administratiu plantejat amb totes les dades necessàries.

### 5. Respondre Preguntes
- **Tipus test**: Clica l'opció correcta
- **Resposta curta**: Escriu la resposta al camp de text
- **Ordenar**: Arrossega els elements a l'ordre correcte
- **Completar**: Escriu la paraula que falta

### 6. Navegar
- Botó "Següent" per avançar
- Botó "Anterior" per revisar
- Botó "Finalitzar" a l'última pregunta

### 7. Veure Resultats
- Puntuació total (punts i percentatge)
- Preguntes correctes/incorrectes
- Feedback segons el rendiment
- Opció de revisar totes les respostes

### 8. Revisar i Aprendre
- Veure totes les preguntes amb respostes marcades
- Llegir explicacions de cada resposta
- Identificar àrees de millora

---

## 📖 Exemple d'Exercici

### Certificat d'Empadronament

**Escenari:**
> La Sra. Maria García Pérez (DNI: 45678912B) ha sol·licitat un certificat d'empadronament.
> - Adreça: Carrer d'Aragó, 123, 3r 2a, 08015 Barcelona
> - Data d'empadronament: 15 de gener de 2020

**Pregunta 1 (Tipus test - 10 punts):**
> Quin és l'encapçalament correcte per a un certificat oficial?
> - A) Barcelona - Certificat
> - B) AJUNTAMENT DE BARCELONA\nServei d'Atenció Ciutadana ✓
> - C) Certificat Oficial
> - D) Empadronament

**Pregunta 2 (Resposta curta - 10 punts):**
> Quina fórmula legal s'utilitza abans d'exposar les dades del ciutadà?
> Resposta: **CERTIFICA:**

**Pregunta 3 (Identificar error - 15 punts):**
> Quin fragment conté un ERROR?
> - A) "...figura empadronada en aquest municipi..."
> - B) "...amb DNI núm. 45678912B..."
> - C) "...está empadronado en este municipio..." ✓ (castellà!)

---

## 💡 Consells d'Ús

### Per Aprovar
- **Llegeix atentament** l'escenari abans de començar
- **Pensa abans de respondre** - no es pot canviar després
- **Llegeix les explicacions** per aprendre dels errors
- **Repeteix els exercicis** fins dominar la matèria

### Per Aprendre Millor
1. **Primera vegada**: Intenta respondre sense ajuda
2. **Revisa respostes**: Llegeix totes les explicacions
3. **Segona vegada**: Millora la puntuació
4. **Objectiu**: Aconseguir 90%+ en tots els exercicis

### Notes de Tall
- **Word**: 60-65% per aprovar
- **Excel**: 60% per aprovar
- **Integrat**: 70% per aprovar (més complex)

---

## 🎨 Interfície

### Vista Principal
- Estadístiques de progrés
- Exercicis completats
- Puntuació mitjana
- Categories disponibles

### Vista d'Exercici
- Escenari del cas
- Indicador de progrés (Pregunta X de Y)
- Targeta de pregunta amb tipus i punts
- Navegació entre preguntes
- Resultats finals amb feedback

### Feedback Visual
- ✅ **Verd**: Resposta correcta
- ❌ **Vermell**: Resposta incorrecta
- 💡 **Explicació**: Per què és correcta/incorrecta

---

## 📊 Sistema de Puntuació

### Tipus de Preguntes
- **Tipus test**: 10 punts
- **Resposta curta**: 10-15 punts
- **Identificar error**: 15 punts
- **Ordenar elements**: 15-20 punts
- **Completar**: 10 punts

### Qualificacions
- **90-100%**: 🎉 Excel·lent - Domini complet
- **70-89%**: ✅ Aprovat - Bon coneixement
- **60-69%**: ⚠️ Aprovat just - Repassar
- **<60%**: 📚 No aprovat - Estudiar més

---

## 🔧 Característiques Tècniques

### Portabilitat
- **100% offline** - No cal connexió a internet
- **Sense instal·lació** - Obre i utilitza
- **Compatible** amb Windows, Mac, Linux
- **Responsive** - Funciona en mòbil i tauleta

### Persistència
- **LocalStorage** - Guarda el progrés automàticament
- **Historial** - Puntuacions de tots els exercicis
- **Estadístiques** - Seguiment de millora

### Tecnologies
- HTML5, CSS3, JavaScript vanilla
- Drag & Drop API per ordenar elements
- Animacions i transicions suaus
- Disseny modern dark theme

---

## 📁 Estructura de Fitxers

```
practica-ofimatica-bcn/
├── index.html              # Aplicació principal
├── css/
│   └── styles.css         # Estils premium
├── js/
│   ├── exercises.js       # Base de dades d'exercicis
│   ├── app.js            # Lògica de l'aplicació
│   └── generator.js      # Generador (futur)
├── data/                  # Dades addicionals (futur)
├── templates/             # Plantilles (futur)
├── README.md             # Aquesta guia
└── PACKAGING.md          # Instruccions de distribució
```

---

## 🎓 Temes Avaluats

### Word
- Estructura de documents oficials
- Fórmules legals i administratives
- Format i presentació
- Idioma oficial (català)
- Terminologia jurídica
- Recursos administratius
- Terminis legals

### Excel
- Funcions (CONTA.SI, SUMA.SI)
- Format condicional
- Gràfics (sectors, barres)
- Ordenació i filtres
- Taules resum
- Càlculs amb percentatges

### Integrat
- Gestió d'expedients
- Càlculs de taxes i IVA
- Coherència entre documents
- Numeració oficial
- Processos administratius complets

---

## ❓ FAQ

### Puc canviar una resposta?
No, un cop has avançat a la següent pregunta, no pots canviar la resposta anterior. Això simula un examen real.

### Es guarda el meu progrés?
Sí, automàticament amb LocalStorage del navegador. Pots tancar i tornar més tard.

### Puc repetir un exercici?
Sí, tantes vegades com vulguis. És la millor manera d'aprendre!

### Quina és la nota de tall?
Varia segons l'exercici (60-70%), es mostra a la pantalla de resultats.

### Hi ha límit de temps?
No, pren-te el temps que necessitis per pensar cada resposta.

### Funciona sense internet?
Sí, 100% offline. Ideal per estudiar en qualsevol lloc.

---

## 🚀 Futures Millores

- [ ] Més exercicis (objectiu: 20+ exercicis)
- [ ] Generador de preguntes amb dades aleatòries
- [ ] Mode examen (temps límit)
- [ ] Estadístiques avançades
- [ ] Exportar resultats a PDF
- [ ] Plantilles descàrregables per practicar offline

---

## 📞 Suport

Si trobes errors o tens suggeriments, contacta amb el desenvolupador.

---

## 📄 Llicència

Aplicació educativa per a ús personal en la preparació d'oposicions.

---

**Bona sort amb les oposicions! 🍀**

**Recorda**: La clau és la **pràctica constant** i **aprendre dels errors**. Utilitza aquesta eina per reforçar els teus coneixements i arribar ben preparat/da a l'examen! 💪
