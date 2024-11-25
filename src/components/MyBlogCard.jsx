

import { deleteBlog } from "../utils/fetchData";


const MyBlogCard = ({_id,title,image,body,setIsDelete,isDelete}) => {

    

    const imageId = image?.split("/")[7].split(".")[0];
    
    const handleDelete = async () => {
        await deleteBlog(_id, imageId);  
        setIsDelete(false);
    };
    
    return (
        <div className="w-[100%] p-2">

            <div
                className={`w-[25%] max-sm:w-[70%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 border-black p-2 rounded-md transition-transform ${
                    isDelete ? "scale-100" : "scale-0"
                } bg-pink-600 text-white font-bold shadow-lg z-20`}
            >
                <h1 className="text-lg font-bold my-2">Are You sure ?</h1>

                <div className="w-full p-2 flex justify-between">
                    <button onClick={handleDelete}   className="bg-red-400 p-2 rounded-md">Yes</button>
                    <button onClick={() => setIsDelete(false)} className="bg-gray-400 p-2 rounded-md">
                        No
                    </button>
                </div>
            </div>

            <h2>{title}</h2>
            <img
                src={image ? image : "./blog-dummy-image.jpg"}
                alt="blog image"
                className="w-[25%] max-sm:w-[70%]"
            />
            <p>{body}</p>

            <div className="action">
                <button className="bg-gray-400">Update</button>
                <button onClick={() => setIsDelete(true)} className="bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MyBlogCard
