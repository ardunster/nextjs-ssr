import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { globSync } from 'glob'

/** Available post paths in file system and navigation. Add additional post paths here. */
export type Subdirectory = 'articles'

/** Categories available to the filterArticlesByCategory function. */
export type ArticleCategory = 'category_1' | 'category_2'

export interface ArticleData {
  publishedDate: string
  modifiedDate?: string
  title: string
  description: string
  tags: string[]
  thumbnailUrl: string
  thumbnailSourceUrl?: string
  status: 'published' | 'draft'
  category: ArticleCategory
  // This typing can safely be removed if not using any additional YAML tags.
  [key: string]: any
}

export interface Article {
  data: ArticleData
  slug: string
  subdirectory: Subdirectory
  content: string
}

function getPostsDirectory(subdirectory: Subdirectory) {
  const root = process.cwd()
  return path.join(root, `src/content/${subdirectory}`)
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

function sortArticlesByDate(article1: Article, article2: Article) {
  const date1 = new Date(article1.data.publishedDate).getTime()
  const date2 = new Date(article2.data.publishedDate).getTime()
  return date2 - date1
}

export function getArticles(subdirectory: Subdirectory): Article[] {
  const filenames = getFilenames(subdirectory)
  return filenames
    .map((filename) => {
      return getArticle(subdirectory, [filename])
    })
    .filter((article) => {
      return article.data.status !== 'draft'
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
    publishedDate: articleWithMatter.data.date,
    modifiedDate: articleWithMatter.data.modified,
    title: articleWithMatter.data.title,
    description: articleWithMatter.data.description,
    tags: articleWithMatter.data.tags,
    thumbnailUrl: articleWithMatter.data.thumbnailUrl,
    // You can default these data imports to ensure they are always defined, if
    // you're not sure whether you can guarantee they are in all the content files.
    category: articleWithMatter.data.category ?? 'category_1',
    status: articleWithMatter.data.status ?? 'published',
    // This line can be removed if you are only using explicit data fields,
    // for example if you remove the [key: string]: any typing from the
    // ArticleData type.
    ...articleWithMatter.data,
  }
  return {
    data: articleData,
    content: articleWithMatter.content,
    slug: path.join(...slugOrFilePath).split('.')[0],
    subdirectory,
  }
}

export function filterArticlesByCategory(
  article: Article[],
  category: ArticleCategory,
): Article[] {
  return article.filter((article) => {
    return article.data.category === category
  })
}
