'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

export function NavbarTab(props: {
  route: string
  isEmphasizedRoute: boolean
  children: ReactNode
}) {
  const routeIsRoot = props.route === '/'
  const segment = useSelectedLayoutSegment()
  let selectedClass = ''

  if (
    (routeIsRoot && segment == null) ||
    (segment != null && props.route.includes(segment))
  ) {
    selectedClass = 'selected-route'
  }

  const emphasizedClass = props.isEmphasizedRoute ? 'emphasized-route' : ''

  return (
    <Link href={props.route} className={selectedClass}>
      <h2 className={emphasizedClass}>{props.children}</h2>
    </Link>
  )
}
