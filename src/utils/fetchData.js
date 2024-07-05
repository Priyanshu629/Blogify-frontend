import { toast } from "react-hot-toast";
import { BLOG_BACKEND_URL } from "./constants";
export const getBlogs = async () => {
  const response = await fetch(BLOG_BACKEND_URL+"get-blogs");
  const data = await response.json();
  return data;
};
export const getBlog = async (blogId) => {
  const response = await fetch(BLOG_BACKEND_URL+"get-blog/"+blogId);
  const data = await response.json();
  return data;
}

export const addBlog = async ({ title, body }) => {
  const response = await fetch(
    BLOG_BACKEND_URL+"create-blog",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ title, body }),
    }
  );
  const position = "top-center";
  const data = await response.json();
  if (response.status === 400) {
    toast.error(data.message, { position });
  } else if (response.status === 401) {
    toast.error(data.message, { position });
  } else {
    toast.success("Blog Added Successfully", { position });
    return setInterval(() => (window.location.href = "/"), 2000);
  }
};

export const deleteBlog = async(blogId) => {
 
 

  const response = await fetch(
   BLOG_BACKEND_URL+ "delete-blog/"+blogId,
    {
      method: "DELETE",
      credentials: "include",
    }
  )
  if(response.status===200){

    toast.success("Blog Deleted Successfully", { position:"top-center" });
    setInterval(()=>window.location.reload(),1000)
  }
};
