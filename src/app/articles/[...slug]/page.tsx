export default function ArticleBySlug({
  params,
}: {
  params: { slug: string[] }
}) {
  console.log(params.slug)

  return (
    <>
      <h1>Article By Slug Placeholder</h1>
      Entered slug: {params.slug}
    </>
  )
}
