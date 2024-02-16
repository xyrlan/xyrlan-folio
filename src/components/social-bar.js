import { motion } from "framer-motion"

export default function SocialBar() {
    return (

        <div>
            <ul className="flex gap-8 m-10">
                <li>
                    <a target='_blank' href="https://github.com/xyrlan"><motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} whileTap={{ scale: 0.8 }} className=' h-8 cursor-pointer' src='/images/git-icon.svg' /></a>
                </li>
                <li>
                    <a target='_blank' href="https://www.frontendmentor.io/profile/xyrlan"><motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} whileTap={{ scale: 0.8 }} className=' h-8 cursor-pointer' src='/images/frontend-icon.svg' /></a>
                </li>
                <li>
                   <a target='_blank' href="https://www.linkedin.com/in/pedro-lobato-77b23021a/"><motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} whileTap={{ scale: 0.8 }} className=' h-8 cursor-pointer' src='/images/linkedin-icon.svg' /></a> 
                </li>
                <li>
                   <a target='_blank' href="https://api.whatsapp.com/send/?phone=5561999936169"><motion.img initial={{ opacity: 0, scale: 0 }} transition={{ duration: 0.2 }} whileInView={{ opacity: 1, scale: 1 }} whileTap={{ scale: 0.8 }} className=' h-8 cursor-pointer' src='/images/whatapp.png' /></a> 
                </li>
            </ul>
        </div>
    )
}

