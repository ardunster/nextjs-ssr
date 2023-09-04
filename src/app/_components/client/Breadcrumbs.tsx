'use client'

import { usePathname } from 'next/navigation'

export function Breadcrumbs() {
  const pathname = usePathname()
  const displayBreadcrumbs = !(pathname === '/articles')

  return (
    <>
      {displayBreadcrumbs && (
        <>
          <aside className={'breadcrumb'}>Breadcrumb: {pathname}</aside>
          <br />
        </>
      )}
    </>
  )
}
