import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { globSync } from 'glob'

/** Available post paths in file system and navigation. Add additional post paths here. */
export type Subdirectory = 'articles'

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
  return globSync([postsDirectory + '/**/*.md', postsDirectory + '/**/*.mdx'], {
    absolute: false,
    cwd: postsDirectory,
  })
}

export interface ArticleData {
  date: string
  modified?: string
  title: string
  description: string
  tags: string[]
  thumbnailUrl: string
  // This typing can safely be removed if not using any additional YAML tags.
  [key: string]: any
}

export interface Article {
  data: ArticleData
  slug: string
  subdirectory: Subdirectory
  content: string
}

function sortArticlesByDate(article1: Article, article2: Article) {
  const date1 = new Date(article1.data.date).getTime()
  const date2 = new Date(article2.data.date).getTime()
  return date2 - date1
}

export function getArticles(subdirectory: Subdirectory): Article[] {
  const filenames = getFilenames(subdirectory)
  return filenames
    .map((filename) => {
      return getArticle(subdirectory, [filename])
    })
    .sort(sortArticlesByDate)
}

export function getArticle(
  subdirectory: Subdirectory,
  slugOrFilePath: string[],
): Article {
  const basePath = path.join(getPostsDirectory(subdirectory), ...slugOrFilePath)
  const filePaths = globSync([basePath + '.md', basePath + '.mdx', basePath])
  const markdownWithMeta = fs.readFileSync(filePaths[0], 'utf-8')
  const articleWithMatter = matter(markdownWithMeta)
  const articleData: ArticleData = {
    date: articleWithMatter.data.date,
    modified: articleWithMatter.data.modified,
    title: articleWithMatter.data.title,
    description: articleWithMatter.data.description,
    tags: articleWithMatter.data.tags,
    thumbnailUrl: articleWithMatter.data.thumbnailUrl,
    ...articleWithMatter.data,
  }
  return {
    data: articleData,
    content: articleWithMatter.content,
    slug: path.join(...slugOrFilePath).split('.')[0],
    subdirectory,
  }
}
