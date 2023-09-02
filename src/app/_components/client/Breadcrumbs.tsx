'use client'

import { useSelectedLayoutSegments } from 'next/navigation'

export function Breadcrumbs() {
  const segments = useSelectedLayoutSegments()

  const breadcrumbs = segments.join('/')

  return (
    <>
      {breadcrumbs !== '' && (
        <>
          <aside className={'breadcrumb'}>
            Breadcrumb: articles/{breadcrumbs}
          </aside>
          <br />
        </>
      )}
    </>
  )
}
