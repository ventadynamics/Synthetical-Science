# Система контроля доступа

## Описание

Добавлена простая JavaScript проверка кода доступа для всех страниц, кроме главной (About).

## Как это работает

1. **Главная страница (About)** - доступна без кода
2. **Все остальные страницы** требуют ввод кода доступа:
   - Research
   - Documents
   - News
   - Projects
   - Facilities
   - Calendar
   - Employee Portal
   - Contacts

## Код доступа по умолчанию

```
1234
```

## Как изменить код доступа

Откройте файл `src/app/components/AccessCodeModal.tsx` и измените строку:

```typescript
if (code === '1234') {
```

на нужный вам код, например:

```typescript
if (code === 'mySecretCode') {
```

## Как добавить/убрать страницы из публичного доступа

Откройте файл `src/app/hooks/useAccessControl.ts` и измените массив `PUBLIC_PAGES`:

```typescript
const PUBLIC_PAGES = ['about', 'news']; // Теперь About и News доступны без кода
```

## Запуск проекта

```bash
cd "Web/Classic Windows XP Layout"
npm install
npm run dev
```

Откройте браузер по адресу, который покажет Vite (обычно http://localhost:5173)

## Технические детали

- Авторизация сохраняется в `sessionStorage` (действует до закрытия вкладки)
- Модальное окно в стиле Windows XP
- Простая клиентская проверка (для серьезной защиты нужен backend)
