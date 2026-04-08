# Authentication

The authentication model for the Browser Proof System is still being finalized.

## Current Phase: Partner-Only MVP
During this initial phase, the service endpoint (`proof.reprompt.jp`) is available for authorized partners.

## Current Remote MCP Behavior

- The canonical remote MCP endpoints are:
  - `POST https://proof.reprompt.jp/mcp`
  - `GET https://proof.reprompt.jp/mcp/sse`
- `server.json` intentionally does not publish live credential material.
- Internal worker-to-node authentication exists, but it is not exposed in this public shelf repository.
- Because remote connectivity is currently exposed without client-supplied secret headers in the published `server.json`, consumers should treat connection requirements as subject to change until Registry publish is finalized.

### Planned Methods
- **API Keys**: Standard `Authorization: Bearer <KEY>` headers for both REST and MCP endpoints.
- **A2A Handshake**: Advanced A2A (Agent-to-Agent) discovery and authorization mechanisms.

## Future Access
We plan to provide a public registration process for obtaining developer API keys. Stay tuned for updates in this repository.
