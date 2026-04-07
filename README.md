# Browser Proof

**Browser Proof is evidence-backed web verification for agents.**

Browser Proof is a verification component for agents that checks claims on public webpages and returns structured results with evidence text, screenshots, and deterministic JSON.

It is **not** a general-purpose browser automation product.  
It is designed for situations where an agent needs external confirmation with evidence.

## What it does

Browser Proof helps agents:

- verify whether a claim appears on a public webpage
- extract supporting evidence text
- capture a screenshot for auditability
- return a stable JSON response for downstream systems

## Typical use cases

- **Pricing check**: confirm whether a price is actually shown on a page
- **Policy validation**: verify whether required language appears on a landing page
- **Listing QA**: confirm whether a job post, real-estate listing, or product page still matches expected facts
- **Citation-backed research support**: retrieve the exact text used as evidence

## Quick start

### HTTP API

```bash
curl -X POST https://proof.reprompt.jp/api/browser-proof \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "task": "Check whether this page says it is for use in documentation."
  }'
```

Example response:

```json
{
  "success": true,
  "answer": "Yes, the page states that it is for use in documentation examples.",
  "evidence_text": "This domain is for use in documentation examples without needing permission.",
  "source_url": "https://example.com",
  "checked_at": "2026-04-08T15:00:00Z",
  "screenshot_url": "https://proof.reprompt.jp/api/runs/abc-123/screenshot",
  "error": null
}
```

## MCP connection

Browser Proof exposes remote MCP endpoints.

* **Recommended (Streamable HTTP)**: `https://proof.reprompt.jp/mcp`
* **SSE**: `https://proof.reprompt.jp/mcp/sse`

See:

* `server.json`
* `examples/`
* `docs/mcp.md`

## HTTP endpoints

* `POST /api/browser-proof`
* `GET /api/runs`
* `GET /api/runs/:id`
* `GET /api/runs/:id/screenshot`
* `GET /health`

## Authentication

Authentication details are not finalized in this public shelf repository.
Do not document any live secrets or operational credentials here.

## Limits, retention, and privacy

See:

* `docs/limits.md`
* `docs/retention.md`
* `docs/privacy.md`

If a value is not finalized, mark it as planned or to be finalized. Do not present tentative values as final.

## Repository purpose

This repository is the **public shelf** for Browser Proof:

* discovery
* connection details
* interface reference
* examples
* integration guidance

Implementation details live separately in the private core repository.

## Related files

* `agent-card.json`
* `server.json`
* `openapi.yaml`
* `schema/`
* `examples/`
* `docs/`
