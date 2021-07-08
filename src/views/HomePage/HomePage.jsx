import './HomePage.scss'
import { MainHero } from '../../cmps/MainHero'
import { Specialities } from '../../cmps/Specialities'
// import { ContactMe } from '../../cmps/ContactMe/ContactMe'

export const HomePage = () => {

    return (
        <section className="homePage flex column">
            <MainHero />
            <Specialities />
            {/* <ContactMe /> */}
        </section>
    )

}
