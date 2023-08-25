import { getArticle, getFilenames } from '@/app/_utils/getArticles'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Button from '@/app/_components/client/Button'
import SyntaxHighlighterWrapper from '@/app/_components/client/SyntaxHighlighterWrapper'

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
      <aside>Entered slug: {params.slug}</aside>
      <h1>{articleData.frontMatter.title}</h1>
      <br />
      <MDXRemote
        source={articleData.content}
        components={{ Button, SyntaxHighlighter: SyntaxHighlighterWrapper }}
      />
    </>
  )
}
