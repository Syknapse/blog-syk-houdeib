import Link from 'next/link'
import colors from '../themes/colors'

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="nav" role="navigation" aria-label="main navigation">
          <Link href="/">
            <a>Syknapse Blog</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <a href="https://www.sykhoudeib.com/" title="Portfolio, about me, contact, and more">
            sykhoudeib.com
          </a>
        </nav>
      </header>
      <style jsx>{`
        header {
          width: 100%;
          height: 100px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 1.3rem;
        }
        nav a {
          margin-right: 20px;
          color: ${colors.primary};
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
