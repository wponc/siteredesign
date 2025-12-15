import { Link } from "react-router"

export default function Navigation() {
  return (
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/work">WORK</Link>
      <Link to="/writing">WRITING</Link>
      <Link to="/personal">PERSONAL</Link>
    </nav>
  )
}
