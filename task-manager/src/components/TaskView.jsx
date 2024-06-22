import React from 'react'
import TaskCard from '../components/TaskCard'
import {Grid, Chip } from '@mui/material'

const TaskView = () => {
    return (
        <>
            <Grid display={"flex"} padding={2} overflow={"auto"} >
                {
                    ["To Do", "In Progress", "Completed"].map((item) =>
                        <Grid display={"block"} margin={2}>
                            <Grid>
                                <Chip label={item} sx={{ backgroundColor: "#9cf09d", fontWeight: "bold", padding: 1 }} />
                            </Grid>
                            {
                                [1, 2].map(() => <TaskCard />)
                            }</Grid>)

                }

            </Grid>
        </>
    )
}

export default TaskView