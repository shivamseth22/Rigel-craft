import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { Box } from '@mui/material';

const TaskList = () => {

  const tasks = useSelector((state) => state.task.tasks);

  return (
    <Box mt={2}>
        {tasks.map((task ,index) => (
            <>
            {console.log("task" , task.index)}
                <TaskItem task={task} key={index}/>
            </>

        ))}
      </Box>
  )
}

export default TaskList