export default ({ children, title = 'This is the default title' }) => (
    <header>
      <nav>
        <Link href='/demo'><a>Demo</a></Link> |
        <Link href='/login'><a>Login</a></Link>
      </nav>
    </header>
)