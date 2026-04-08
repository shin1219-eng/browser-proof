async function verifyPage() {
  const BROWSER_PROOF_BASE_URL = "https://proof.reprompt.jp";
  
  const response = await fetch(`${BROWSER_PROOF_BASE_URL}/api/browser-proof`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": "YOUR_API_KEY"
    },
    body: JSON.stringify({
      url: "https://example.com",
      task: "Verify that this domain is used for documentation examples."
    })
  });
  
  const result = await response.json();
  console.log("Verification Success:", result.success);
  console.log("Evidence:", result.evidence_text);
  console.log("Screenshot:", result.screenshot_url);
}

verifyPage();
