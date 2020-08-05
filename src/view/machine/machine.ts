import { Machine, assign, send } from 'xstate'
import { MachineContext, MachineStateSchema, MachineEvent } from './types'

export default Machine<MachineContext, MachineStateSchema, MachineEvent>(
  {
    id: 'game',
    initial: 'splash',
    context: {
      retries: 0
    },
    states: {
      splash: {
        on: {
          SPLASH_TIMEOUT: 'game'
        },
        invoke: {
          src: 'splash',
          onDone: {
            target: 'game'
          }
        }
      },
      game: {}
    }
  },
  {
    services: {
      splash: (ctx) => new Promise((resolve) => setTimeout(resolve, 2000))
    }
  }
)
