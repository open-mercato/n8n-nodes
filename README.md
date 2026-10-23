> **Archived (October 2026).** This n8n community node is no longer maintained, and the
> `n8n-nodes-open-mercato` package was never published to npm. To automate Open Mercato,
> call its [REST API](https://docs.openmercato.com/) directly, using the OpenAPI spec
> served by your instance at `/api/docs/openapi`.

# n8n-nodes-open-mercato

[![Status: archived](https://img.shields.io/badge/status-archived-red.svg)](#deprecated)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-openmercato.com-1F7AE0.svg)](https://docs.openmercato.com/)
[![Core Repo](https://img.shields.io/badge/core-open--mercato-24292F.svg)](https://github.com/open-mercato/open-mercato)

<a id="deprecated"></a>

## ⚠️ Deprecated / Archived

> **This repository is archived and no longer maintained.**
>
> **What this means for you:**
>
> - 📦 **There is no npm package.** `n8n-nodes-open-mercato` was never published, so
>   `npm install n8n-nodes-open-mercato` does not work.
> - 🧊 **No new fixes, features or support are planned** for the code in this repository.
> - 🔌 **Use the Open Mercato REST API instead.** Every Open Mercato instance serves its
>   OpenAPI spec at `/api/docs/openapi` (browsable from the backend API docs page). Any
>   automation tool that can make HTTP requests can call it with an API key. See the
>   [documentation](https://docs.openmercato.com/).
> - 🏠 **Open Mercato itself lives in [Open Mercato Core](https://github.com/open-mercato/open-mercato).**
>   Questions and feature requests belong there.

The rest of this README describes the code as it was left, for anyone who wants to
build it from source.

## About

OpenMercato REST API community node for [n8n](https://n8n.io).

This package provides a single **OpenMercato REST API** node with 366 auto-generated endpoints across 24 resources, built from the OpenMercato OpenAPI specification.

## Installation

The package is not on npm. To try it, build it from source (see [Development](#development))
and load the `dist` output into a custom n8n instance.

## Credentials

The node uses **Bearer token** authentication:

1. In n8n, go to **Credentials** > **New Credential**
2. Search for **OpenMercato REST API**
3. Enter:
   - **Base URL**: Your OpenMercato instance URL (default: `https://docs.openmercato.com`)
   - **API Token**: Your Bearer token

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run dev

# Lint
npm run lint

# Format
npm run format

# Run tests
npm test
```

### Regenerating from OpenAPI

To regenerate the node properties from the latest OpenAPI spec:

```bash
# Download fresh spec and regenerate
npm run generate:openapi -- --download

# Use a custom spec URL
npm run generate:openapi -- --url https://your-instance/api/docs/openapi

# Filter by tag
npm run generate:openapi -- --filter fms,accounting
```

## License

MIT
