import React from 'react';
import Grid from "@mui/material/Grid";
import {Outlet} from "react-router-dom";
import styles from './Default.module.css';

const DefaultLayout = () => {
    return (
        <Grid
            container
            className={styles.row}
            style={{backgroundImage: `url(${require('../assets/images/Background.png')})`}}
            columns={14}
        >
            <Grid item xs={3}/>
            <Grid item lg={8} sx={{mt: 2}}>
                <Outlet/>
            </Grid>
            <Grid item xs={3}/>
        </Grid>
    );
};

export default DefaultLayout;