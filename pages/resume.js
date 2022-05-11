import Head from '../components/head'
import Container from "../components/container"
import HeaderText from "../components/headerText"

const Resume = () => {
    return (
        <div className="mt-40">
            <Head title={"Home"}/>
            <Container>
                <HeaderText left={"My Projects"} right={"履歴書"} />
            </Container>
        </div>
    )
}

export default Resume