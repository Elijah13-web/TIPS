const API_URL = "https://tips-backend.onrender.com/api/auth";

export const register = async (fullName, email, password) => {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: fullName.trim(),
        email: email.trim(),
        password: password.trim(),
      }),
    });
    return await res.json();
  } catch (error) {
    console.error("Register error:", error);
    return { success: false, msg: "Network error" };
  }
};



export const login = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Login error response:", data);
      return { error: data.msg || "Invalid login" };
    }
    return data;
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Network error" };
  }
};

export const getCurrentUser = async (token) => {
  try {
    const res = await fetch(`${API_URL}/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    if (!res.ok) {
      console.error("Get current user error response:", data);
      return { error: data.msg || "Failed to get user" };
    }
    return data;
  } catch (error) {
    console.error("Get current user error:", error);
    return { error: "Network error" };
  }
};
