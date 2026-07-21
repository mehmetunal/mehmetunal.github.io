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

git add app-ads.txt index.html store-urls.html css/ assets/ fruit-butcher/ tank-1990/ klaro-puzzle/ let-the-number-fall/ echoes-of-the-oasis/ arrowgo-ok-bulmaca/ crossmath-number-puzzle/ gunluk-asistan/ .nojekyll README.md
if git diff --cached --quiet; then
  echo "Değişiklik yok."
else
  git commit -m "Add Fruit Butcher marketing, privacy, and support pages"
fi

echo "Push: git push -u origin main"
git push -u origin main

echo ""
echo "Doğrulama (birkaç dakika sonra):"
echo "  curl -s https://mehmetunal.github.io/app-ads.txt"
echo "AdMob: Uygulamalar → app-ads.txt → Güncellemeleri kontrol et"
