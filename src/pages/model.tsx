import type { NextPage } from 'next'
import { createEffect } from 'effector'
import { debug } from 'patronum/debug'
import { status } from 'patronum/status'

const effectFx = createEffect({
  handler: () => {
    throw new Error('effectFx')
  },
})

const $status = status({ effect: effectFx })

debug($status)

effectFx()

export const Model: NextPage = () => {
  return (
    <div>
      <h1>Model</h1>
    </div>
  )
}

export default Model
