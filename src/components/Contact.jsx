import { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"
import { styles } from "../styles"
import { SectionWrapper } from "./hoc"
import { slideIn } from "../utils/motion"

const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const viteEmail = import.meta.env.VITE_EMAIL

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      alert("Please fill out all fields, then click 'Send'")
      return
    }

    setLoading(true)

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Bia",
          from_email: form.email,
          to_email: viteEmail,
          message: form.message,
        },
        publicKey
      )
      .then(
        () => {
          setLoading(false)
          alert("I will get back to you as soon as possible.")

          setForm({
            name: "",
            email: "",
            message: "",
          })
        },
        (error) => {
          setLoading(false)
          console.error(error)

          alert("Something went wrong. Please try again.")
        }
      )
  }

  return (
    <div className={`flex-1 xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <h3 className={styles.sectionHeadText}>Get in touch</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Write your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Write your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button type="submit" className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
