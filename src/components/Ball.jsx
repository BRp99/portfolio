const Ball = ({ icon }) => {
  return (
    <div className="w-28 h-28 bg-[#fff8eb] rounded-full flex justify-center items-center shadow-md animate-float">
      <img src={icon} alt="technology-icon" className="w-[70%] h-[70%] object-contain" />
    </div>
  )
}

export default Ball
