'use client'

import Link from 'next/link'

export default function ArticleErrorPage() {
  return (
    <>
      <h1>Article Not Found.</h1>
      Custom error recovery such as links back to the{' '}
      <Link href={'/'}>Main Page</Link> or back to the{' '}
      <Link href={'/articles'}>Article directory</Link> go here.
    </>
  )
}
