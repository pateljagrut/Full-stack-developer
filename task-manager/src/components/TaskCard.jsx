import React from "react";
import { Card, CardContent, Grid, Avatar, Typography, Chip } from "@mui/material";
const TaskCard = () => {

    return (

        <div>
            <Card  display={"block"} sx={{ maxWidth: 345  }}>
                <CardContent>
                    <Grid container display={"block"} justifyContent={"space-between"}>
                        <Grid>
                            <Avatar src="https://mui.com/static/images/avatar/1.jpg"></Avatar>
                        </Grid>
                        <Grid>
                            <Typography variant="h6" color={"blue"}>
                                Task 1 : User Interface
                            </Typography>
                            <Grid container >
                                <Grid>
                                    <Chip label="P1" sx={{ bgcolor: "green", color: "white", padding: "10px" }}></Chip>
                                    <Chip label="P2" sx={{ bgcolor: "red", color: "white", padding: "10px" }}></Chip>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div >
    )
}
export default TaskCard;