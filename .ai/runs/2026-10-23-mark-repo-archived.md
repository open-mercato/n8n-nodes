# Execution plan: mark repository as archived in the README

## Goal

Make it clear to anyone landing on `open-mercato/n8n-nodes` that the community node is archived, not maintained and was never published to npm, and point them at the supported automation surface (Open Mercato REST API and Open Mercato Core).

## Scope

- `README.md` only: a top banner, status badges and a "Deprecated / Archived" section in the style used by the `open-mercato/official-modules` README.
- Existing README content stays below the banner, marked as historical, so the code can still be built from source.

### Non-goals

- No changes to node source, credentials, `package.json`, tests, Docker files or workflows.
- No statement that n8n support exists elsewhere: the Open Mercato monorepo mentions n8n only in design specs, it ships no n8n node.
- No changes to open PRs #4 and #5 or issue #1.
- No pipeline config files (`.ai/agentic.config.json` is absent; defaults are used: base `main`, gate = markdown sanity check).

## Implementation Plan

### Phase 1: README banner

1. Add the archived banner, badges and "Deprecated / Archived" section; mark the remaining sections as historical and remove the `npm install` instruction for a package that does not exist on npm.

## Risks

- Readers might still try `npm install n8n-nodes-open-mercato`; the banner states the package was never published.
- Links: `/api/docs/openapi` is the OpenAPI route served by Open Mercato (`packages/core/src/modules/api_docs`), docs at https://docs.openmercato.com/.

## Progress

> Convention: `- [ ]` pending, `- [x]` done. Append ` — <commit sha>` when a step lands. Do not rename step titles.

### Phase 1: README banner

- [ ] 1.1 Add archived banner and deprecation section to README
