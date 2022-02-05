import React from 'react';
import { Task } from '../../data/Models/Task';
import styles from '../../styles/common/TaskMini.module.scss';

interface Props {
  task: Task
}

const TaskMini: React.FC<Props> = ({ task }) => {
  return (
    <div className={styles['task-mini-card']}>
      <div className={styles['mini-hover']}>
        <div className={styles['mini-title']}>
          { task.title }
        </div>
        <div className={styles['mini-description']}>
          { task.description }
        </div>
      </div>
    </div>
  );
};

export default TaskMini;
