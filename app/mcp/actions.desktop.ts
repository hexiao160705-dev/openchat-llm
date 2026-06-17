import {
  DEFAULT_MCP_CONFIG,
  McpConfigData,
  McpRequestMessage,
  ServerConfig,
  ServerStatusResponse,
} from "./types";

export async function getClientsStatus(): Promise<
  Record<string, ServerStatusResponse>
> {
  return {};
}

export async function getClientTools() {
  return null;
}

export async function getAvailableClientsCount() {
  return 0;
}

export async function getAllTools() {
  return [];
}

export async function initializeMcpSystem() {
  return DEFAULT_MCP_CONFIG;
}

export async function addMcpServer(
  _clientId: string,
  _config: ServerConfig,
): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function pauseMcpServer(): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function resumeMcpServer(): Promise<void> {
  return;
}

export async function removeMcpServer(): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function restartAllClients(): Promise<void> {
  return;
}

export async function executeMcpAction(_request: McpRequestMessage) {
  throw new Error("MCP is disabled in the Windows desktop preview build.");
}

export async function getMcpConfigFromFile(): Promise<McpConfigData> {
  return DEFAULT_MCP_CONFIG;
}

export async function isMcpEnabled() {
  return false;
}
