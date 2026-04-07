# Browser Proof System

The Browser Proof System is an agentic browser verification component designed for **A2A (Agent-to-Agent) Proofing**. 

Unlike generic browser-based AI, this system focuses on specific URL verification, returning evidence-backed structured JSON and maintaining indexed history for auditability and analysis.

## Core Features
- **A2A Proofing**: Specialized for agentic interaction with fixed JSON shapes.
- **Evidence-First**: Every successful verification includes text evidence and an automated screenshot.
- **Stateless MCP**: Supports the latest "Streamable-HTTP" transport for simple POST-based tool execution.
- **Stateful SSE**: Supports standard Server-Sent Events for real-time MCP sessions.
- **Auditable History**: All runs are stored in Supabase with easy retrieval APIs.

## MCP Tool List
1. `verify_claim`: Automated browser verification based on a natural language task.
2. `list_runs`: Retrieve verification history.
3. `get_run`: Detailed report for a specific run.
4. `get_run_screenshot`: Retrieve the internal storage URL of the evidence screenshot.

## Connection

### 1. Registry Configuration (`server.json`)
You can connect your MCP client (like Claude Desktop) using the following configuration:

```json
{
  "mcpServers": {
    "browser-proof": {
      "command": "mcp-http-bridge",
      "args": ["https://proof.reprompt.jp/mcp"],
      "env": {
        "AUTH_TOKEN": "your_token_here"
      }
    }
  }
}
```

### 2. Direct API
Refer to [`openapi.yaml`](./openapi.yaml) for direct integration details.

## Documentation
- [MCP Transports](./docs/mcp-transport.md)
- [Agent Card](./agent-card.json)
- [OpenAPI Specification](./openapi.yaml)

## License
MIT License. See [RIGHTS.md](./RIGHTS.md) for details.
