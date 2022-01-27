import * as React from 'react'
import { useEvent, useStore } from 'effector-react/scope'
import { model as taskModel } from '~/entities/task'

export const CreateTask: React.FC = () => {
  const [submit, change] = useEvent([taskModel.submit, taskModel.change])
  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    submit()
  }

  const value = useStore(taskModel.$input)

  return (
    <form onSubmit={onSubmitHandler} className='flex items-center gap-x-2'>
      <input
        type='text'
        value={value}
        onChange={event => change(event.target.value)}
        className='rounded'
      />
      <button className='rounded bg-fuchsia-500 px-6 py-2 text-white' type='submit'>
        Add
      </button>
    </form>
  )
}
