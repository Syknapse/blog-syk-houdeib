import Link from 'next/link'
import { breakpoints, colors } from '@themes/index'

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
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        nav {
          width: calc(100% - 40px);
          max-width: 1200px;
          font-weight: bold;
          font-size: 0.9rem;
          display: flex;
          flex-wrap: wrap;
          padding: 2em 0;
        }
        nav a {
          margin-right: 20px;
          margin-top: 16px;
          color: ${colors.primary};
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
        @media ${breakpoints.primary} {
          nav {
            font-size: 1.3rem;
          }
          nav a {
            margin-top: 0;
          }
        }
      `}</style>
    </>
  )
}
