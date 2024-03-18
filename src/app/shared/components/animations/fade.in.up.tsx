import { motion } from 'framer-motion'

type Props = {
  children: React.ReactNode
  delay?: number
}

export const FadeInUp: React.FC<Props> = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut', delay: delay || 0.2 }}
    >
      {children}
    </motion.div>
  )
}
