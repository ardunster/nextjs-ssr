import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

/** Available post paths in file system and navigation. Add additional post paths here. */
type Subdirectory = 'articles'

function getPostsDirectory(subdirectory: Subdirectory) {
  const root = process.cwd()
  return path.join(root, `src/assets/${subdirectory}`)
}

function recurseFilenamesInSubdirectory(
  directory: string,
  subdirectory: string,
  filenames: string[],
) {
  const files = fs.readdirSync(path.join(directory), {
    withFileTypes: true,
  })

  files.forEach((file) => {
    if (file.isDirectory()) {
      filenames = recurseFilenamesInSubdirectory(
        path.join(directory, file.name),
        path.join(subdirectory, file.name),
        filenames,
      )
    } else {
      filenames.push(path.join(subdirectory, file.name))
    }
  })

  return filenames
}

export function getFilenames(subdirectory: Subdirectory) {
  const postsDirectory = getPostsDirectory(subdirectory)
  return recurseFilenamesInSubdirectory(path.join(postsDirectory), '', [])
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
    const { data } = matter(markdownWithMeta)
    return {
      data,
      slug: filename.split('.')[0],
    }
  })
}

export async function getArticle(subdirectory: Subdirectory, slug: string) {
  console.log('getArticle slug', slug)
  const markdownWithMeta = fs.readFileSync(
    path.join(getPostsDirectory(subdirectory), slug + '.md'),
    'utf-8',
  )
  // TODO: make it work with .mdx extension too, dynamically
  return matter(markdownWithMeta)
}
