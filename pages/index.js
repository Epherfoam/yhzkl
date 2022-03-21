import Head from '../components/head'
import Button from '../components/button'
import Emphasize from '../components/emphasize'
import Container from '../components/container'
import Hero from '../components/index/hero'
import ProjectCard from '../components/project/projectCard'
import HeaderText from '../components/headerText'
import AboutMe from '../components/aboutme/aboutme'

const Home = () => {
  return (
    <div>
      <Head title={"Home"}/>
      <Container>
        <Hero/>
        <HeaderText left={"My Projects"} right={"私のプロジェクト"} />
      </Container>
      <ProjectCard/>
        {/* <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
        <p>Aasdasdasdasdasdasdasdasdasdasdasd</p>
        <h1><Emphasize>Emphasize 1</Emphasize></h1>
        <h1><Emphasize type="1">Emphasize 2</Emphasize></h1>
        <h1><Emphasize type="2">Emphasize 3</Emphasize></h1>
        <Button>Button</Button>
        <Button type="negative">Button</Button>
        <Button type="neutral">Button</Button> */}
    </div>

  )

}

export default Home