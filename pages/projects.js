import Container from "../components/container"
import Head from "../components/head"
import HeaderText from "../components/headerText"
import ProjectCard from "../components/project/projectCard"

const Projects = () => {
    return (
        <div className="mt-40">
            <Head title={"Projects"}/>
            <Container>
                <HeaderText left={"My Projects"} right={"私のプロジェクト"} />
            </Container>
                <ProjectCard/>
            <div className="flex justify-center text-center py-20">
                <p>
                    Other projects are
                    still under construction...<br />🚧🚧🚧
                </p>
            </div>
        </div>
    )
}

export default Projects
 