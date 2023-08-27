import { NavbarTab } from '@/app/_components/client/NavbarTab'

function Navbar() {
  return (
    <nav className={'navbar'}>
      <NavbarTab route={'/'} isEmphasizedRoute={true}>
        Main Page
      </NavbarTab>
      <NavbarTab route={'/articles'} isEmphasizedRoute={false}>
        Articles
      </NavbarTab>
    </nav>
  )
}

export default Navbar
