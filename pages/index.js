import Head from '../components/head'
import Button from '../components/button'
import Emphasize from '../components/emphasize'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head title={"Home"}/>
      <h1>Heading 1</h1>
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
      <Button type="neutral">Button</Button>
    </div>
  )
}
