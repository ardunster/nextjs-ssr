import { getFilenames } from '@/app/_utils/getArticles'

export async function generateStaticParams() {
  const filenames = getFilenames('articles')
  console.log('filenames', filenames)
  const markdownRegex = /\.md(x)?$/
  const paths = filenames.map((filename) => ({
    slug: [filename.replace(markdownRegex, '')],
  }))

  console.log('generated paths', paths)

  return paths
}

export default function ArticleBySlug({
  params,
}: {
  params: { slug: string[] }
}) {
  console.log(params.slug)

  return (
    <>
      <h1>Article By Slug Placeholder</h1>
      Entered slug: {params.slug}
    </>
  )
}
