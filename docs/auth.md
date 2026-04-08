# Authentication

Production Browser Proof access requires an API key.

## Canonical client header

- `X-API-Key: YOUR_API_KEY`

Bearer-style compatibility may exist for some clients, but `X-API-Key` is the canonical production format for this service.

## Protected endpoints

- `POST https://proof.reprompt.jp/mcp`
- `GET https://proof.reprompt.jp/mcp/sse`
- `POST https://proof.reprompt.jp/api/browser-proof`
- `GET https://proof.reprompt.jp/api/runs`
- `GET https://proof.reprompt.jp/api/runs/:id`
- `GET https://proof.reprompt.jp/api/runs/:id/screenshot`

## Notes

- `server.json` intentionally uses placeholder-style header configuration only
- do not commit live keys into repository files
- keys may be disabled, revoked, or limited by monthly credits depending on plan
- the public Registry entry is for discovery, not anonymous unrestricted use

## Example

```json
{
  "headers": {
    "X-API-Key": "YOUR_API_KEY"
  }
}
```

## Access and support

The initial commercial rollout uses issued keys and plan-based credits.
If you need trial or paid access, request an API key through the project contact or sales channel.
