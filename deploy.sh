#!/usr/bin/env bash
# mehmetunal.github.io — GitHub Pages kök domain (AdMob app-ads.txt)
set -euo pipefail

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO="https://github.com/mehmetunal/mehmetunal.github.io.git"

cd "$SITE_DIR"

if [[ ! -f app-ads.txt ]]; then
  echo "app-ads.txt bulunamadı: $SITE_DIR/app-ads.txt"
  exit 1
fi

if [[ ! -d .git ]]; then
  git init -b main
  git remote add origin "$REPO" 2>/dev/null || git remote set-url origin "$REPO"
fi

git add app-ads.txt index.html store-urls.html css/ assets/ game-docs/ let-the-number-fall/ echoes-of-the-oasis/ arrowgo-ok-bulmaca/ .nojekyll
if git diff --cached --quiet; then
  echo "Değişiklik yok."
else
  git commit -m "Mobil oyun tanıtım sitesi ve app-ads.txt"
fi

echo "Push: git push -u origin main"
git push -u origin main

echo ""
echo "Doğrulama (birkaç dakika sonra):"
echo "  curl -s https://mehmetunal.github.io/app-ads.txt"
echo "AdMob: Uygulamalar → app-ads.txt → Güncellemeleri kontrol et"
