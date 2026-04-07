import requests
import json

def verify_page():
    url = "https://proof.reprompt.jp/api/browser-proof"
    payload = {
        "url": "https://example.com",
        "task": "Check if this domain is for use in documentation."
    }
    headers = {
        "Content-Type": "application/json"
    }

    response = requests.post(url, json=payload, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        print(f"Success: {data['success']}")
        print(f"Answer: {data['answer']}")
        print(f"Evidence: {data['evidence_text']}")
    else:
        print(f"Error: {response.status_code}")
        print(response.text)

if __name__ == "__main__":
    verify_page()
