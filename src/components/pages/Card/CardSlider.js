import React from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";

const CardSlider = ({iconsrc,name,title,desc}) => {
    return (
        <Card >
            <CardActionArea >
                <CardMedia>
                    <img src={iconsrc} alt={name}  />
                </CardMedia>
                <CardContent >
                    <Typography variant={"h6"}>{title}</Typography>
                    <Typography variant={"caption"} >"{desc}"</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardSlider;