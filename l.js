import React from 'react'

export default function l() {
  return (
    <div>
      <list>{['Evan', 'Ben', 'Maria', 'Daniel'].map(name => (<Span>{name}</Span>))}</list>
    </div>
  )
}
