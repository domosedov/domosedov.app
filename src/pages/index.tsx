import type { NextPage } from 'next'
import { reflect } from '@effector/reflect/ssr'
import { CreateTask } from '~/features/task/create'
import { TaskList as TaskListView, model as taskModel } from '~/entities/task'

const TaskList = reflect({
  view: TaskListView,
  bind: {
    items: taskModel.$items,
  },
})

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <CreateTask />
      <TaskList />
    </div>
  )
}

export default Home
