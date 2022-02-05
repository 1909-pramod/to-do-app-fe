import React from 'react';
import { Task } from '../../data/Models/Task';
import { tasks } from '../../data/StaticData/CarouselData';
import styles from '../../styles/common/Task.module.scss';
import Slider from './Slider';
import TaskMini from './TaskMini';

interface Props {
  task: Task
}


const Task: React.FC<Props> = ({ task }) => {
  return (
    <div className={styles['task-card']}>
      <h1>{task.title}</h1>
      <div className={styles['task-body']}>
        <div className={styles.dates}>
          <div className={styles['start-date']}>
            Start Date: { task.startDate }
          </div>
          <div className={styles['end-date']}>
            End Date: { task.endDate }
          </div>
        </div>
        <div className={styles.description}>
          { task.description }
        </div>
        {
          task.subTasks ? 
          <div className={styles['sub-tasks']}>
            <Slider 
              components={
                task.subTasks.map((subTask, idx) => <TaskMini task={subTask}/>)
              }
            />
          </div> : 
          <></>
        }
      </div>
    </div>
  );
};

export default Task;
