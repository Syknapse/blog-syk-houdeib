import Link from 'next/link'

export default function PostList({ posts }) {
  if (posts === 'undefined') return null

  return (
    <>
      <div>
        {!posts && <div>No posts!</div>}
        <ul>
          {posts &&
            posts.map(post => {
              return (
                <li key={post.slug} className="post-link">
                  {post.frontmatter.long_date || post.frontmatter.date}: {` `}
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a>{post?.frontmatter?.title}</a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
      <style jsx>{`
        .post-link {
          margin-bottom: 1rem;
        }
      `}</style>
    </>
  )
}
