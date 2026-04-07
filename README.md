# Browser Proof

**Browser Proof is evidence-backed web verification for agents.**

Unlike generic browser automation, Browser Proof is a specialized verification component that allows AI agents to confirm facts on the public web with empirical evidence—returning text citations, screenshots, and deterministic JSON.

## 🌟 What is Browser Proof?

Browser Proof is NOT a generic browser automation tool. It is an **Evidence-backed Verification Component** designed for AI agents to confirm facts on the web with empirical evidence.

It answers questions like:
- "Is this product actually in stock for $299?"
- "Does this landing page still claim 99.9% uptime?"
- "Find the citation for X in this research paper."

## 🚀 Use Cases

- **Pricing Check**: Ensure competitive pricing is accurate.
- **Policy Validation**: Verify if a site adheres to specific compliance or terms.
- **Listing QA**: Verify that a listing (real estate, jobs) is still active and matches specs.
- **Citation-backed Research**: Support agents in finding and citing specific text on pages.

## ⚡ Quick Start

### 1. Try it with curl

```bash
curl -X POST https://proof.reprompt.jp/api/browser-proof \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "task": "Check if this domain is for use in documentation."
  }'
```

### 2. Request Schema
See [browser-proof-request.schema.json](./schema/browser-proof-request.schema.json) for details.

### 3. Response Example

```json
{
  "success": true,
  "answer": "Yes, this domain is established to be used for illustrative examples in documents.",
  "evidence_text": "This domain is for use in documentation examples without needing permission.",
  "source_url": "https://example.com",
  "checked_at": "2026-04-08T15:00:00Z",
  "screenshot_url": "https://proof.reprompt.jp/api/runs/abc-123/screenshot"
}
```

## 🔌 MCP Integration (Remote)

Browser Proof supports [Model Context Protocol](https://modelcontextprotocol.io).

- **Recommended (Streamable HTTP)**: `https://proof.reprompt.jp/mcp`
- **SSE**: `https://proof.reprompt.jp/mcp/sse`

See [MCP Examples](./examples/mcp/) for more details.

## 🛡️ Trust & Security

### Authentication
Authentication model is not finalized yet. During the current MVP phase, the service is accessible to authorized partners.

### Rate Limits
Rate limits are currently active. Planned limits and status are to be finalized.

### Data Retention & Privacy
- Verification history: 30 days (Planned)
- Screenshots: 7 days (Planned)
See [Privacy](./docs/privacy.md) and [Retention](./docs/retention.md).

## 📊 Status

Health check: [https://proof.reprompt.jp/health](https://proof.reprompt.jp/health)

---
© 2026 Browser Proof System. Browser Proof is evidence-backed web verification for agents.
