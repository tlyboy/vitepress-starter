FROM node:20-alpine
RUN apk add --no-cache git
COPY ./ /app
WORKDIR /app
RUN corepack enable
RUN pnpm install
RUN pnpm run build

FROM caddy
RUN mkdir /app
COPY --from=0 /app/.vitepress/dist /app
COPY Caddyfile /etc/caddy/Caddyfile
