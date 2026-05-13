#!/usr/bin/env bash
set -euo pipefail

# Always run from this script's directory (repo root).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "=========================================="
echo "  Kidney Meal Planner - Quick Deploy"
echo "=========================================="
echo

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "[ERROR] Day khong phai la thu muc git hop le."
  exit 1
fi

BRANCH="$(git branch --show-current)"
if [[ -z "$BRANCH" ]]; then
  BRANCH="main"
fi

git add -A

if git diff --cached --quiet; then
  echo "[INFO] Khong co thay doi nao de commit."
  echo "[INFO] Dang thu push nhanh branch hien tai..."
  git push origin "$BRANCH"
  echo "[OK] Push thanh cong. Khong co commit moi."
  git status --short
  exit 0
fi

read -r -p "Nhap commit message (de trong de dung mac dinh): " MSG
if [[ -z "$MSG" ]]; then
  MSG="Update project $(date '+%Y-%m-%d %H:%M:%S')"
fi

git commit -m "$MSG"
git push origin "$BRANCH"

echo "[OK] Commit + push thanh cong len origin/$BRANCH."
git status --short
