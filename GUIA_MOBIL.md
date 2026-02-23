# 📱 Guia: Utilitzar l'Aplicació al Mòbil

## Opció 1: Transferència Directa (Més Ràpid)

### 1️⃣ Comprimir la Carpeta
```powershell
# Des de PowerShell (opcional)
Compress-Archive -Path "practica-ofimatica-bcn" -DestinationPath "practica-ofimatica-bcn.zip"
```

O manualment:
- Clic dret a la carpeta `practica-ofimatica-bcn`
- "Comprimir a ZIP"

### 2️⃣ Transferir al Mòbil

**Mètode A: Correu electrònic**
1. Adjunta el ZIP a un email
2. Envia'l a tu mateix
3. Obre l'email al mòbil
4. Descarrega l'adjunt

**Mètode B: Google Drive**
1. Puja el ZIP a Google Drive
2. Obre Drive al mòbil
3. Descarrega el fitxer

**Mètode C: Cable USB**
1. Connecta el mòbil per USB
2. Copia la carpeta a `Documents` o `Downloads`

**Mètode D: WhatsApp/Telegram**
1. Envia't el ZIP
2. Descarrega'l al mòbil

### 3️⃣ Descomprimir al Mòbil

**Android:**
1. Instal·la "Files by Google" o "ZArchiver" (gratuïtes)
2. Localitza el ZIP a "Descàrregues"
3. Toca el ZIP > "Extreure"

**iOS:**
1. L'app "Fitxers" nativa ja descomprimeix
2. Localitza el ZIP
3. Toca > "Descomprimir"

### 4️⃣ Obrir l'Aplicació

**Android:**
1. Obre l'app de fitxers
2. Navega a la carpeta descomprimida
3. Toca `index.html`
4. Selecciona "Chrome" o "Firefox"

**iOS:**
1. Obre l'app "Fitxers"
2. Navega a la carpeta
3. Toca `index.html`
4. S'obrirà a Safari automàticament

---

## Opció 2: Hosting Gratuït (Accés des de Qualsevol Lloc)

### GitHub Pages (Recomanat)

**Avantatges:**
- ✅ Gratuït per sempre
- ✅ URL pròpia (ex: `tunombre.github.io/practica-ofimatica`)
- ✅ Accés des de qualsevol dispositiu
- ✅ No cal transferir fitxers

**Passos:**
1. Crea compte a [github.com](https://github.com) (gratuït)
2. Crea un nou repositori públic
3. Puja tots els fitxers de `practica-ofimatica-bcn`
4. Activa GitHub Pages a Settings > Pages
5. Accedeix des del mòbil a la URL generada

### Netlify Drop (Més Fàcil)

**Avantatges:**
- ✅ Sense registre necessari
- ✅ Arrossega i deixa anar
- ✅ URL instantània

**Passos:**
1. Ves a [netlify.com/drop](https://app.netlify.com/drop)
2. Arrossega la carpeta `practica-ofimatica-bcn`
3. Espera 10 segons
4. Copia la URL generada
5. Obre-la al mòbil

### Vercel (Professional)

**Avantatges:**
- ✅ Molt ràpid
- ✅ SSL automàtic
- ✅ Dominis personalitzats

**Passos:**
1. Registra't a [vercel.com](https://vercel.com) (gratuït)
2. Instal·la Vercel CLI o usa la web
3. Puja el projecte
4. Accedeix a la URL generada

---

## Opció 3: Servidor Local (Avançat)

Si vols compartir-la amb altres persones a la mateixa xarxa WiFi:

### Python (si el tens instal·lat)
```bash
cd practica-ofimatica-bcn
python -m http.server 8000
```

Després accedeix des del mòbil a: `http://IP_DEL_PC:8000`

---

## 💡 Recomanació Personal

**Per a ús personal:**
→ **Opció 1** (transferència directa) - Més ràpid i funciona offline

**Per compartir amb companys:**
→ **Opció 2** (Netlify Drop) - URL pública en 10 segons

**Per a ús professional:**
→ **Opció 2** (GitHub Pages) - Gratuït i permanent

---

## 📱 Consells per a Mòbil

### Millor Experiència
1. **Orientació**: Usa el mòbil en vertical per a millor lectura
2. **Navegador**: Chrome o Firefox (millor compatibilitat)
3. **Pantalla completa**: Afegeix a la pantalla d'inici per accés ràpid

### Afegir a Pantalla d'Inici (Android)
1. Obre `index.html` a Chrome
2. Menú (⋮) > "Afegeix a la pantalla d'inici"
3. Ara tindràs un icona com una app nativa

### Afegir a Pantalla d'Inici (iOS)
1. Obre `index.html` a Safari
2. Botó "Compartir" > "Afegeix a l'inici"
3. Ara tindràs un icona com una app nativa

---

## 🔧 Resolució de Problemes

### "No es pot obrir el fitxer HTML"
→ Instal·la una app de gestió de fitxers (Files by Google)

### "La pàgina no es veu bé"
→ Assegura't que tots els fitxers (css, js) estan a la mateixa carpeta

### "No guarda el progrés"
→ Comprova que el navegador permet LocalStorage (activat per defecte)

### "Drag & drop no funciona"
→ Normal en alguns mòbils, usa els botons de navegació

---

## ✅ Verificació

Per comprovar que funciona correctament al mòbil:

1. ✅ Es veu la pantalla d'inici amb estadístiques
2. ✅ Pots navegar entre categories
3. ✅ Les preguntes es mostren correctament
4. ✅ Pots seleccionar opcions i respondre
5. ✅ El progrés es guarda entre sessions

---

**Quin mètode prefereixes? Et puc ajudar amb qualsevol d'ells!** 📱
