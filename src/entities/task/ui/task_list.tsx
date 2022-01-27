import * as React from 'react'
import { Task } from '..'

type TaskListProps = {
  items: Task[]
}

export const TaskList: React.FC<TaskListProps> = ({ items }) => {
  return (
    <ul className='space-y-2'>
      {items.map(item => (
        <li className='border p-2' key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  )
}
