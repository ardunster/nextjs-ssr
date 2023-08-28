import { getArticle, getFilenames } from '@/app/_utils/getArticles'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Button from '@/app/_components/client/Button'
import SyntaxHighlighterWrapper from '@/app/_components/client/SyntaxHighlighterWrapper'
import Image from 'next/image'
import path from 'path'

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
  const slug = path.join(...params.slug)

  const article = await getArticle('articles', slug)

  return (
    <>
      <aside>Breadcrumb: articles/{slug}</aside>
      <h1>{article.data.title}</h1>
      <em>Created: {article.data.date}</em>
      <br />
      {article.data.modified != undefined && (
        <>
          <em>Modified: {article.data.modified}</em>
          <br />
        </>
      )}
      <br />
      <Image
        src={`/images/${article.data.thumbnailUrl}`}
        alt="thumbnail"
        width={640}
        height={200}
        style={{ objectFit: 'cover' }}
      />
      <MDXRemote
        source={article.content}
        components={{ Button, SyntaxHighlighter: SyntaxHighlighterWrapper }}
      />
    </>
  )
}
