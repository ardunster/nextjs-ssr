import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

type Subdirectory = 'articles'

function getPostsDirectory(subdirectory: Subdirectory) {
  const root = process.cwd()
  return path.join(root, `src/assets/${subdirectory}`)
}

export function getFilenames(subdirectory: Subdirectory) {
  const postsDirectory = getPostsDirectory(subdirectory)
  const filenames = fs.readdirSync(path.join(postsDirectory), {
    withFileTypes: true,
  })
  return filenames
    .filter((item) => !item.isDirectory())
    .map((item) => item.name)
}

export function getArticles(subdirectory: Subdirectory) {
  const postsDirectory = getPostsDirectory(subdirectory)
  const filenames = getFilenames(subdirectory)
  console.log('filenames', filenames)
  return filenames.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      'utf-8',
    )
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })
}

export async function getArticle(subdirectory: Subdirectory, slug: string) {
  const markdownWithMeta = fs.readFileSync(
    path.join(getPostsDirectory(subdirectory), slug + '.md'),
    'utf-8',
  )
  const { data: frontMatter, content } = matter(markdownWithMeta)
  return {
    frontMatter,
    slug,
    content,
  }
}
