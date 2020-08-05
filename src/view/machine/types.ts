import { StateMachine } from 'xstate'

export type Machine = StateMachine<
  MachineContext,
  MachineStateSchema,
  MachineEvent
>

export type MachineEvent = { type: 'SPLASH_TIMEOUT' }

export type MachineContext = {}

export interface MachineStateSchema {
  states: {
    splash: {}
    game: {}
  }
}
