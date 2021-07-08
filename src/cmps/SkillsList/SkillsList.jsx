import './SkillsList.scss'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';

export const SkillsList = ({ class_name, title, skills }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
        if (!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);

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
    const requireImage = (img) => {
        return require(`../../assets/images/icons/skiils-icon/${img}.svg`).default
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={container}
            className={`skills ${class_name}`}>
            <div className="title-container flex">
                <div className="decoration"></div>
                <h1>{title}</h1>
            </div>
            <div className="skills-container flex">

                {skills && skills.map((skill, idx) => {
                    return <div key={idx} className="skill flex column space-between">
                        <h1></h1>
                        <motion.div variants={item} className="skill-content flex align-center">
                            <img src={requireImage(skill.img)} alt="" />
                            <h2>{skill.name}</h2>
                        </motion.div>
                    </div>
                })}
            </div>
        </motion.div>
    )
}

