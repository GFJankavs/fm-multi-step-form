# syntax=docker/dockerfile:1

# ---- Build stage ----
# Node 24 satisfies Vite 8 / rolldown's engine requirement (^20.19 || >=22.12),
# so pnpm installs the platform-native rolldown binding and `vite build` works.
FROM node:24-alpine AS build
WORKDIR /app

# Corepack activates the exact pnpm version pinned in package.json ("packageManager").
RUN corepack enable

# Install dependencies first so this layer is cached when only source changes.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the static site into /app/dist.
COPY . .
RUN pnpm run build

# ---- Serve stage ----
FROM nginx:alpine AS serve

# SPA-aware nginx config (history fallback + asset caching).
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Ship only the built static assets.
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
