import { useEffect, useState } from 'react'
import { useUser } from '../context/userContext'
import { useNavigate } from 'react-router-dom'

import MyBlogCard from './MyBlogCard';

const MyBlogs = () => {
    const { userBlogs, isLoggedIn } = useUser()
    const navigate = useNavigate()
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate('/')
        }
    }, [navigate, isLoggedIn])

    return (
        <div className={`md:w-[75%] w-[100%] md:ml-[25%] p-2 `}>
            <h1>Your Blogs</h1>

            {/* Backdrop Overlay */}
            {isDelete && (
                <div className="w-full h-full fixed top-0 left-0 bg-black bg-opacity-50 z-10 backdrop-blur-sm"></div>
            )}

           
            <section className="flex flex-wrap w-[100%]">
                {userBlogs?.map((blog) => {
                  return <MyBlogCard key={blog._id} {...blog} setIsDelete={setIsDelete} isDelete={isDelete}/>
                })}
            </section>


            
        </div>
    )
}

export default MyBlogs
