import React, { FunctionComponent } from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql, StaticQuery } from "gatsby"

/**
 * SEO props supplying info for the meta tags
 */
interface SEOProps {
  /**
   * SEO meta description
   */
  description?: string
  /**
   * SEO meta language
   */
  lang?: string
  /**
   * SEO meta
   */
  meta?: any[]
  /**
   * SEO meta
   */
  title: string
}

const SEO: FunctionComponent<SEOProps> = ({
  description,
  lang,
  meta,
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `)

    const metaDescription = description || site.siteMetadata.description

    

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta as unknown as [])}
    />
  )
}

export default SEO
