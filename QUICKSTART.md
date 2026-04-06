# ESO Helper - Schnellstart Anleitung

Willkommen bei ESO Helper! Diese Anleitung hilft dir, die App schnell zum Laufen zu bringen.

## 🚀 Schnellstart (Web-Version)

### 1. Projekt klonen/downloaden

```bash
cd eso-helper-web
```

### 2. Dependencies installieren

```bash
pnpm install
```

### 3. Entwicklungsserver starten

```bash
pnpm run dev
```

Die App ist jetzt verfügbar unter: **http://localhost:5173**

### 4. Sprache wechseln

Klicke auf den Sprach-Button oben rechts, um zwischen Deutsch und Englisch zu wechseln.

## 📱 APK für Android bauen

Siehe **APK_BUILD_GUIDE.md** für detaillierte Anweisungen.

Kurz zusammengefasst:

```bash
# Web-App bauen
pnpm run build

# Capacitor synchronisieren
npx cap sync android

# Android Studio öffnen
npx cap open android

# In Android Studio: Build → Build APK(s)
```

## 🎨 Design-Features

Die App nutzt ein modernes **Dark Fantasy Design** mit:

- **Farbschema**: Dunkles Grau (#0F0F0F) mit Gold-Akzenten (#D4AF37)
- **Typografie**: Playfair Display für Überschriften, Inter für Body-Text
- **Animationen**: Smooth Übergänge und Hover-Effekte
- **Responsive Design**: Funktioniert auf Handy, Tablet und Desktop

## 🌍 Zweisprachig (Deutsch/Englisch)

Die App ist vollständig zweisprachig:

- Alle Texte sind in Deutsch und Englisch verfügbar
- Spracheinstellung wird lokal gespeichert
- Einfacher Sprachschalter in der Navigation

## 📦 Projekt-Struktur

```
eso-helper-web/
├── client/
│   ├── src/
│   │   ├── pages/          # Seiten-Komponenten
│   │   ├── components/     # UI-Komponenten
│   │   ├── i18n/           # Übersetzungen
│   │   ├── App.tsx         # Haupt-App
│   │   └── index.css       # Globale Styles
│   └── index.html
├── android/                # Android-Projekt (Capacitor)
├── capacitor.config.json   # Capacitor-Konfiguration
└── package.json
```

## 🛠️ Verfügbare Commands

```bash
# Entwicklung
pnpm run dev        # Starte Entwicklungsserver

# Production
pnpm run build      # Baue für Production
pnpm run preview    # Preview der Production-Version

# Code-Qualität
pnpm run check      # TypeScript-Check
pnpm run format     # Code formatieren

# Android
npx cap sync        # Synchronisiere Web-Assets mit Android
npx cap open android # Öffne Android Studio
```

## 📝 Funktionen

Die App bietet folgende Hauptfunktionen:

- **Interaktive Karten**: Erkunde alle ESO-Zonen
- **Charakterbuilds**: Erstelle und verwalte Builds
- **Tägliche Quests**: Verwalte deine Quest-Progression
- **Crafting-Ressourcen**: Finde Crafting-Materialien
- **Ausrüstungssets**: Durchsuche verfügbare Sets
- **Fähigkeiten**: Lerne alle Fähigkeiten kennen

## 🎯 Nächste Schritte

1. **Erkunde die App**: Schau dir die Startseite an
2. **Teste die Sprachen**: Wechsle zwischen Deutsch und Englisch
3. **Baue die APK**: Folge der APK_BUILD_GUIDE.md für Android
4. **Erweitere die App**: Füge neue Features hinzu

## 📚 Weitere Ressourcen

- [React Dokumentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Capacitor Dokumentation](https://capacitorjs.com)
- [i18next (Übersetzungen)](https://www.i18next.com)
- [Framer Motion (Animationen)](https://www.framer.com/motion)

## ❓ Häufig gestellte Fragen

**F: Kann ich die App ohne Android Studio bauen?**
A: Ja, du kannst die APK über Gradle-Befehle bauen (siehe APK_BUILD_GUIDE.md).

**F: Wie füge ich neue Sprachen hinzu?**
A: Erstelle neue JSON-Dateien in `client/src/i18n/locales/` und registriere sie in `config.ts`.

**F: Kann ich die App offline nutzen?**
A: Ja, die Web-Version funktioniert offline. Die Android-App benötigt eine erste Verbindung zum Laden der Assets.

**F: Wie kann ich die App anpassen?**
A: Bearbeite die Komponenten in `client/src/`, ändere Farben in `client/src/index.css`, oder füge neue Features hinzu.

## 🐛 Probleme?

1. Überprüfe, dass alle Dependencies installiert sind: `pnpm install`
2. Lösche `node_modules` und `pnpm-lock.yaml` und installiere neu
3. Stelle sicher, dass die richtige Node.js-Version verwendet wird
4. Schau in die Konsole für Fehlermeldungen

## 📄 Lizenz

Diese App ist ein inoffizieller Begleiter für The Elder Scrolls Online.
The Elder Scrolls Online ist ein Warenzeichen von ZeniMax Media Inc.

---

Viel Spaß mit ESO Helper! 🎮✨
