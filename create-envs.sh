#!/bin/bash

# -------------------------------------
# Generate Strapi .env with app secrets
# -------------------------------------

echo "🔧 Generating Strapi .env file with app secrets..."
mkdir -p ./strapi

cat > ./strapi/.env <<EOF
HOST=0.0.0.0
PORT=1337
STRAPI_TELEMETRY_DISABLED=true
APP_KEYS="$(openssl rand -hex 16),$(openssl rand -hex 16)"
API_TOKEN_SALT="$(openssl rand -hex 32)"
ADMIN_JWT_SECRET="$(openssl rand -hex 32)"
TRANSFER_TOKEN_SALT=$(openssl rand -hex 32)"
JWT_SECRET="$(openssl rand -hex 32)"
EOF

echo "✅ Strapi base secrets written."


# -------------------------------------
# Prompt for DB connection string
# -------------------------------------

read -p $'\n🗄️  Enter your PostgreSQL connection string (e.g., postgres://user:pass@host[:port]/db?sslmode=require):\n> ' DB_URL

# Parse DB values
URL_NO_QUERY="${DB_URL%%\?*}"
PROTO_REMOVED="${URL_NO_QUERY#*://}"
USERPASS="${PROTO_REMOVED%%@*}"
HOST_DB="${PROTO_REMOVED#*@}"

DB_USER="${USERPASS%%:*}"
DB_PASS="${USERPASS#*:}"

HOST_PART="${HOST_DB%%/*}"
DB_NAME="${HOST_DB#*/}"

if [[ "$HOST_PART" == *:* ]]; then
  DB_HOST="${HOST_PART%%:*}"
  DB_PORT="${HOST_PART##*:}"
else
  DB_HOST="$HOST_PART"
  DB_PORT=5432
fi

# Append DB config
cat >> ./strapi/.env <<EOF

DATABASE_CLIENT=postgres
DATABASE_URL="$DB_URL"
DATABASE_HOST="$DB_HOST"
DATABASE_PORT=$DB_PORT
DATABASE_NAME="$DB_NAME"
DATABASE_USERNAME="$DB_USER"
DATABASE_PASSWORD="$DB_PASS"
EOF

echo "✅ Database config added."


# -------------------------------------
# Prompt for full S3 config
# -------------------------------------

printf "\n🌐 Enter S3 configuration:\n"
read -p "S3_ACCESS_KEY: " S3_ACCESS_KEY
read -p "S3_SECRET_KEY: " S3_SECRET_KEY
read -p "S3_REGION: " S3_REGION
read -p "S3_BUCKET_NAME: " S3_BUCKET_NAME
read -p "S3_ENDPOINT (e.g. https://s3.region.provider.com): " S3_ENDPOINT
read -p "S3_BUCKET_URL (e.g. https://bucket.s3.region.provider.com): " S3_BUCKET_URL

cat >> ./strapi/.env <<EOF

S3_ACCESS_KEY="$S3_ACCESS_KEY"
S3_SECRET_KEY="$S3_SECRET_KEY"
S3_REGION="$S3_REGION"
S3_BUCKET_NAME="$S3_BUCKET_NAME"
S3_ENDPOINT="$S3_ENDPOINT"
S3_BUCKET_URL="$S3_BUCKET_URL"
EOF

printf "✅ Full S3 config appended to ./strapi/.env\n"


# -------------------------------------
# SvelteKit env generation
# -------------------------------------

printf "\n🌐 Now enter public URLs for the SvelteKit app...\n"
mkdir -p ./app

read -p "PUBLIC_STRAPI_URL (e.g. http://cms.example.com/): " PUBLIC_STRAPI_URL
read -p "PUBLIC_BASE_URL (e.g. https://example.com/): " PUBLIC_BASE_URL

GRAPHQL_ENDPOINT="${PUBLIC_STRAPI_URL%/}/graphql"

cat > ./app/.env <<EOF
PUBLIC_STRAPI_URL="$PUBLIC_STRAPI_URL"
PUBLIC_BASE_URL="$PUBLIC_BASE_URL"
GRAPHQL_ENDPOINT="$GRAPHQL_ENDPOINT"
EOF

printf "\n✅ Public URLs and GraphQL endpoint written to ./app/.env\n"

# -------------------------------------
# Done
# -------------------------------------

printf "\n🎉 Environment setup complete!\n"
printf "→ Strapi env:     ./strapi/.env\n"
printf "→ SvelteKit env:  ./app/.env"
