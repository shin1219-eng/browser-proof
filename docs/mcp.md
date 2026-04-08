# Model Context Protocol (MCP)

The Browser Proof System natively supports the [Model Context Protocol](https://modelcontextprotocol.io), enabling AI agents (like Claude Desktop) to use the verification tool as a remote tool.

## Connection Options

### 1. Streamable HTTP (Recommended)
This is the primary method for remote MCP connection to Browser Proof.
- **Endpoint**: `https://proof.reprompt.jp/mcp`
- **Method**: `POST` (Standard JSON-RPC over HTTP)
- **Auth**: `X-API-Key` required

### 2. SSE (Server-Sent Events)
For persistent streaming connections.
- **Endpoint**: `https://proof.reprompt.jp/mcp/sse`
- **Auth**: `X-API-Key` required

### 3. Registry
Browser Proof will be registered in the official MCP Registry with the name:
`io.github.shin1219-eng/browser-proof`

## Example Setup
See [MCP Examples](../examples/mcp/) for a detailed `server.json` configuration.
