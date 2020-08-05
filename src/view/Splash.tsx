import React from 'react'

import styled from 'styled-components'

const _div = styled('div')`
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    background: #afa;
  }
`

export default function Viewport() {
  return <_div>splash</_div>
}
