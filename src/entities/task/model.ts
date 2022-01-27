import { createStore, createEvent, sample } from 'effector'
import type { Task } from './types'

export const $items = createStore<Task[]>([], {
  sid: 'task-items',
})

export const create = createEvent<Task>()

$items.on(create, (items, item) => [...items, item])

export const $input = createStore<string>('', {
  sid: 'task-input',
})

export const change = createEvent<string>()
export const reset = createEvent<void>()
export const submit = createEvent<void>()

$input.on(change, (_, value) => value).reset(reset, create)

sample({
  clock: submit,
  source: $input,
  fn: title => ({ id: Date.now().toString(), title, completed: false }),
  target: create,
})
