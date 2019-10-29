import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {
            fields: publishedDate,
            order: DESC
          }
        ) {
          edges {
            node {
              title
              slug
              publishedDate (formatString: "DD MMMM, YYYY")
              id
            }
          }
        }
      }
    `)
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={blogStyles.blogContainer}>
            {data.allContentfulBlogPost.edges.map((edge) => {
                return(
                    <li key={edge.node.id} className={blogStyles.singleBlogPost}>
                        <Link to={`/blog/${edge.node.slug}`} className={blogStyles.singleBlogLink}>
                            <h2 className={blogStyles.singleBlogTitle}>{edge.node.title}</h2>
                            <p className={blogStyles.singleBlogDate}>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                )
            })}
            </ol>
        </Layout>
    )
}

export default BlogPage
