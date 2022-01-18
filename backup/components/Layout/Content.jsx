

const Content = ({ children }) => {
  return (
    <div className="w-full h-[calc(100%-40px)] absolute top-0">
      {children}
    </div>
  )
}

export default Content