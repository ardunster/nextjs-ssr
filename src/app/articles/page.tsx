import { getArticles } from '@/app/_utils/articles'
import { ArticleCard } from '@/app/_components/ArticleCard'

export default function Articles() {
  const articles = getArticles('articles')

  return (
    <>
      <h1>Articles</h1>
      {articles.map((article) => (
        <ArticleCard article={article} key={article.slug} />
      ))}
    </>
  )
}
