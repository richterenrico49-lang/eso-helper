# ESO Helper - APK Build Anleitung

Diese Anleitung erklärt, wie du die ESO Helper Web-App als native Android-APK auf deinem Computer erstellst.

## Voraussetzungen

1. **Android Studio** installiert ([Download](https://developer.android.com/studio))
2. **Android SDK** (mindestens API Level 33)
3. **Java 17+** installiert
4. **Node.js** und **pnpm** installiert

## Schritt 1: Projekt vorbereiten

```bash
# Projekt klonen/downloaden
cd eso-helper-web

# Dependencies installieren
pnpm install

# Web-App für Production bauen
pnpm run build
```

## Schritt 2: Capacitor synchronisieren

```bash
# Capacitor mit aktuellem Build synchronisieren
npx cap sync android
```

## Schritt 3: Android Studio öffnen

```bash
# Android-Projekt in Android Studio öffnen
npx cap open android
```

Dies öffnet das Android-Projekt in Android Studio.

## Schritt 4: APK bauen

### Option A: Über Android Studio (empfohlen)

1. Öffne Android Studio
2. Gehe zu **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)**
3. Warte auf den Build-Prozess
4. Die APK wird im Verzeichnis `android/app/release/` erstellt

### Option B: Über Gradle-Befehlszeile

```bash
cd android
./gradlew assembleRelease
```

Die APK wird unter `android/app/build/outputs/apk/release/` erstellt.

## Schritt 5: APK installieren

### Auf einem physischen Gerät:

```bash
# Gerät mit USB verbinden und Debugging aktivieren
adb install -r android/app/build/outputs/apk/release/app-release.apk
```

### Auf einem Emulator:

```bash
# Emulator starten
emulator -avd <emulator_name>

# APK installieren
adb install -r android/app/build/outputs/apk/release/app-release.apk
```

## Troubleshooting

### Problem: "SDK location not found"

**Lösung:** Erstelle eine `local.properties` Datei im `android/` Verzeichnis:

```properties
sdk.dir=/path/to/android/sdk
```

Auf Linux/Mac:
```bash
echo "sdk.dir=$ANDROID_HOME" > android/local.properties
```

### Problem: "Java version mismatch"

**Lösung:** Stelle sicher, dass Java 17+ verwendet wird:

```bash
java -version  # Sollte 17+ anzeigen
```

### Problem: "Build failed"

**Lösung:** Gradle-Cache löschen und neu bauen:

```bash
cd android
./gradlew clean
./gradlew assembleRelease
```

## Signieren der APK (für Play Store)

Wenn du die App im Google Play Store veröffentlichen möchtest, musst du die APK signieren:

```bash
# Keystore erstellen (einmalig)
keytool -genkey -v -keystore my-release-key.keystore -keyalg RSA -keysize 2048 -validity 10000 -alias my-key-alias

# APK signieren
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore app-release-unsigned.apk my-key-alias

# APK optimieren (optional)
zipalign -v 4 app-release-unsigned.apk app-release-signed.apk
```

## Weitere Ressourcen

- [Capacitor Android Dokumentation](https://capacitorjs.com/docs/android)
- [Android Studio Build-Dokumentation](https://developer.android.com/studio/build)
- [Google Play Console](https://play.google.com/console)

## Support

Bei Fragen oder Problemen:
1. Überprüfe die Capacitor-Dokumentation
2. Schau in den Android Studio Logs nach Fehlern
3. Stelle sicher, dass alle Voraussetzungen erfüllt sind
