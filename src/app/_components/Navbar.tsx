import { NavbarTab } from '@/app/_components/client/NavbarTab'

export default function Navbar() {
  return (
    <nav className={'navbar'}>
      <NavbarTab route={'/'} isEmphasizedRoute={true}>
        Main Page
      </NavbarTab>
      <NavbarTab route={'/articles'} isEmphasizedRoute={false}>
        Articles
      </NavbarTab>
      <NavbarTab route={'/tags'} isEmphasizedRoute={false}>
        Tags
      </NavbarTab>
    </nav>
  )
}
