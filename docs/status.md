# Service Status

The stability and performance of the Browser Proof System is monitored via a public health endpoint.

## Health Check
- **Endpoint**: [https://proof.reprompt.jp/health](https://proof.reprompt.jp/health)
- **Status Response**: `{"status": "ok", "service": "worker", "time": "..."}`

## System Status
- **Worker Status**: Managed via Cloudflare Edge.
- **Node Service Status**: Managed via PM2 with high availability.
- **Maintenance**: Scheduled maintenance will be announced in the repository issues or on our status page.
