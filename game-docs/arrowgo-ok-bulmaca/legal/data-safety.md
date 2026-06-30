# Google Play — Veri Güvenliği Formu (Data Safety)

ArrowGO - Ok Bulmaca için Play Console **Data safety** bölümüne girilecek özet.

## Veri toplanıyor mu?

**Evet** — üçüncü taraf (Google AdMob) aracılığıyla.

## Veri türleri

| Veri türü | Toplanıyor | Paylaşılıyor | Amaç | Zorunlu / İsteğe bağlı |
|-----------|------------|--------------|------|------------------------|
| Reklam kimliği (Device ID) | Evet | Evet (AdMob) | Reklam, analitik | Zorunlu (ücretsiz uygulama) |
| Uygulama etkileşimleri | Evet | Evet (AdMob) | Reklam, analitik | Zorunlu |
| Tanı teşhis bilgileri | Hayır* | — | — | — |
| Kişisel bilgi (ad, e-posta) | Hayır | — | — | — |
| Konum (kesin) | Hayır | — | — | — |
| Yaklaşık konum (IP) | Evet (AdMob) | Evet | Reklam | Zorunlu |

\* Flutter/AdMob çökme raporları platform varsayılanıyla sınırlı olabilir; ayrıca toplanmıyorsa işaretlemeyin.

## Yerel veriler (cihazda)

| Veri | Sunucuya gider mi? |
|------|-------------------|
| Oyun ilerlemesi | Hayır |
| Ayarlar (ses/titreşim) | Hayır |

## Şifreleme

- Yerel veri: cihaz depolama (şifreleme işletim sistemine bağlı)
- Aktarım: HTTPS (AdMob SDK)

## Veri silme

Kullanıcı uygulamayı kaldırarak veya uygulama verilerini temizleyerek yerel veriyi silebilir. AdMob verileri için Google politikaları geçerlidir.

## Gizlilik politikası URL

```
https://mehmetunal.github.io/game-docs/arrowgo-ok-bulmaca/privacy-policy.html
```

(EN: `privacy-policy-en.html`)
