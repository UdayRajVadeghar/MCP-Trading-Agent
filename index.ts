import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { getBalance, getProfile, placeOrder, sellOrder } from "./trade";

const server = new McpServer({
  name: "Demo",
  version: "1.0.0",
});

server.tool(
  "get-profile-info",
  "This is the Information of the Zerodha. So while displaying it , mention it clearly that its zerodhas",
  async () => {
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
  }
);

server.tool(
  "get-balance",
  "This funciton is to fetch the equity balance from zerodha",
  async () => {
    const balance = await getBalance();
    return {
      content: [
        { type: "text", text: "Balance fetched successfully" + balance },
      ],
    };
  }
);

server.tool(
  "buy-stock",
  "This is to buy the stock in the zerodha ,buy-order will be placed on the stock",
  { stock: z.string(), qty: z.number() },
  async ({ stock, qty }) => {
    await placeOrder({ stock, qty });
    return {
      content: [{ type: "text", text: "Bought the stock Successfully" }],
    };
  }
);

server.tool(
  "sell-stock",
  "This is to sell the stock in the zerodha , sell-order will be placed on the stock",
  { stock: z.string(), qty: z.number() },
  async ({ stock, qty }) => {
    await sellOrder({ stock, qty });
    return {
      content: [{ type: "text", text: "Sold the stock Successfully" }],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error("MCP server is connected and running.");
  await new Promise(() => {});
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
