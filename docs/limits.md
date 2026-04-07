# Rate Limits

To ensure stable performance across all verification tasks, the following rate limits are currently planned and subject to change.

## Current Planned Limits
- **Requests per Minute**: 5 requests per IP address.
- **Concurrent Browser Sessions**: 1 concurrent session per partner account.
- **Max Verification Timeout**: 60 seconds per webpage.

## Optimization Advice
- **Wait Strategy**: Use `networkidle` for simple dynamic sites and `load` for static sites to speed up extraction.
- **Batching**: We plan to support batch verification in future releases.
