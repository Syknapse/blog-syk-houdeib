import Link from 'next/link'
import { breakpoints, colors } from '@themes/index'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <>
      <div>
        {!posts && <div>No posts!</div>}
        <ul className="post-list">
          {posts &&
            posts.map(post => {
              return (
                <li key={post.slug}>
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a className="post-link">
                      <p className="date">{post.frontmatter.long_date || post.frontmatter.date}</p>
                      <img className="hero" src={post.frontmatter.hero_image || '../static/default-hero.jfif'} />
                      <p className="title">{post?.frontmatter?.title}</p>
                      <p className="subtitle">
                        {post?.frontmatter?.subtitle}
                        <strong>.. Read more -&gt;</strong>
                      </p>
                    </a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
      <style jsx>{`
        .post-list {
          max-width: 600px;
          padding: 0;
          list-style: none;
        }
        .post-link {
          display: block;
          padding: 8px;
          margin-bottom: 1rem;
          box-shadow: 0 0 2px 2px rgb(233 229 229 / 12%);
        }
        .post-link:hover {
          box-shadow: 0 0 2px 2px rgb(233 229 229 / 32%);
        }
        .post-link p {
          margin: 8px 0;
        }
        .post-link .hero {
          width: 100%;
          height: 100%;
          max-height: 200px;
          object-fit: cover;
        }
        @media ${breakpoints.primary} {
          .post-link .hero {
            max-height: 320px;
          }
        }
        .post-link .title {
          font-size: 1.5rem;
        }
        .post-link .subtitle {
          color: ${colors.textPrimary};
        }
      `}</style>
    </>
  )
}
