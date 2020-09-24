import React from "react";
import Layout from "../components/layout";
import Dimmed from "../components/dimmed"
import Hover from "../components/hover"
import "semantic-ui-css/semantic.min.css"

export default function Home() {
  return (
    <Layout>
      <Hover />
      <Dimmed />
    </Layout>
  )
}
