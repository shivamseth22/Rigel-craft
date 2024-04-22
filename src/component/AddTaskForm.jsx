import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/taskSlice';
import { Button, Grid, TextField } from '@mui/material';

const AddTaskForm = () => {

    const [task, setTask] = useState('');
    const tasks = useSelector((state) => state.task.tasks);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (task.trim() !== '') {
            dispatch(addTodo({ id: Date.now(), text: task, completed: false }));
            setTask('');
        }
    };
    return (

        <Grid container spacing={2} alignItems="center">
            <Grid item xs={9}>
                <TextField
                    fullWidth
                    label="Add Task"
                    variant="outlined"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleAddTask();
                        }
                    }}
                />
            </Grid>
            <Grid item xs={3}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handleAddTask}
                >
                    Add
                </Button>
            </Grid>
        </Grid>

    )
}

export default AddTaskForm