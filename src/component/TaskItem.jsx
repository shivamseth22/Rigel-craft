import React from 'react'
import { deleteTodo, toggleComplete } from '../Redux/taskSlice';
import { useDispatch } from 'react-redux';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';

const TaskItem = ({task}) => {
    const dispatch = useDispatch();
    const handleDeleteTask = (taskId) => {
        dispatch(deleteTodo({ id: taskId }));
      };

      const handleToggleComplete = (taskId) => {
        dispatch(toggleComplete({ id: taskId }));
      };
  return (
    <Box key={task.id} display="flex" alignItems="center">
            <Checkbox
              checked={task.completed}
              onChange={() => handleToggleComplete(task.id)}
            />
            <Typography
              variant="body1"
              component="div"
              sx={{
                textDecoration: task.completed ? 'line-through' : 'none',
                flexGrow: 1,
              }}
            >
              {task.text}
            </Typography>
            <IconButton onClick={() => handleDeleteTask(task.id)}>
              <Delete />
            </IconButton>
          </Box>
  )
}

export default TaskItem