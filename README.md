# mehmetunal.github.io

GitHub Pages **kök domain** — AdMob `app-ads.txt` doğrulaması için.

| Dosya | URL |
|-------|-----|
| app-ads.txt | https://mehmetunal.github.io/app-ads.txt |
| Ana sayfa | https://mehmetunal.github.io/ → game-docs yönlendirmesi |

## İlk kurulum (bir kez)

1. GitHub → **New repository**
2. Repository name: **`mehmetunal.github.io`** (tam olarak bu isim)
3. Public, README / .gitignore ekleme
4. Create repository

## Yayınlama

```bash
cd /Users/mehmet/Project/mehmetunal.github.io
./deploy.sh
```

Veya manuel:

```bash
git push -u origin main
```

## GitHub Pages

Repo oluşturulunca Pages otomatik açılır (`main` / root). Birkaç dakika sonra:

```bash
curl https://mehmetunal.github.io/app-ads.txt
```

## AdMob

Konsol → **Uygulamalar** → **app-ads.txt** → **Güncellemeleri kontrol et** (24–72 saat sürebilir).
