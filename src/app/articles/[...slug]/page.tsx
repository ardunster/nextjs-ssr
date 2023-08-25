import { getArticle, getFilenames } from '@/app/_utils/getArticles'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Button from '@/app/_components/Button'
import SyntaxHighlighterWrapper from '@/app/_components/SyntaxHighlighterWrapper'

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

export default async function ArticleBySlug({
  params,
}: {
  params: { slug: string[] }
}) {
  console.log(params.slug)

  const articleData = await getArticle('articles', params.slug[0])

  console.log(articleData)

  return (
    <>
      <h1>Article By Slug Placeholder</h1>
      Entered slug: {params.slug}
      <br />
      <h2>Markdown contents:</h2>
      <MDXRemote
        source={articleData.content}
        components={{ Button, SyntaxHighlighter: SyntaxHighlighterWrapper }}
      />
    </>
  )
}
