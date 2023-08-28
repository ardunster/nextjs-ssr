import Image from 'next/image'
import Link from 'next/link'
import { Article } from '@/app/_utils/getArticles'

export function ArticleCard(props: { article: Article; index: number }) {
  const { article, index } = props
  return (
    <Link href={'/articles/' + article.slug} key={index}>
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
  )
}
