import { getArticles } from '@/app/_utils/articles'
import { aggregateTags } from '@/app/_utils/tags'
import { TagCard } from '@/app/_components/TagCard'

export default function Tags() {
  const articles = getArticles('articles')

  const tagCounts = aggregateTags(articles)

  return (
    <>
      <h1>Tags</h1>
      {tagCounts.map((tagCount) => (
        <TagCard tagCount={tagCount} key={tagCount.tag} />
      ))}
    </>
  )
}
