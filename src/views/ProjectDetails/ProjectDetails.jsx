import { motion } from "framer-motion"
import './ProjectDetails.scss'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { protfolioService } from "../../services/protfolio.service";

export const ProjectDetails = (props) => {
    const id = useParams().projectId
    const [project, setProject] = useState(protfolioService.getProjectById(id))

    const requireImage = (img) => {
        return require(`../../assets/images/portfolio/${img}.jpg`).default
    }

    const pageVariants = {
        initial: {
            opacity: 0,
        },
        in: {
            opacity: 1,
            scale: 1
        },
    }

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
    return (
        <motion.section
            className="project-details">

            <Link to={`/portfolio`}><div
                initial="initial"
                animate="in"
                variants={pageVariants}
                className="screen"></div></Link>

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="details-content flex column">
                <Link className="close-btn" to={`/portfolio`}><motion.div>X</motion.div></Link>
                <motion.h3 variants={item}>{project.name}</motion.h3>
                <motion.img variants={item} className="project-image" src={requireImage(project.imgUrl)} alt="" />
                <motion.h4 variants={item}>{project.desc}</motion.h4>
                <motion.a variants={item} href={project.url}>Link to the project</motion.a>

            </motion.div>
        </motion.section>
    )
}

