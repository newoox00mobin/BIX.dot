import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import styles from "../../../pages/Home.module.css";



const Cardcusttom = ({iconsrc,name,title,desc}) => {
    return (
        <Card className={styles.card}>
            <CardActionArea >
                <CardMedia>
                    <img src={iconsrc} alt={name} />
                </CardMedia>
                <CardContent>
                    <Typography variant={"h6"} >{title} </Typography>
                    <Typography variant={"caption"} >"{desc}" </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Cardcusttom;