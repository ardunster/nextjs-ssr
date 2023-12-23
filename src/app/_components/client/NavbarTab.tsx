'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import styles from '../Navbar.module.scss'

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
    selectedClass = styles.selectedRoute
  }

  const emphasizedClass = props.isEmphasizedRoute ? styles.emphasizedRoute : ''

  const className = `${selectedClass} ${emphasizedClass}`.trim()

  return (
    <Link href={props.route} className={className}>
      <h2>{props.children}</h2>
    </Link>
  )
}
