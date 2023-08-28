import { ArticleData } from '@/app/_utils/getArticles'

export type Tags = { [key: string]: number }

export function aggregateTags(articles: { data: ArticleData; slug: string }[]) {
  const tags: Tags = {}

  for (const article of articles) {
    if (article.data.tags && article.data.tags.length > 0) {
    }
  }
}

export function addTagCounts(tags: Tags, newTags: string[]) {
  for (const tag of newTags) {
    if (tags[tag]) {
      tags[tag] += 1
    } else {
      tags[tag] = 1
    }
  }
}
