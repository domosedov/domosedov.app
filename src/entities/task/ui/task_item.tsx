import * as React from 'react'
import type { Task } from '../types'

type TaskItemProps = {
  data: Task
}

export const TaskItem: React.FC<TaskItemProps> = ({ data }) => {
  return <div>{data.title}</div>
}
