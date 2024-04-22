import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material';

const TaskList = () => {

  const tasks = useSelector((state) => state.task.tasks);

  return (
    <Box mt={2}>
        {tasks.map((task) => (
          <TaskItem task={task} key={task.id}/>
        ))}
      </Box>
  )
}

export default TaskList