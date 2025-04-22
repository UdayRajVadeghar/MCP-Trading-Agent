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
    // console.log(profile);
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
    console.log("Session generated:", response);
  } catch (err) {
    console.error("Error generating session:", err);
  }
}

async function getBalance() {
  const balance = await kc.getHoldings();
  console.log(balance);
}

export async function placeOrder() {
  try {
    const profile = await kc.placeOrder("regular", {
      exchange: "NSE",
      tradingsymbol: "HDFCBA",
      transaction_type: "BUY",
      quantity: 1,
      product: "CNC",
      order_type: "MARKET",
    });
    console.log("Profile:", profile);
  } catch (err) {
    console.error("Error getting profile:", err);
  }
}
