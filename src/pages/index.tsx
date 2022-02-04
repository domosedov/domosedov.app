import type { NextPage } from 'next'
import { list } from '@effector/reflect/ssr'
import { CreateTask } from '~/features/task/create'
import { TaskItem, model as taskModel } from '~/entities/task'

const TaskList = list({
  view: TaskItem,
  source: taskModel.$items,
  bind: {},
  mapItem: {
    data: item => item,
  },
  getKey: item => item.id,
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
