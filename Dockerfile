# Stage 1: Build the custom nodes
FROM node:22-alpine AS builder

WORKDIR /build

# Copy dependency manifests first for better layer caching
COPY package.json package-lock.json* ./

# Install all dependencies (including devDependencies needed for build)
RUN npm ci

# Copy source files needed for the build
COPY tsconfig.json ./
COPY credentials/ credentials/
COPY nodes/ nodes/
COPY utils/ utils/
COPY icons/ icons/
COPY scripts/ scripts/
COPY index.ts ./

# Build the nodes
RUN npm run build

# Stage 2: Production n8n image with custom nodes
FROM n8nio/n8n:latest

# Stage built nodes outside the volume mount path
COPY --from=builder /build/dist /opt/custom-nodes/n8n-nodes-open-mercato

# Wrap the original entrypoint to copy nodes into the volume first
COPY docker-entrypoint-wrapper.sh /docker-entrypoint-wrapper.sh

ENTRYPOINT ["tini", "--", "/docker-entrypoint-wrapper.sh"]
