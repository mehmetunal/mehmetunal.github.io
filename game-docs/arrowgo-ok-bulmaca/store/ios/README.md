# App Store Connect — ArrowGO Ok Bulmaca (iOS, Türkçe)

## Uygulama bilgileri

| Alan | Değer |
|------|-------|
| Birincil dil | Türkçe |
| Bundle ID | `com.arrowgo.arrowgo_ok_bulmaca` |
| SKU | `arrowgo-ok-bulmaca-ios` |
| Birincil kategori | Oyunlar → Bulmaca |
| İkincil kategori | Oyunlar → Strateji |
| İçerik hakları | Kendi içeriğiniz |
| Yaş derecelendirmesi | 4+ (reklam: Evet) |

## Mağaza metinleri (`metadata/tr/`)

| Dosya | App Store Connect alanı |
|-------|-------------------------|
| `name.txt` | Uygulama adı |
| `subtitle.txt` | Alt başlık |
| `promotional_text.txt` | Tanıtım metni |
| `description.txt` | Açıklama |
| `keywords.txt` | Anahtar kelimeler |
| `release_notes.txt` | Sürüm notları (1.0.0) |

## URL'ler

| Alan | URL |
|------|-----|
| Gizlilik Politikası | https://mehmetunal.github.io/game-docs/arrowgo-ok-bulmaca/privacy-policy.html |
| Destek URL'si | https://mehmetunal.github.io/game-docs/arrowgo-ok-bulmaca/support.html |
| Pazarlama URL'si | https://github.com/mehmetunal/arrowgo-ok-bulmaca |

## Uygulama Gizliliği

`app_privacy_details.md` dosyasındaki tabloyu App Store Connect → Uygulama Gizliliği bölümüne girin.

## İnceleme notları

`review_information/notes.txt` → App Store Connect → Uygulama İncelemesi → Notlar

## Ekran görüntüleri

Minimum: iPhone 6,7 inç (1290×2796) — en az 3 adet.

Oyun reposunda:

```bash
./scripts/capture_ios_screenshots.sh
```

Önerilen sahneler: `01-ana-menu`, `02-seviye-secim`, `03-oyun`

## AdMob

Yayın öncesi `lib/ads/ad_config.dart` içindeki prod ID'leri doldurun.  
Debug'da test ID'leri otomatik kullanılır.
