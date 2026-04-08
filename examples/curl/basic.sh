# URL Verification Example

curl -X POST https://proof.reprompt.jp/api/browser-proof \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com",
    "task": "Check if this domain is for use in documentation."
  }'
