#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
npm run build
rsync -az --delete dist/ root@187.77.161.118:/var/www/monarchiprepa/dist/
ssh root@187.77.161.118 "chown -R www-data:www-data /var/www/monarchiprepa"
echo "✅ Déployé sur https://monarchiprepa.indevtech.dev"
