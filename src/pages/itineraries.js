import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import itinerariesStyles from './itineraries.module.scss'

const ItinerariesPage = () => {
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
            <Head title="Itineraries" />
            <h1>Itineraries</h1>
            <ol className={itinerariesStyles.blogContainer}>
            {data.allContentfulBlogPost.edges.map((edge) => {
                return(
                    <li key={edge.node.id} className={itinerariesStyles.singleBlogPost}>
                        <Link to={`/itineraries/${edge.node.slug}`} className={itinerariesStyles.singleBlogLink}>
                            <h2 className={itinerariesStyles.singleBlogTitle}>{edge.node.title}</h2>
                            <p className={itinerariesStyles.singleBlogDate}>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                )
            })}
            </ol>
        </Layout>
    )
}

export default ItinerariesPage
