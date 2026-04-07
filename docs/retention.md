# Data Retention

The Browser Proof System maintains a structured data retention policy to support audit and verification logs.

## Current Policy (Planned)
- **Verification History**: Standard JSON-RPC and REST logs are stored for 30 days.
- **Evidence Screenshots**: Verification screenshots are available for 7 days in Supabase Storage.
- **Signed URLs**: Signed URLs for screenshots generated via the history API are valid for 1 hour.

## Policy Goals
- **Audit Trails**: We aim to provide long-term evidence for AI-driven decisions.
- **Privacy Compliance**: Automatic deletion occurs at the end of the retention period.
