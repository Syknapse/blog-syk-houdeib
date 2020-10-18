import { useState, useEffect } from 'react'
import Layout from '@components/Layout'
import PostList from '@components/PostList'

import getPosts from '@utils/getPosts'

const Index = ({ posts, title, description, ...props }) => {
  const [checked, setChecked] = useState('new')
  const [sorted, setSorted] = useState([...posts])

  useEffect(() => {
    if (checked === 'old') {
      setSorted([
        ...sorted.sort((a, b) => {
          const dateA = new Date(a.frontmatter.date)
          const dateB = new Date(b.frontmatter.date)
          if (dateA > dateB) return 1
          else if (dateA < dateB) return -1
          else return 0
        }),
      ])
    } else {
      setSorted([
        ...sorted.sort((a, b) => {
          const dateA = new Date(a.frontmatter.date)
          const dateB = new Date(b.frontmatter.date)
          if (dateA < dateB) return 1
          else if (dateA > dateB) return -1
          else return 0
        }),
      ])
    }
  }, [checked])

  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Welcome to Syknapse blog!</h1>

        <p className="description">
          Front-end development, late career change, learning to program, and becoming a developer
        </p>
        <main>
          <div id="sort">
            <label htmlFor="new">Latest</label>
            <input
              id="new"
              type="radio"
              name="sort"
              value="new"
              onChange={() => setChecked('new')}
              checked={checked === 'new'}
            />
            <label htmlFor="old">Oldest</label>
            <input
              id="old"
              type="radio"
              name="sort"
              value="old"
              onChange={() => setChecked('old')}
              checked={checked === 'old'}
            />
          </div>
          <PostList posts={sorted} />
        </main>
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
    </>
  )
}

export default Index

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`)

  const posts = (context => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}
