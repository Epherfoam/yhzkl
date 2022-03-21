import AboutMe from "../components/aboutme/aboutme"
import Container from "../components/container"
import Head from "../components/head"
import HeaderText from "../components/headerText"

const About = () => {
    return (
        <div className="mt-40">
            <Head title={"About Me"}/>
            <Container>
                <HeaderText left={"About Me"} right={"私について"} className="pb-10"/>
                <AboutMe />
            </Container>
        </div>
    )
}

export default About
 