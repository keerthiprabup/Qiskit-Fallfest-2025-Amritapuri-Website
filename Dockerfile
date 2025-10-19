# 1. Use Node.js base image
FROM node:20-alpine AS deps

# 2. Set working directory
WORKDIR /app

# 3. Copy lockfiles and install dependencies
COPY package.json pnpm-lock.yaml* package-lock.json* ./

# If using pnpm
RUN if [ -f pnpm-lock.yaml ]; then \
      npm install -g pnpm && pnpm install --no-frozen-lockfile; \
    elif [ -f package-lock.json ]; then \
      npm ci; \
    else \
      npm install; \
    fi

# 4. Build the project
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# 5. Production image with only necessary files
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# Copy built app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.mjs ./next.config.mjs

# Expose port and run
EXPOSE 3000
CMD ["npm", "start"]
