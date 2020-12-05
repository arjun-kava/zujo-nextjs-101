import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Zujo Next 101</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Learn about <a href="https://www.zujo.co/">Zujo!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <a href="https://www.zujo.co" className="card">
            <h3>Home &rarr;</h3>
            <p>A place for independent educator.</p>
          </a>

          <a href="https://www.zujo.co/why-go-paid" className="card">
            <h3>Why go paid &rarr;</h3>
            <p>Quality education is valuable</p>
          </a>

          <a href="https://alpha.zujo.co/signin" className="card">
            <h3>Get started &rarr;</h3>
            <p>Don't miss your next opportunity to learn.</p>
          </a>

          <a href="https://alpha.zujo.co/t/explore" className="card">
            <h3>Explore &rarr;</h3>
            <p>Explore Zujo!</p>
          </a>

          <Link href="/posts/first-post">
            <a className="card"> First Post!</a>
          </Link>

          <Link href="/posts/second-post">
            <a className="card"> Second Post!</a>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/arjun-kava"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed By: <a href="https://github.com/arjun-kava"> Arjun Kava</a>
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #fed834;
          text-decoration: none;
          padding: 1rem;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
          background-color: #000;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #fed834;
          border-color: #fed834;
          background-color: #000;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
