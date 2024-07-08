import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getBlog } from "../utils/fetchData"
import Loader from "./Loader"


const Blogdetail = () => {
  const {blogId} = useParams()

  const {data,isLoading}=useQuery({
    queryKey: ['blog',blogId],
    queryFn:()=>getBlog(blogId)
  })


  return (
    <div className="blog-details ">
      {isLoading && <Loader/>}
      <img src={(data?.blog?.image)?data?.blog?.image:"/blog-dummy-image.jpg"} alt="" />
      <h1>{data?.blog?.title}</h1>
      <p>{data?.blog?.body}</p>
    </div>
  )
}

export default Blogdetail
