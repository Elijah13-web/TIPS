import axios from "axios";

export const subscribe = async (email) => {
  try {
    const response = await axios.post("https://tips-backend.onrender.com/subscribe", { email: email.trim() });
    if (response.data && response.data.success) {
      return { success: true, message: response.data.message };
    } else {
      return { success: false, message: response.data?.message || "Subscription failed. Please try again." };
    }
  } catch (error) {
    console.error("Subscribe error:", error);
    return { success: false, message: error.response?.data?.message || "Network error" };
  }
};
