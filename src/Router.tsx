import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Work from "./pages/Work"
import Writing from "./pages/Writing"
import Personal from "./pages/Personal"

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/personal" element={<Personal />} />
    </Routes>
  )
}