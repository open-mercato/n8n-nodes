# n8n-nodes-open-mercato

OpenMercato REST API community node for [n8n](https://n8n.io).

This package provides a single **OpenMercato REST API** node with 366 auto-generated endpoints across 24 resources, built from the OpenMercato OpenAPI specification.

## Installation

Install in your n8n instance:

```bash
npm install n8n-nodes-open-mercato
```

Or add to a custom n8n Docker image.

## Credentials

The node uses **Bearer token** authentication:

1. In n8n, go to **Credentials** > **New Credential**
2. Search for **OpenMercato REST API**
3. Enter:
   - **Base URL**: Your OpenMercato instance URL (default: `https://openmercato.freighttech.org`)
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
