const API_URL = import.meta.env.VITE_API_URL;

export const register = async (fullName, email, password) => {
  try {
    const res = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password }),
    });
    return await res.json();
  } catch (error) {
    console.error("Register error:", error);
    return { error: "Network error" };
  }
};

export const login = async (email, password) => {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await res.json();
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
    return await res.json();
  } catch (error) {
    console.error("Get current user error:", error);
    return { error: "Network error" };
  }
};
