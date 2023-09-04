import Link from 'next/link'
import { Breadcrumbs } from '@/app/_components/client/Breadcrumbs'

export default function ArticleNotFoundPage() {
  return (
    <>
      <h1>Article Not Found.</h1>
      <Breadcrumbs />
      Custom error recovery such as links back to the{' '}
      <Link href={'/'}>Main Page</Link> or back to the{' '}
      <Link href={'/articles'}>Article directory</Link> go here.
    </>
  )
}
