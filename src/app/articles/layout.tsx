import { ReactNode } from 'react'
import { Breadcrumbs } from '@/app/_components/client/Breadcrumbs'

export default function ArticleLayout({ children }: { children: ReactNode }) {
  console.log('in article layout')
  return (
    <>
      <Breadcrumbs />
      Article level layout is here.
      <br />
      {children}
    </>
  )
}
