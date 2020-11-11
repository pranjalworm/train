import React from "react"
import Content from "./content"
import SideMenu from "./side-menu"

export default function Home() {

  return (
    <div className="flex h-screen w-screen">

      <SideMenu />
      <Content />

    </div>
  )
}
