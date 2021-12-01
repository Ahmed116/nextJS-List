import Head from 'next/head'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="Ninja" />
    </Head>
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
        magni reprehenderit, sit officia odit repudiandae rerum dicta optio odio
        soluta asperiores delectus, facere enim iusto, vel non inventore
        voluptatibus fugit.
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolore
        facilis reiciendis laborum officia quis quam nihil, maiores odio
        asperiores. Perferendis optio ipsum non tempora laborum praesentium unde
        amet molestiae?
      </p>
      <Link href='/ninjas'>
        <a className={styles.btn}>See Ninja Listing</a>
      </Link>
    </div>
    </>
  )
}
