# openchat-llm

`openchat-llm` 是一个基于 [NextChat](https://github.com/ChatGPTNextWeb/NextChat) 的轻量实验性开源聊天客户端，用于验证 MIT 开源项目复制、轻量修改、依赖检测、密钥检测、Docker 构建、GitHub 发布和 Release 的完整合规流程。

本项目不内置 API Key，不绑定任何公司中转站，不提供免费额度或付费承诺。用户需要自行配置 OpenAI-compatible API Key、Base URL、模型列表和访问码。

## 项目定位

- 个人合规验证版开源项目
- OpenAI-compatible Chat Client
- 保留私有化部署和自定义 API 设置入口
- 轻量替换用户可见品牌和默认推广入口
- 保留必要的上游来源声明、MIT 协议和版权信息

本项目不是 NextChat 官方项目，也未获得 NextChat 官方背书、赞助或认可。

## 功能特性

- 支持 OpenAI-compatible API 配置
- 支持自定义 API Key 和 Base URL
- 支持自定义模型列表和默认模型
- 本地优先保存聊天记录
- 支持 Markdown、LaTeX、Mermaid 和代码高亮
- 继承上游的面具、提示词、插件、Artifacts 和 MCP 能力
- 支持响应式 Web UI、PWA、深色模式、Docker 和 Vercel 部署

## 快速开始

在项目根目录创建 `.env.local`：

```env
OPENAI_API_KEY=
BASE_URL=
CODE=
CUSTOM_MODELS=
DEFAULT_MODEL=
HIDE_USER_API_KEY=0
ENABLE_BALANCE_QUERY=0
```

安装依赖并启动本地开发：

```shell
yarn install
yarn dev
```

打开 `http://localhost:3000`。

## Docker 部署

```shell
docker build -t openchat-llm .

docker run -d -p 3000:3000 \
  -e OPENAI_API_KEY=your_api_key \
  -e BASE_URL=https://api.openai.com \
  -e CODE=your_access_code \
  openchat-llm
```

也可以使用 Docker Compose：

```shell
docker compose --profile no-proxy up --build
```

## 环境变量

| 名称 | 是否必填 | 说明 |
|---|---:|---|
| `OPENAI_API_KEY` | 服务端代理场景需要 | OpenAI-compatible API Key，多个 Key 可用英文逗号分隔 |
| `BASE_URL` | 否 | OpenAI-compatible API Base URL，默认沿用上游行为 |
| `CODE` | 否 | 页面访问码，多个访问码可用英文逗号分隔 |
| `CUSTOM_MODELS` | 否 | 添加、隐藏或重命名模型，例如 `-all,+gpt-4o-mini,+deepseek-chat` |
| `DEFAULT_MODEL` | 否 | 默认展示模型 |
| `HIDE_USER_API_KEY` | 否 | 设置为 `1` 可隐藏用户 API Key 输入框 |
| `ENABLE_BALANCE_QUERY` | 否 | 如果接口支持余额查询，可设置为 `1` |
| `DISABLE_FAST_LINK` | 否 | 设置为 `1` 可禁用从 URL 导入设置 |
| `ENABLE_MCP` | 否 | 构建前设置为 `true` 可启用 MCP 支持 |

请不要向仓库提交真实 API Key、访问码或公司内部服务地址。

## 与上游相比的主要修改

- 用户可见项目名调整为 `openchat-llm`
- README 改写为个人实验性项目介绍
- 移除前端默认服务、SaaS 推广和开箱即用引导入口
- 保留 OpenAI-compatible API 设置入口
- 替换浏览器 favicon 和应用图标为本项目自生成图标
- 保留上游 MIT 协议、版权声明和来源说明

## 合规说明

本项目基于 [NextChat](https://github.com/ChatGPTNextWeb/NextChat) 修改。NextChat 使用 MIT License。

原版权声明：

```text
Copyright (c) 2023-2025 NextChat
```

本项目保留 `LICENSE` 原文，并通过 `NOTICE.md` 说明来源、修改范围和非官方关系。发布前请检查：

- `README.md`、`README_CN.md`、`NOTICE.md` 中是否保留来源说明
- 仓库中是否存在真实密钥或内部服务地址
- 依赖协议报告中是否存在高风险协议
- Docker 和本地构建是否能正常运行

