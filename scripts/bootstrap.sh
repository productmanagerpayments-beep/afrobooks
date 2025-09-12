#!/bin/bash
set -e

if [ ! -d .git ]; then
  git init
fi

git add .
if ! git rev-parse --verify HEAD >/dev/null 2>&1; then
  git commit -m "chore: initial commit" || true
fi

if [ -n "$GH_OWNER" ] && [ -n "$GH_REPO" ] && [ -n "$GH_TOKEN" ]; then
  echo "$GH_TOKEN" | gh auth login --with-token
  gh repo create "$GH_OWNER/$GH_REPO" --private --source . --push || git push --set-upstream origin main
else
  git push --set-upstream origin main || true
fi
