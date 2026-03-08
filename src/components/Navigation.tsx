import { Link } from "react-router"

export default function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/work">Work</Link>
      <Link to="/writing">Writing</Link>
      <Link to="/personal">Personal</Link>
    </nav>
  )
}
