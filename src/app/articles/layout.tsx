import { ReactNode } from 'react'
import { Breadcrumbs } from '@/app/_components/client/Breadcrumbs'

export default function ArticleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  )
}
