
const Mask = ({ children }) => {
  return (
    <div className="w-screen h-screen absolute top-0 left-0 z-50 bg-black/60">
      {children}
    </div>
  )
}

export default Mask