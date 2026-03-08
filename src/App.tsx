import Router from "./Router"
import Layout from "./components/Layout"
import "./styles/global.css"
import ScrollToTop from "./components/ScrollToTop"

export default function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Router />
    </Layout>
  )
}