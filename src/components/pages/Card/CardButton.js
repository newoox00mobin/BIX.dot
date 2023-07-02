import React from 'react';
import Grid from "@mui/material/Grid";
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import styles from "../../../pages/Home.module.css";
import Button from "@mui/material/Button";
import {useNavigate} from "react-router-dom";

const CardButton =
    ({iconsrc,name,title,desc,button}) => {
        const navigate =useNavigate();
    return (
        <Grid item xs={12} sm={6}>
            <Card className={styles.midcard}>
                <CardActionArea >
                    <CardMedia>
                        <img src={iconsrc} alt={name}  />
                    </CardMedia>
                    <CardContent >
                        <Typography variant={"h6"}>{title}</Typography>
                        <Typography variant={"caption"}>"{desc}"</Typography>
                    </CardContent>
                    <Button
                    onClick={() => navigate("/seemore")}
                    >{button}
                    </Button>
                </CardActionArea>

            </Card>
        </Grid>
    );
};

export default CardButton;