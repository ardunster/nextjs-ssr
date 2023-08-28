import { getArticles } from '@/app/_utils/getArticles'
import { ArticleCard } from '@/app/_components/ArticleCard'

export default async function Articles() {
  const articles = getArticles('articles')

  console.log(articles)

  return (
    <>
      <h1>Articles</h1>

      {articles.map((article, index) => (
        <ArticleCard
          article={article}
          index={index}
          key={index}
          subdirectory={'articles'}
        />
      ))}
    </>
  )
}
