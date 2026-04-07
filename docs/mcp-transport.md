# MCP Transports

This system supports two MCP transport methods.

## 1. Streamable-HTTP (Stateless)
- **Endpoint**: `POST https://proof.reprompt.jp/mcp`
- **Method**: Standard JSON-RPC 2.0 via HTTP POST.
- **Benefits**: No persistent connection required. Perfect for serverless clients or one-off tool calls.
- **Auth**: Bearer token in `Authorization` header.

## 2. Server-Sent Events (SSE)
- **Endpoint**: `GET https://proof.reprompt.jp/mcp/sse`
- **Messages**: `POST https://proof.reprompt.jp/mcp/messages?sessionId=...`
- **Benefits**: Real-time updates and standard MCP SDK compatibility.
- **Auth**: Bearer token in `Authorization` header.
