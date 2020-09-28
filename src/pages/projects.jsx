import React from "react";
import Layout from "../components/layout";
import { Divider, Embed } from "semantic-ui-react"

export default function Projects() {
  return (
    <Layout>
      <h2>Projects</h2>
      <h2>AshAhTa Portfolio</h2>
      <p>
        This website was made using Gatsby, React, and Semantic UI, and deployed with Netlify.
      </p>
      <Divider />
      <h2>Peer Postie</h2>
      <p>
        Conceived and developed during the
        <a href="https://www.hackthecrisis.nz/"> #HackTheCrisis</a> 48hr-hackathon in April. Anticipating the needs of the future level 3 lockdown phase, Peer Postie is a delivery service that would see individuals and small businesses request for items to be delivered to and for them. Locals in the area would also be able to pick up requested jobs and deliver them in exchange for a delivery fee.
      </p>
      <p>
        The concept placed our group as 2nd Equal along with two other teams.
      </p>
      <Embed
        id="Ju80eMQxyC8"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        source="youtube"
      />
      <Divider />
      <h2>Flatwarming</h2>
      <p>
        Flatwarming is a flat-management app, allowing users in a flatting situation delegate household chores, check dates for rent and utilities payments, and also dates for rubbish and recycling collections.
      </p>
      <p>
        This was developed as a final group project while at Enspiral Dev Academy.
      </p>
    </Layout>
  )
}