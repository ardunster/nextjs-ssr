import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'

// Your markdown folder for posts.
const root = process.cwd()
const postsDirectory = path.join(root, 'src/assets/articles')
//
// export async function getPostData(id) {
//   const fullPath = path.join(postsDirectory, `${id}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')
//
//   // Use gray-matter to parse the post metadata section
//   const matterResult = matter(fileContents)
//
//   // Use remark to convert markdown into HTML string
//   const processedContent = await remark()
//     .use(html)
//     .process(matterResult.content)
//   const contentHtml = processedContent.toString()
//
//   // Combine the data with the id and contentHtml
//   return {
//     id,
//     contentHtml,
//     ...matterResult.data,
//   }
// }

async function getArticles() {
  const files = fs.readdirSync(path.join(postsDirectory))
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join(postsDirectory, filename),
      'utf-8',
    )
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0],
    }
  })
  return posts
}

export default async function Articles() {
  const articles = await getArticles()

  console.log(articles)

  return (
    <>
      <h1>Articles</h1>

      {articles.map((post, index) => (
        <Link href={'/blog/' + post.slug} passHref key={index}>
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
