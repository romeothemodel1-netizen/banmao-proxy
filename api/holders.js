import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const url = "https://web3.okx.com/priapi/v1/dx/market/v2/token/overview?chainId=196&tokenContractAddress=0x16d91d1615fc55b76d5f92365bd60c069b46ef78";
    const response = await fetch(url);
    const data = await response.json();

    res.setHeader("Access-Control-Allow-Origin", "*"); // cho phép mọi domain gọi
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Proxy error", details: error.message });
  }
}
