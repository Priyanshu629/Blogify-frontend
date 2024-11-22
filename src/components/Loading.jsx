

const Loading = ({message}) => {
  return (
    <div className="flex w-[100%] justify-center items-center">
      <span className="font-bold mx-2">{message}</span>
      <div className="loading"></div>
    </div>
  )
}

export default Loading
