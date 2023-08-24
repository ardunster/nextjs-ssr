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
  return fs.readdirSync(path.join(postsDirectory))
}

export async function getArticles(subdirectory: Subdirectory) {
  const postsDirectory = getPostsDirectory(subdirectory)
  const filenames = getFilenames(subdirectory)
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
