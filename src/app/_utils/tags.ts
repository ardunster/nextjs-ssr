import { Article } from '@/app/_utils/articles'

export type TagCount = { tag: string; count: number }

export function aggregateTags(articles: Article[]) {
  const tags: TagCount[] = []

  for (const article of articles) {
    if (article.data.tags && article.data.tags.length > 0) {
      updateTagCounts(tags, article.data.tags)
    }
  }

  return tags.sort(sortTagCounts)
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

/** Sorts descending with highest quantity first. */
export function sortTagCounts(tagA: TagCount, tagB: TagCount): number {
  return tagB.count - tagA.count
}

export function filterArticlesByTag(
  articles: Article[],
  tag: string,
): Article[] {
  return articles.filter((article) => {
    return article.data.tags && article.data.tags.includes(tag)
  })
}
