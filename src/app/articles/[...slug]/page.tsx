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

  const articleData = await getArticle('articles', slug)

  return (
    <>
      <aside>Computed slug: {slug}</aside>
      <h1>{articleData.frontMatter.title}</h1>
      <em>Created: {articleData.frontMatter.date}</em>
      <br />
      {articleData.frontMatter.modified != undefined && (
        <>
          <em>Modified: {articleData.frontMatter.modified}</em>
          <br />
        </>
      )}
      <br />
      <Image
        src={`/images/${articleData.frontMatter.thumbnailUrl}`}
        alt="thumbnail"
        width={640}
        height={200}
        style={{ objectFit: 'cover' }}
      />
      <MDXRemote
        source={articleData.content}
        components={{ Button, SyntaxHighlighter: SyntaxHighlighterWrapper }}
      />
    </>
  )
}
