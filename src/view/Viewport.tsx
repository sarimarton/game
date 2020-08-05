import React from 'react'
import { useMachine } from '@xstate/react'
import gameMachine from 'src/view/machine/machine'

import styled from 'styled-components'

const _div = styled('div')`
  &&& {
    width: 800px;
    height: 600px;
    background: rgba(255, 0, 0, 0.24);
  }
`

export default function Viewport() {
  const [current, send] = useMachine(gameMachine)

  return (
    <_div>
      <pre>{JSON.stringify(current.value)}</pre>
    </_div>
  )
}
