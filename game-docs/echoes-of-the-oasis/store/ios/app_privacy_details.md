# Uygulama Gizliliği — App Store Connect giriş özeti

App Store Connect → Uygulama Gizliliği bölümüne aşağıdaki bilgileri girin.

## Veri toplanıyor mu?
**Evet** — üçüncü taraf reklam SDK'sı (Google AdMob) aracılığıyla.

## Veri türleri (AdMob / reklam ortakları)

| Veri türü | Amaç | Kullanıcıyla ilişkili |
|-----------|------|----------------------|
| Cihaz Kimliği | Reklam / analitik | Evet (reklam kimliği) |
| Ürün Etkileşimi | Reklam performansı | Hayır |
| Reklam Verileri | Reklam sunumu | Evet |
| Kullanım Verileri | Reklam analitiği | Hayır |
| Tanılama | SDK kararlılığı | Hayır |

## Uygulama tarafından doğrudan toplanan veri
- **Yok** — oyun kaydı yalnızca cihazda tutulur, sunucuya gönderilmez.

## İzleme (Tracking)
- App Tracking Transparency (ATT): **Hayır**
- AdMob, kendi politikalarına göre sınırlı tanımlayıcı kullanabilir.

## Şifreleme beyanı
- `ITSAppUsesNonExemptEncryption = false` — standart HTTPS dışında özel şifreleme yok.

## Yaş derecelendirmesi (özet)
- Şiddet: Yok
- Kumar: Yok
- Reklam: Evet (üçüncü taraf)
- Uygunsuz içerik: Yok
- Önerilen: **4+**
