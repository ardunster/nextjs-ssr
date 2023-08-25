import Link from 'next/link'
import Image from 'next/image'
import { getArticles } from '@/app/_utils/getArticles'

export default async function Articles() {
  const articles = getArticles('articles')

  console.log(articles)

  return (
    <>
      <h1>Articles</h1>

      {articles.map((article, index) => (
        <Link href={'/articles/' + article.slug} passHref key={index}>
          <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{article.data.title}</h5>
                  <p className="card-text">{article.data.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{article.data.date}</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <Image
                  src={`/images/${article.data.thumbnailUrl}`}
                  alt="thumbnail"
                  width={500}
                  height={400}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
