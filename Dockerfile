FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /app
WORKDIR /app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=react19 --prod /prod/react19

FROM base AS react19
COPY --from=build /prod/react19 /prod/react19
WORKDIR /prod/react19
EXPOSE 3000
CMD [ "pnpm", "start" ]