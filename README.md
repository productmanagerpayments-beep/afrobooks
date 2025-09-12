# BackPay

Учебный проект, демонстрирующий платёжные страницы БК.

## Разработка

```bash
pnpm install
pnpm dev
```

## Codespaces

Нужны переменные окружения:

- `GH_OWNER`
- `GH_REPO`
- `GH_TOKEN` (PAT с правами `repo`)

`postCreateCommand` запускает `scripts/bootstrap.sh`, который создаёт репозиторий и пушит в GitHub.
