import type { NextPage } from 'next'
import FilterSortBar from '../components/common/FilterSortBar'
import Slider from '../components/common/Slider'
import Task from '../components/common/Task'
import TaskMini from '../components/common/TaskMini'
import { tasks } from '../data/StaticData/CarouselData'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Slider 
        components={
          tasks.map((task) => <TaskMini task={task}/>)
        } 
      />
      <FilterSortBar />
      {
        tasks.map((task, idx) => {
          return (
            <div key={idx}>
              <Task task={task}/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
