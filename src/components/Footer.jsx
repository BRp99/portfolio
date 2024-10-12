export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <div className="py-8 flex justify-center">
      <div className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-bold flex gap-2 ">&copy; {getCurrentYear()} bia_with_i</div>
    </div>
  )
}
