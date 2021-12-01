import Link from 'next/link'
import Head from 'next/head'

const about = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name='keywords' content='Ninja' />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          temporibus ipsa optio qui in quibusdam minima incidunt, aliquam
          voluptatem explicabo eveniet ab provident. Perspiciatis ullam modi
          animi? Fuga, minus explicabo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quia
          dolorum quo unde accusamus culpa, cumque harum perferendis et ratione
          eum repellendus? Quis exercitationem molestias culpa est.
          Exercitationem, sunt minus.
        </p>
        <Link href='/'>
          <a>Back to Home Page</a>
        </Link>
      </div>
    </>
  )
}

export default about
