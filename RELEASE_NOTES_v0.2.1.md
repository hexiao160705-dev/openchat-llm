# openchat-llm v0.2.1 Security Maintenance Release

## What changed

- Confirmed the repository does not include a default bundled API key.
- Masked server logs so configured API keys are not printed in full.
- Hardened Docker build context rules to exclude local `.env*` files by default while preserving public env templates.

## Validation

- Source scan found no OpenAI-style keys, GitHub tokens, or private key blocks.
- Docker image and running container environment were checked for default API key values.
- Production Docker build completed successfully.

