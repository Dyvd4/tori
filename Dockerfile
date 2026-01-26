# ---------- Build stage ----------
FROM node:24-alpine AS builder

WORKDIR /app

# Install deps first (better cache)
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./

# Pick the package manager you actually use
# pnpm
RUN corepack enable && pnpm install --frozen-lockfile

# npm (uncomment if needed)
# RUN npm ci

# yarn (uncomment if needed)
# RUN yarn install --frozen-lockfile

# Copy source
COPY . .

# Build the app
RUN pnpm build
# RUN npm run build
# RUN yarn build

# ---------- Runtime stage ----------
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add minimal SPA-friendly config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
