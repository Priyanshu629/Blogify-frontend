import { toast } from "react-hot-toast";
import { USER_BACKEND_URL } from "./constants";


export const handleLogin = async ({ username, password }) => {
  try {
    const response = await fetch(USER_BACKEND_URL+"login", {
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
      setInterval(()=>window.location.href="/",2000)
    }
  } catch (error) {
    console.log(error);
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

    const response = await fetch(USER_BACKEND_URL+"register", {
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
      return setInterval(()=>window.location.href="/",2000)
    }
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

export const getProfile=async()=>{
    const response = await fetch(USER_BACKEND_URL+"profile",{
      method:"GET",
      credentials:"include",
    })

    if(!response.ok){
      return window.location.href="/"
    }
    else{
    const data = await response.json()
    return data;
    }
}

export const logout = async (setIsLoggedIn,setUserId) => {
  await fetch(USER_BACKEND_URL+"logout", {
    method: "POST",
    credentials:"include"
  });
    setIsLoggedIn(false)
    setUserId(null)
    // window.location.href = "/";
  
};
