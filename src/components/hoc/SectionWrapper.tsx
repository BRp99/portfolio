import { motion } from "framer-motion"
import { styles } from "../../styles"
import { staggerContainer } from "../../utils/motion"

type StarWrapperProps = {
  idName: string
  Component: React.FC
}

const StarWrapper = (Component: React.FC, idName: string) => {
  const HOC: React.FC = () => {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
  }

  return HOC
}

export default StarWrapper
