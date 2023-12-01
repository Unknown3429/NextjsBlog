import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Animate = ({ children, initial = { opacity: 0 }, animate = { opacity: 1 }, className, transition = { duration: 1 } }) => {
    return (
        <AnimatePresence>
            <motion.div
                initial={initial}
                animate={animate}
                exit={{ opacity: 0 }}
                transition={transition}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Animate