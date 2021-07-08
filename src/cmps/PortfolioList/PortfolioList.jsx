import { useState } from 'react'
import { Link, Route } from 'react-router-dom';

import { protfolioService } from '../../services/protfolio.service'
import './PortfolioList.scss'
import { motion } from "framer-motion"
import { ProjectDetails } from '../../views/ProjectDetails/ProjectDetails'

export const PortfolioList = (props) => {
    const [projects, setprojects] = useState(protfolioService.getProjects)

    const requireImage = (img) => {
        return require(`../../assets/images/portfolio/${img}.jpg`).default
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
        <section className="portfolio-list">

            <Route component={ProjectDetails} path="/portfolio/:projectId" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="projects-container flex justify-center wrap">
                {projects.map(project => {
                    return <Link to={`/portfolio/${project.id}`}>

                        <motion.div variants={item} style={{ "backgroundImage": `url(${requireImage(project.imgUrl)})` }} className="project">
                            <div className="screen">
                                <h2>{project.name}</h2>
                                <h4>{project.title}</h4>
                            </div>
                        </motion.div>
                    </Link>
                })}
            </motion.div>
        </section>
    )
}

