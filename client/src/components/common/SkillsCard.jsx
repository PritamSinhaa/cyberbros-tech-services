import React from 'react'

function SkillsCard({icon,heading,para}) {
  return (
    <div>
      <div>{icon}</div>
      <h3>{heading}</h3>
      <p>{para}</p>

    </div>
  )
}

export default SkillsCard
