import { NavbarTab } from '@/app/_components/client/NavbarTab'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
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
