import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getProfile } from "./trade";

const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

server.tool("get-profile-info", async () => {
  const profileInfo = await getProfile();
  const name = profileInfo?.user_name;
  const id = profileInfo?.user_id;
  const email = profileInfo?.email;
  // console.log(profileInfo);
  return {
    content: [
      {
        type: "text",
        text: `This is your profile info ${name} ${id} ${email}`,
      },
    ],
  };
});

server.tool(
  "buy-stock",
  { stock: z.string(), qty: z.number() },
  async ({ stock, qty }) => {
    return {
      content: [{ type: "text", text: "Bought the stock Successfully" }],
    };
  }
);

server.tool(
  "add-two-numbers",
  { a: z.number(), b: z.number() },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }],
  })
);

server.tool("factorial", { a: z.number() }, async ({ a }) => {
  let result = 1;
  for (let i = 2; i <= a; i++) {
    result *= i;
  }
  return {
    content: [{ type: "text", text: String(result) }],
  };
});

server.tool("async-task", async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ content: [{ type: "text", text: "Task completed" }] });
    }, 1000);
  });
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // console.log(await getProfile());
  console.error("MCP server is connected and running.");
  await new Promise(() => {});
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
