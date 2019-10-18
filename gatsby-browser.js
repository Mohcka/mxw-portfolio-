/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


import("bootstrap/dist/css/bootstrap.min.css")
import("@fortawesome/fontawesome-free/css/all.min.css")

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (typeof window.IntersectionObserver === `undefined`) {
    import(`intersection-observer`)
    // eslint-disable-next-line no-console
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}