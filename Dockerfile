# Base stage
FROM oven/bun:1.2.9-slim AS base
WORKDIR /app
COPY package.json bun.lock ./

# Development stage
FROM base AS dev
RUN bun install
COPY . .
EXPOSE 5173
CMD ["bun", "run", "dev"]

# Production stage
FROM base AS prod
RUN bun install --production
COPY . .
RUN bun run build
EXPOSE 4173
CMD ["bun", "run", "preview"]