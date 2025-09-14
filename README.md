# SaaS Contracts Dashboard

React + Vite + Tailwind demo for a SaaS contracts management UI.

## Features
- Login (mock auth, password `test123`)
- Contracts dashboard: list, search, filters, pagination
- Contract detail: clauses, AI insights, evidence drawer
- Upload modal with simulated uploads
- Context API for auth
- Responsive UI with Tailwind CSS

## Run locally

1. Clone the repository
```bash
git clone https://github.com/PratikDevelops/SaaS-Contracts-Dashboard.git
cd SaaS-Contracts-Dashboard
npm install
```

3. Start dev server
```bash
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173)

## Build
```bash
npm run build
```


## Notes
- The app uses Context API (AuthContext) and mock fetch for contracts.
- Login accepts any username with password `test123`.
