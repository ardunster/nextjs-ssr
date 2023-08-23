import Link from 'next/link'

function Navbar() {
  return (
    <nav className={'navbar'}>
      <Link href="/" passHref>
        <h2>Main Page</h2>
      </Link>
      <Link href="/articles" passHref>
        <h3>Articles</h3>
      </Link>
    </nav>
  )
}

export default Navbar
