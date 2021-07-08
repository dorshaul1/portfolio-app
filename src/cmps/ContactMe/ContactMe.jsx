import './ContactMe.scss'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';
import github from '../../assets/images/icons/github.png'
import instagram from '../../assets/images/icons/instagram.png'
import linkedin from '../../assets/images/icons/linkedin.png'
import me from '../../assets/images/me.jpeg'

import { useForm } from '../../hooks/useForm'

export const ContactMe = (props) => {
    const [newMail, handleChange] = useForm({ subject: "", body: "" })
    const controls = useAnimation();
    const [ref, inView] = useInView();

    const mail = "dorshaul2@gmail.com"

    const onSendMail = () => {
        window.open(`mailto:${mail} ?subject=${newMail.subject}&body=${newMail.body}`);
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 150 },
        visible: {
            y: 0,
            // opacity: 1
        }
    };

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="contact-me flex column">

            <motion.h4 ref={ref}
                initial="hidden"
                animate={controls}
                variants={item}
                className="title">Contact me</motion.h4>

            <div className="contact-me-content flex space-between">

                <div className="email-container flex column">
                    <motion.h3
                        initial="hidden"
                        animate={controls}
                        variants={item}
                        className="email-title">Subject</motion.h3>
                    <motion.input
                        initial="hidden"
                        animate={controls}
                        variants={item}
                        className="subject-input" type="text" id="subject" onChange={handleChange} name="subject" />
                    <motion.h3
                        initial="hidden"
                        animate={controls}
                        variants={item}
                        className="email-title">Body</motion.h3>
                    <motion.input
                        initial="hidden"
                        animate={controls}
                        variants={item}
                        className="body-input" type="text" id="body" onChange={handleChange} name="body" />
                    <motion.button
                        initial="hidden"
                        animate={controls}
                        variants={item}
                        className="send-btn" onClick={onSendMail}>Send</motion.button>
                </div>

                <div className="me flex column align-center ">
                    <motion.img
                        initial="hidden"
                        animate={controls}
                        variants={item}
                        className="image-me"
                        src={me}
                        alt="" />
                    <motion.h5
                        initial="hidden"
                        animate={controls}
                        variants={item}>dorshaul2@gmail.com</motion.h5>
                    <motion.h5
                        initial="hidden"
                        animate={controls}
                        variants={item}>052-2951092</motion.h5>
                    <div className="social-medias flex">
                        <a target="_blank" href="https://www.linkedin.com/in/dorshaul/">
                            <motion.img
                                initial="hidden"
                                animate={controls}
                                variants={item}
                                src={linkedin} />
                        </a>
                        <a target="_blank" href="https://github.com/dorshaul1">
                            <motion.img
                                initial="hidden"
                                animate={controls}
                                variants={item}
                                src={github} />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/dor_shaul22/">
                            <motion.img
                                initial="hidden"
                                animate={controls}
                                variants={item}
                                src={instagram} />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

