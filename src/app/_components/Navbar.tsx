import Link from 'next/link'

function Navbar() {
  return (
    <nav>
      <Link href="/" passHref>
        <h2>Main Page</h2>
      </Link>
      <Link href="/articles" passHref>
        <p>Articles</p>
      </Link>
    </nav>
  )
}

export default Navbar
