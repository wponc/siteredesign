import type { ReactNode } from "react"
import Navigation from "./Navigation"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}