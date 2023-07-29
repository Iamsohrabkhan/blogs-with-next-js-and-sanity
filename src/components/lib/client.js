const {createClient} = require('@sanity/client')

const client = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_dataset}`,
  apiVersion: `${process.env.NEXT_PUBLIC_SANITY_apiVersion}`, // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data
})
export default client