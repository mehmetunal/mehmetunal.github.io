# App Store Connect — Echoes of the Oasis (iOS, Türkçe)

Tüm mağaza metinleri **Türkçe (tr)** için hazırlanmıştır. App Store Connect'te birincil dil olarak **Türkçe** seçin.

## Uygulama bilgileri

| Alan | Değer |
|------|-------|
| Birincil dil | Türkçe |
| Bundle ID | `com.echoes.oasis.echoesOfTheOasis` |
| SKU | `echoes-oasis-ios` |
| Birincil kategori | Oyunlar → Simülasyon |
| İkincil kategori | Oyunlar → Strateji |
| İçerik hakları | Kendi içeriğiniz |
| Yaş derecelendirmesi | 4+ (reklam: Evet, şiddet: Yok) |

## Mağaza metinleri (`metadata/tr/`)

| Dosya | App Store Connect alanı |
|-------|-------------------------|
| `name.txt` | Uygulama adı |
| `subtitle.txt` | Alt başlık |
| `promotional_text.txt` | Tanıtım metni |
| `description.txt` | Açıklama |
| `keywords.txt` | Anahtar kelimeler |
| `release_notes.txt` | Sürüm notları (1.0.0) |

## URL'ler (GitHub Pages etkinleştirildikten sonra)

| Alan | URL |
|------|-----|
| Gizlilik Politikası | https://mehmetunal.github.io/game-docs/echoes-of-the-oasis/privacy-policy.html |
| Destek URL'si | https://mehmetunal.github.io/game-docs/echoes-of-the-oasis/support.html |
| Pazarlama URL'si | (isteğe bağlı) https://github.com/mehmetunal/echoes-of-the-oasis--game |

GitHub Pages: `mehmetunal/game-docs` deposu — `main` dalı, kök dizin

## Uygulama Gizliliği

`app_privacy_details.md` dosyasındaki tabloyu App Store Connect → Uygulama Gizliliği bölümüne girin.

## İnceleme notları

`review_information/notes.txt` → App Store Connect → Uygulama İncelemesi → Notlar

## Ekran görüntüleri

Minimum: iPhone 6,7 inç (1290×2796) — en az 3 adet.

```bash
./scripts/capture_ios_screenshots.sh
```

## IPA yükleme

```bash
./scripts/release_ios.sh
```

Veya Transporter uygulamasıyla `build/ios/ipa/*.ipa` dosyasını sürükleyin.
