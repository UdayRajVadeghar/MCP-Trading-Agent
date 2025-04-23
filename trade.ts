import { KiteConnect } from "kiteconnect";

const apiKey = "";
const apiSecret = "";
const requestToken = "";
let accessToken = "";
const kc = new KiteConnect({ api_key: apiKey });
kc.setAccessToken(accessToken);
// console.log(kc.getLoginURL());

export async function getProfile() {
  try {
    const profile = await kc.getProfile();
    console.log(profile);
    return profile;
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}

async function init() {
  try {
    kc.setAccessToken(accessToken);
    // await getProfile();
    await getBalance();
  } catch (err) {
    console.error(err);
  }
}

export async function generateSession() {
  try {
    const response = await kc.generateSession(requestToken, apiSecret);
    kc.setAccessToken(response.access_token);
    console.log(response.access_token);
  } catch (err) {
    console.error("Error generating session:", err);
  }
}

export async function getBalance() {
  const balance = await kc.getHoldings();
  return balance;
}

export async function placeOrder({
  stock,
  qty,
}: {
  stock: string;
  qty: number;
}) {
  try {
    await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: stock,
      transaction_type: "BUY",
      quantity: qty,
      product: "CNC",
      order_type: "MARKET",
    });
    // console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}

export async function sellOrder({
  stock,
  qty,
}: {
  stock: string;
  qty: number;
}) {
  try {
    await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: stock,
      transaction_type: "SELL",
      quantity: qty,
      product: "CNC",
      order_type: "MARKET",
    });
    // console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
