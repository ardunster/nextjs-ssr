import Link from 'next/link'

function Navbar() {
  return (
    <nav className={'navbar'}>
      <Link href={'/'}>
        <h2>Main Page</h2>
      </Link>
      <Link href={'/articles'}>
        <h3>Articles</h3>
      </Link>
    </nav>
  )
}

export default Navbar
