import Link from 'next/link'

export default () => (
    <header>
      <nav>
        <Link href='/demo'><a>Demo</a></Link> |
        <Link href='/login'><a>Login</a></Link>
      </nav>
    </header>
)