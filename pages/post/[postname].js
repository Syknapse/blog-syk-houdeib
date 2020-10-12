import Link from 'next/link'
import { useEffect } from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import Layout from '@components/Layout'
import getSlugs from '@utils/getSlugs'
import replaceElement from '@utils/replaceElement'
import { breakpoints, colors } from '@themes/index'

export default function BlogPost({ siteTitle, frontmatter, markdownBody }) {
  if (!frontmatter) return <></>

  useEffect(() => {
    const target = document.querySelector('img[alt=embed]')
    if (target && frontmatter.embed) replaceElement(target, frontmatter.embed)
  })

  useEffect(() => {
    const images = document.querySelectorAll('.article-body img')
    images.forEach(img => {
      img.style = 'display: block; max-width: 100%; margin: auto'
    })
  })

  useEffect(() => {
    const quotes = document.querySelectorAll('blockquote')
    quotes.forEach(quote => {
      quote.style = `color: ${colors.secondaryGray}`
    })
  })

  useEffect(() => {
    const codeSnippets = document.querySelectorAll('code')
    codeSnippets.forEach(snippet => {
      snippet.style = `color: ${colors.textSecondary}; background-color: ${colors.backgroundGray}; padding: 0 4px`
    })
  })

  useEffect(() => {
    const codeBlocks = document.querySelectorAll('pre')
    codeBlocks.forEach(block => {
      block.style = `width: 100%; background-color: ${colors.backgroundGray}; padding: 8px; overflow: auto`
    })
  })

  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`}>
        <div className="back">
          ←{' '}
          <Link href="/">
            <a>Back to post list</a>
          </Link>
        </div>
        <article>
          <h1>{frontmatter.title}</h1>
          {frontmatter.hero_image && <img src={frontmatter.hero_image} className="hero" alt={frontmatter.title} />}
          <div className="date">
            {frontmatter.long_date && <p>{frontmatter.long_date}</p>}
            {frontmatter.canonical?.url && (
              <p>
                Originally published on:{' '}
                <a href={frontmatter.canonical.url} target="_blank">
                  {frontmatter.canonical.title}
                </a>
              </p>
            )}
          </div>
          <div className="article-body">
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
        <div className="back">
          ←{' '}
          <Link href="/">
            <a>Back to post list</a>
          </Link>
        </div>
      </Layout>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 1200px;
        }
        h1 {
          font-size: 2rem;
        }
        @media ${breakpoints.primary} {
          h1 {
            font-size: 3rem;
          }
        }
        h3 {
          font-size: 2rem;
        }
        .hero {
          width: 100%;
        }
        .back {
          width: 100%;
          max-width: 1200px;
          color: ${colors.primary};
        }
        .date {
          color: ${colors.secondaryGray};
          margin: 16px 0 24px;
        }
        .date p {
          margin: 8px 0;
        }
        .article-body {
          font-size: 1.125rem;
          line-height: 1.6;
          max-width: 680px;
          margin: auto;
        }
        @media ${breakpoints.primary} {
          .article-body {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </>
  )
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import(`../../siteconfig.json`)
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export async function getStaticPaths() {
  const blogSlugs = (context => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map(slug => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}
