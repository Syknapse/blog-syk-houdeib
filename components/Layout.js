import Head from 'next/head'
import Header from './Header'
import colors from '../themes/colors'

export default function Layout({ children, pageTitle, description, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={description}></meta>
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;800;900&display=swap');

        html,
        body {
          margin: 0;
          padding: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
            'Open Sans', 'Helvetica Neue', sans-serif;
          color: ${colors.textPrimary};
        }

        body * {
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: bold;
          color: ${colors.textSecondary};
          margin-top: 3rem;
          margin-bottom: 1rem;
        }

        a {
          color: ${colors.primary};
          text-decoration: none;
        }

        img + em {
          display: block;
          font-size: 1rem;
          color: ${colors.secondaryGray};
          text-align: center;
        }

        .content {
          padding: 2rem 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 2rem 20px;
        }

        .signature {
          display: flex;
          align-items: center;
        }

        .signature img {
          padding: 0 5px;
          height: 1rem;
          border-radius: 50%;
        }
      `}</style>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>
        <p className="signature">
          Built with hummus and imaginary strings by <img src="/profile.JPG" alt="Profile picture" />
          <a href="https://twitter.com/Syknapse" target="_blank" title="My Twitter">
            Syk Houdeib
          </a>
        </p>
        <p>
          View project on <a href="https://github.com/Syknapse/blog-syk-houdeib">GitHub</a>
        </p>
      </footer>
    </>
  )
}
