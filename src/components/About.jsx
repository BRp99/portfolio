import { motion } from "framer-motion"
import { styles } from "../styles"
import { services } from "../constants"
import { SectionWrapper } from "./hoc"
import { fadeIn, textVariant } from "../utils/motion"

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("up", "easeInOut", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-md"
      animate={{ borderColor: ["#00cea8", "#bf61ff"] }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      style={{ borderWidth: "1px", borderStyle: "solid" }}
    >
      <div className="green-pink-gradient rounded-[20px] py-5 px-8 min-h-[280px] flex justify-center items-center flex-col">
        <motion.img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain mb-3"
          animate={{ rotate: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <h3 className="text-white text-[20px] font-semibold text-center">{title}</h3>
      </div>
    </motion.div>
  </div>
)

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I'm a frontend developer with experience in TypeScript and JavaScript, with React, Node.js and Figma. I collaborate closely with clients to
        create efficient and scalable products!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
