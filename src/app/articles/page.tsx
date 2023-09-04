import { getArticles } from '@/app/_utils/getArticles'
import { ArticleCard } from '@/app/_components/ArticleCard'

export default function Articles() {
  const articles = getArticles('articles')

  return (
    <>
      <h1>Articles</h1>
      {articles.map((article, index) => (
        <ArticleCard article={article} key={index} />
      ))}
    </>
  )
}
