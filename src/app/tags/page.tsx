import { getArticles } from '@/app/_utils/getArticles'

export default function Tags() {
  const articles = getArticles('articles')

  return (
    <>
      <h1>Tags</h1>
    </>
  )
}
