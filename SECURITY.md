# Security Policy

## Secrets

Do not commit API keys, access tokens, passwords, private endpoints, payment credentials, or internal service credentials.

Use local `.env.local`, deployment platform secrets, or container runtime environment variables for real values.

## Reporting

For this personal experimental fork, open a private security advisory or contact the repository owner through GitHub if you find a vulnerability.

## Release Checks

Before publishing a release:

- run a dependency license scan
- run a secret scan
- verify `.env.example` contains placeholders only
- verify README examples do not contain real credentials
- verify the project does not bundle a default API key

