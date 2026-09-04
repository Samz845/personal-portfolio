const BASE_URL = "https://portfolio-messages-fgt2.onrender.com/api/v1";

export const sendMsg = async (data) => {
  const res = await fetch(`${BASE_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const responseData = await res.json();
  if (!res.ok) {
    throw new Error(responseData.message || "Failed to send message");
  }
  return responseData;
};
