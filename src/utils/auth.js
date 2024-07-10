import { toast } from "react-hot-toast";
import { USER_BACKEND_URL } from "./constants";

export const handleLogin = async ({ username, password }) => {
  try {
    const response = await fetch(USER_BACKEND_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });
    const position = "top-center";
    const data = await response.json();
    if (response.status === 401) {
      toast.error(data.message, { position });
    } else if (response.status === 400) {
      toast.error(data.message, { position });
    } else if (response.status === 404) {
      toast.error(data.message, { position });
    } else {
      toast.success(data.message, { position });
      setInterval(() => (window.location.href = "/"), 2000);
    }
  } catch (error) {
    
    return { error: error.message };
  }
};
export const handleSignUp = async ({
  photo,
  username,
  password,
  name,
  email,
}) => {
  try {
    const user = new FormData();
    user.append("username", username);
    user.append("name", name);
    user.append("email", email);
    user.append("password", password);

    if (photo) {
      user.append("photo", photo);
    }

    const response = await fetch(USER_BACKEND_URL + "register", {
      method: "POST",
      body: user,
      credentials: "include",
    });

    const position = "top-center";
    const data = await response.json();

    if (response.status === 422) {
      return toast.error(data.message, { position });
    } else if (response.status === 400) {
      return toast.error(data.message, { position });
    } else {
      toast.success(data.message, { position });
      return setInterval(() => (window.location.href = "/"), 2000);
    }
  } catch (error) {
    
    return { error: error.message };
  }
};

export const getProfile = async () => {
  const response = await fetch(USER_BACKEND_URL + "profile", {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    return (window.location.href = "/");
  } else {
    const data = await response.json();
    return data;
  }
};

export const logout = async (setIsLoggedIn, setUserId) => {
  await fetch(USER_BACKEND_URL + "logout", {
    method: "POST",
    credentials: "include",
  });
  toast.success("log out succefully", { position: "top-center" });
  setIsLoggedIn(false);
  setUserId(null);
};

export const forgetPassword = async ({ email }) => {
  
  const response = await fetch(
    USER_BACKEND_URL+"forget-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    }
  );

  const data = await response.json();
  if (response.status === 400) {
    toast.error(data.message, { position: "top-center" });
  } else if (response.status === 404) {
    toast.error(data.message, { position: "top-center" });
  } else if (response.status === 200) {
    toast.success(data.message, { position: "top-center" });
    setInterval(() => {
      window.location.href = "/reset-password";
    }, 2000);
  }
};
export const resetPassword = async ({ otp, newPassword }) => {
  console.log(otp);
  const response = await fetch(
    USER_BACKEND_URL+"reset-password",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ otp, newPassword }),
    }
  );

  const data = await response.json();
  if (response.status === 401) {
    return toast.error(data.message, { position: "top-center" });
  } else if (response.status === 500) {
    return toast.error(data.message, { position: "top-center" });
  } else if (response.status === 200) {
    toast.success(data.message, { position: "top-center" });
    setInterval(() => {
      window.location.href = "/login";
    }, 2000);
  }
};
