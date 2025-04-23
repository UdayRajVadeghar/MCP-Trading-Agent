# MCP Trading Agent

This project implements a custom Trading Agent for Zerodha using the new MCP (Model Context Protocol) TypeScript SDK built from scratch.

# Practical 

## Buying Stock
<img width="634" alt="buyOrder" src="https://github.com/user-attachments/assets/a94ead63-614a-40f0-9034-63d0b88fc2dc" />

## Selling Stock
<img width="830" alt="sellOrder" src="https://github.com/user-attachments/assets/064819cb-8e54-4522-aa51-bee9df85f451" />

## Sample Tests
<img width="719" alt="claude" src="https://github.com/user-attachments/assets/75cc6d7e-7365-496f-858c-9281f9ea2fce" />
<img width="594" alt="LLMresponse" src="https://github.com/user-attachments/assets/ae43f434-f321-4d32-a10a-c04bc767bc9f" />

## Overview

This trading agent is designed to execute trading on Zerodha's platform using the Model Context Protocol. It leverages the full capabilities of the MCP TypeScript SDK to interact with Zerodha's trading interface efficiently and safely.

## Features

- Built using the official MCP (Model Context Protocol) TypeScript SDK
- Integration with Zerodha's trading platform
- Type-safe implementation
- Real-time market data processing from Zerodha
- Automated trading execution on Zerodha

## Tech Stack

- TypeScript
- Zod
- MCP TypeScript SDK
- Node.js
- Zerodha API Integration

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MCP TypeScript SDK
- Zerodha Trading Account
- Zerodha API credentials

## Installation

1. Clone the repository:

```bash
git clone https://github.com/UdayRajVadeghar/MCP-Trading-Agent.git
cd MCP-Trading-Agent
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

## Usage

1. Configure your trading parameters in `tsconfig.json`
2. Start the trading agent:

```bash
npm run dev
# or
yarn start
```

## Configuration

The trading agent can be configured through:

- Environment variables for Zerodha API credentials and sensitive data
- Command-line arguments for runtime options

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Disclaimer

Trading involves substantial risk and is not suitable for every investor. Make sure you understand the risks involved and never trade with money you cannot afford to lose. This trading agent interfaces with your Zerodha account and should be used with appropriate caution.

---

Built with ❤️ by UdayRaj Vadeghar
