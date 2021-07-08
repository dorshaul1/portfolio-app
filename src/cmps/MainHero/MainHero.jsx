import './MainHero.scss'
import github from '../../assets/images/icons/github.png'
import instagram from '../../assets/images/icons/instagram.png'
import linkedin from '../../assets/images/icons/linkedin.png'
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export const MainHero = (props) => {

    return (
        <div className="main-hero flex space-between">
            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="personal-details flex column space-between">

                <div className="main-title">
                    <motion.h1 variants={item}>Dor<br />Shaul</motion.h1>
                    <motion.div variants={item} className="decorarion"></motion.div>
                </div>

                <div className="social-medias flex">
                    <a target="_blank" href="https://www.linkedin.com/in/dorshaul/"><motion.img variants={item} src={linkedin} /></a>
                    <a target="_blank" href="https://github.com/dorshaul1"><motion.img variants={item} src={github} /></a>
                    <a target="_blank" href="https://www.instagram.com/dor_shaul22/"><motion.img variants={item} src={instagram} /></a>
                </div>
            </motion.div>

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="description flex column">
                <motion.h4 variants={item} className="title">About me</motion.h4>
                <motion.h3 variants={item} className="job-title">Full stack / Frontend<br />Developer</motion.h3>
                <motion.p variants={item}>Full-Stack Web Developer specializing in advanced frameworks including React, VueJS, NodeJS and MongoDB.
                <br />Army service at the Israeli Navy Computer Unit – Mamtam as Cyber Security Analyst.
                <br />Passionate about technology, striving to be the best, fast learner, and a team player.
                <br />Excellent organizational skills, out of the box creative thinker and Work well under pressure.
                </motion.p>
            </motion.div>
        </div>
    )
}

