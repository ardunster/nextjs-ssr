import { ArticleData } from '@/app/_utils/getArticles'

export type TagCount = { tag: string; count: number }

export function aggregateTags(articles: { data: ArticleData; slug: string }[]) {
  const tags: TagCount[] = []

  for (const article of articles) {
    if (article.data.tags && article.data.tags.length > 0) {
    }
  }
}

export function updateTagCounts(tags: TagCount[], newTags: string[]) {
  for (const newTag of newTags) {
    const existingTag = tags.find((tag) => tag.tag === newTag)
    if (existingTag) {
      existingTag.count += 1
    } else {
      tags.push({ tag: newTag, count: 1 })
    }
  }
}

export function sortTagCounts(tagA: TagCount, tagB: TagCount): number {
  return tagA.count - tagB.count
}
