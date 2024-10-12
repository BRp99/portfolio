import { SectionWrapper } from "./hoc"
import { technologies } from "../constants"
import Ball from "./Ball"

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className={`w-28 h-28 delay-${index * 100}`} key={technology.name}>
          <Ball icon={technology.icon} />
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
