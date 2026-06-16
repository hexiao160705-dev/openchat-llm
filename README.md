# openchat-llm

Lightweight OpenAI-compatible chat client based on [NextChat](https://github.com/ChatGPTNextWeb/NextChat).

This is a personal experimental fork for validating a compliant MIT open-source modification and release workflow. It does not include any bundled API key, company endpoint, free quota, or payment flow.

## Features

- OpenAI-compatible API configuration
- Custom API key and base URL
- Custom model list and default model
- Local-first chat history
- Markdown, LaTeX, Mermaid, code highlighting
- Prompt templates, masks, plugins, artifacts, and MCP support inherited from upstream
- Responsive web UI, PWA, dark mode, Docker and Vercel deployment

## What Changed From Upstream

- Replaced user-facing product name with `openchat-llm`.
- Removed upstream SaaS, iOS, sponsor, and promotional sections from this README.
- Replaced visible NextChat SaaS promotion copy in the settings UI with neutral API configuration copy.
- Preserved OpenAI-compatible API settings and user-controlled key/base URL behavior.
- Preserved the original MIT license and copyright notice.

This project is not affiliated with, endorsed by, or sponsored by the original NextChat maintainers.

## Quick Start

Create `.env.local` in the project root:

```env
OPENAI_API_KEY=
BASE_URL=
CODE=
CUSTOM_MODELS=
DEFAULT_MODEL=
HIDE_USER_API_KEY=0
ENABLE_BALANCE_QUERY=0
```

Install dependencies and start development:

```shell
yarn install
yarn dev
```

Open `http://localhost:3000`.

## Environment Variables

| Name | Required | Description |
|---|---:|---|
| `OPENAI_API_KEY` | Yes for server-side use | Your OpenAI-compatible API key. Multiple keys can be separated by commas. |
| `BASE_URL` | No | OpenAI-compatible API base URL. Default upstream behavior uses `https://api.openai.com`. |
| `CODE` | No | Access password, separated by commas. |
| `CUSTOM_MODELS` | No | Add, hide, or rename models. Example: `-all,+gpt-4o-mini,+deepseek-chat`. |
| `DEFAULT_MODEL` | No | Default model shown to users. |
| `HIDE_USER_API_KEY` | No | Set to `1` to hide user API key input. Default keeps user configuration available. |
| `ENABLE_BALANCE_QUERY` | No | Set to `1` to enable balance query if your endpoint supports it. |
| `DISABLE_FAST_LINK` | No | Set to `1` to disable importing settings from URL. |
| `ENABLE_MCP` | No | Set to `true` to enable MCP support before build. |

No real API key should be committed to this repository.

## Deploy

### Docker

```shell
docker build -t openchat-llm .

docker run -d -p 3000:3000 \
  -e OPENAI_API_KEY=your_api_key \
  -e BASE_URL=https://api.openai.com \
  -e CODE=your_access_code \
  openchat-llm
```

### Vercel

Deploy the repository to Vercel and configure environment variables in the Vercel dashboard:

```text
OPENAI_API_KEY
BASE_URL
CODE
CUSTOM_MODELS
DEFAULT_MODEL
```

## Local Development

```shell
yarn install
yarn dev
```

Build production output:

```shell
yarn build
```

Run tests:

```shell
yarn test:ci
```

## Compliance

This project is based on [NextChat](https://github.com/ChatGPTNextWeb/NextChat), which is licensed under the MIT License.

Original copyright:

```text
Copyright (c) 2023-2025 NextChat
```

The original MIT license text is preserved in [LICENSE](./LICENSE). Additional attribution and modification notes are documented in [NOTICE.md](./NOTICE.md).

Before publishing a release, run:

- dependency license scan
- secret scan
- local build
- README and NOTICE review

## Security

Do not commit API keys, access tokens, passwords, or internal service credentials. See [SECURITY.md](./SECURITY.md).

## Upstream

- Original project: [ChatGPTNextWeb/NextChat](https://github.com/ChatGPTNextWeb/NextChat)
- License: [MIT](./LICENSE)

