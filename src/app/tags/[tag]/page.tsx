import { getArticles } from '@/app/_utils/articles'
import { filterArticlesByTag } from '@/app/_utils/tags'
import { ArticleCard } from '@/app/_components/ArticleCard'

export default function TagPage({ params }: { params: { tag: string } }) {
  const articles = filterArticlesByTag(getArticles('articles'), params.tag)

  return (
    <>
      <h1>Articles Tagged {params.tag}</h1>
      {articles.length > 0 && <small>Found: {articles.length} articles</small>}
      <br />
      {articles.length === 0 && <strong>No articles found.</strong>}
      {articles.map((article, index) => (
        <ArticleCard article={article} key={index} />
      ))}
    </>
  )
}
