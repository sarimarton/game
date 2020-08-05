import React from 'react'
import { useMachine } from '@xstate/react'
import gameMachine from 'src/view/machine/machine'
import Splash from 'src/view/Splash'

import styled from 'styled-components'

const _div = styled('div')`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    font: 1em courier;
  }

  .viewport-container {
    width: 800px;
    height: 600px;
    background: rgba(255, 0, 0, 0.24);
  }

  .splash-container {
    height: 100%;
    transition: opacity 1s;
  }

  [data-state="game"] .splash-container {
    opacity: 0;
  }
`

export default function Viewport() {
  const [current, send] = useMachine(gameMachine)

  return (
    <_div>
      <div className="viewport-container" data-state={current.value}>
        <div className="splash-container">
          <Splash />
        </div>
      </div>
    </_div>
  )
}
