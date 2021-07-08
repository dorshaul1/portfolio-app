import './PortfolioPage.scss'
import { motion } from "framer-motion"
import { PortfolioList } from '../../cmps/PortfolioList/PortfolioList'

export const PortfolioPage = (props) => {

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
        <section className="portfolio-page">

            <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className="portfolio-container">
                <div className="main-title">
                    <motion.h1 variants={item}>Some of my projects</motion.h1>
                    <motion.div variants={item} className="decorarion"></motion.div>
                </div>

                <PortfolioList />
            </motion.div>
        </section>
    )
}

