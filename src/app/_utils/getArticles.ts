import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export async function getArticles(subfolder: 'articles') {
  const root = process.cwd()
  const postsDirectory = path.join(root, `src/assets/${subfolder}`)
  const files = fs.readdirSync(path.join(postsDirectory))
  return files.map((filename) => {
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
