import Head from 'next/head';
import styles from '../styles/Home.module.css';
import getHtml from '../lib/get-html';

function createMarkup(text) {
  return {__html: text};
}

export async function getServerSideProps(ctx) {
  const {article} = ctx.query;

  const html = await getHtml(article);

  return { props: { text: `${html.head} ${html.text}` }}
}

export default function Home({text}) {
  console.log(text)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Read It!
        </h1>

          {text.length > 0 && <div className={styles.grid} dangerouslySetInnerHTML={createMarkup(text)} />}

          {text.length === 0 && <form>
            <input type="text" name="article" placeholder="Enter article URL" />
            <button type="submit">Submit</button>
          </form>}
      </main>
    </div>
  )
}


