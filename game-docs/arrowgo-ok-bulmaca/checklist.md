# ArrowGO — Yayın Kontrol Listesi

## Yasal / Mağaza

- [ ] Gizlilik politikası URL'si App Store Connect'e eklendi
- [ ] Gizlilik politikası URL'si Play Console'a eklendi
- [ ] GitHub Pages etkin (`game-docs` repo Settings → Pages)
- [ ] Kullanım koşulları URL'si (isteğe bağlı) eklendi

## App Store Connect (iOS)

- [ ] Uygulama adı: `store/ios/tr/name.txt`
- [ ] Alt başlık: `store/ios/tr/subtitle.txt`
- [ ] Açıklama: `store/ios/tr/description.txt`
- [ ] Anahtar kelimeler: `store/ios/tr/keywords.txt`
- [ ] Ekran görüntüleri (6.7" + iPad)
- [ ] Yaş derecelendirmesi anketi
- [ ] App Privacy (AdMob: Device ID, Usage Data)
- [ ] Bundle ID: `com.arrowgo.arrowgo_ok_bulmaca`

## Google Play Console

- [ ] Başlık / kısa / uzun açıklama: `store/android/tr/`
- [ ] Data safety formu: `legal/data-safety.md`
- [ ] Ekran görüntüleri (telefon + tablet)
- [ ] İçerik derecelendirmesi anketi
- [ ] Hedef kitle ve reklam beyanı

## Teknik (oyun reposu)

- [ ] AdMob prod ID'ler: `lib/ads/ad_config.dart` (`_prod*` sabitleri)
- [ ] Release build: `--dart-define=USE_TEST_ADS=false`
- [ ] `flutter build ios` / `flutter build appbundle` başarılı
- [ ] Launcher ikonu ve splash
- [ ] Ekran görüntüleri: `./scripts/capture_ios_screenshots.sh`
- [ ] App Store gizlilik: `store/ios/app_privacy_details.md`

## Önerilen gizlilik URL'leri

| Dil | URL |
|-----|-----|
| TR | https://mehmetunal.github.io/game-docs/arrowgo-ok-bulmaca/privacy-policy.html |
| EN | https://mehmetunal.github.io/game-docs/arrowgo-ok-bulmaca/privacy-policy-en.html |
