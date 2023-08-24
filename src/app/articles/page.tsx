import Link from 'next/link'
import Image from 'next/image'
import { getArticles } from '@/app/_utils/getArticles'

export default async function Articles() {
  const articles = await getArticles('articles')

  console.log(articles)

  return (
    <>
      <h1>Articles</h1>

      {articles.map((post, index) => (
        <Link href={'/articles/' + post.slug} passHref key={index}>
          <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.frontMatter.title}</h5>
                  <p className="card-text">{post.frontMatter.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {post.frontMatter.date}
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <Image
                  src={`/images/${post.frontMatter.thumbnailUrl}`}
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
