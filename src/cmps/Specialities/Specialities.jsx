

import './Specialities.scss'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { SkillsList } from '../SkillsList/SkillsList';
import { useEffect, useState } from 'react';
import { protfolioService } from '../../services/protfolio.service';

export const Specialities = (props) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const [skills, setskills] = useState(protfolioService.getSkills)
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
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
        <div className="specialities ">
            <motion.h4 ref={ref}
                initial="hidden"
                animate={controls}
                variants={item}
                className="title">Specialities</motion.h4>
            <SkillsList class_name="frontend-skiils" title="Top popular frameworks include state management" skills={skills.frontend} />
            <SkillsList class_name="backend-skiils" title="Express, Node.js, Server-side programming, and databases" skills={skills.backend} />
            <SkillsList class_name="other-skiils" title="modern and responsive design, short and practical code" skills={skills.other} />
        </div>
    )
}

