# WACRM

Initial WACRM project foundation. The frontend is a React 19 application built with Vite and Bootstrap 5. The backend is scaffolded for Laravel 11 and prepared for a local MySQL 8 connection.

## Requirements

- Node.js and npm
- PHP 8.2+
- Composer
- MySQL 8.x (database creation is intentionally not part of this setup)

## Frontend

```powershell
cd "D:\React AAyogan Projects\Project\WACRM\frontend"
npm run dev
```

The frontend starts at the local Vite URL printed in the terminal. Set `VITE_API_BASE_URL` in a frontend `.env` file to override the default API base URL (`http://localhost:8000/api`).

## Backend

The backend's `.env` is configured for MySQL at `127.0.0.1:3306`, using the database name `wacrm` and username `root`. Create/configure the database separately when ready.

```powershell
cd "D:\React AAyogan Projects\Project\WACRM\backend"
composer install
php artisan install:api
php artisan serve
```

## Structure

- `frontend/src/components`, `pages`, `layouts`, `services`, `routes`, and `styles` organize the React application.
- `backend/app`, `database`, and `routes` are the Laravel application areas.
- No CRM modules are implemented and no MySQL database or migrations have been run.
