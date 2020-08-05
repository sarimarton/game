import React from 'react'
import { useMachine } from '@xstate/react'
import gameMachine from 'src/view/machine/machine'

export default function Viewport() {
  const [current, send] = useMachine(gameMachine)

  return <div className="viewport">
    <pre>
      {JSON.stringify(current.value)}
    </pre>
  </div>
}
