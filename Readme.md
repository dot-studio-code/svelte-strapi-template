# Strapi + SvelteKit Website Template

A modern full-stack website boilerplate using **Strapi** as a headless CMS and **SvelteKit** as the frontend framework.

---

## 🚀 Getting Started

Follow these steps to get your local environment up and running.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

### 2. Set environment variables

Both the Strapi backend and SvelteKit frontend require their own `.env` files.

You have **two options**:

#### Option A: Use the setup script (recommended)

```bash
chmod +x create-envs.sh
./create-envs.sh
```

This script will:

- Prompt you for required environment values  
- Generate `.env` files for both `/strapi` and `/app`

#### Option B: Set manually from samples

1. Copy the sample files:

```bash
cp strapi/.env.sample strapi/.env
cp app/.env.sample app/.env
```

2. Open each file and fill in the values:
   - `strapi/.env`: Contains database, secret keys, and S3 configuration
   - `app/.env`: Contains public URLs and GraphQL endpoint

---

### 3. Run the applications

Each app has its own `package.json`. Run the following from the root or their directories.

#### Run Strapi (CMS)

```bash
cd strapi
npm install
npm run develop
```

#### Run SvelteKit (Frontend)

```bash
cd ../app
npm install
npm run dev
```

---

## 🧰 Tech Stack

- **Strapi** — Headless CMS for managing content
- **SvelteKit** — Frontend framework for building modern web apps
- **PostgreSQL** — Primary database
- **S3-Compatible Storage** — For media asset storage

---

## 📁 Project Structure

```
.
├── app/            # SvelteKit frontend
│   └── .env        # Frontend env config
├── strapi/         # Strapi backend (CMS)
│   └── .env        # Backend env config
├── create-envs.sh  # Script to generate .env files
└── README.md
```

---

## 🧪 Useful Commands

| Command                        | Description                           |
|-------------------------------|---------------------------------------|
| `npm run develop` (Strapi)    | Run CMS in development mode           |
| `npm run dev` (SvelteKit)     | Start the frontend dev server         |
| `nvm use`                     | Use Node.js version from `.nvmrc`     |

---