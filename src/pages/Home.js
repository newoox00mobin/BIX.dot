import React, {useEffect, useState} from 'react';
import Grid from "@mui/material/Grid";
import {Typography} from "@mui/material";
import {NavLink, useNavigate} from "react-router-dom";
import SplitButton from "../components/Split button";
import Button from "@mui/material/Button";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import Slickslider from "../components/pages/slider/slickslider";
import styles from './Home.module.css';
import axios from "axios";
import Cardcusttom from "../components/pages/Card/Card";
import CardButton from "../components/pages/Card/CardButton";




const navMenus = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Abut us",
        link:"/abut"
    },
    {
        name:"Services",
        link:"/services"
    },
    {
        name:"Contact us",
        link:"/contact"
    },
    {
        name:"Community",
        link:"/community"
    },
    {
        name:"Sing in",
        link:"/sing_in"
    },

]
const navFooter=[
    {
        name:"Conlact Infcomalion",
        link:"/ConlactInfcomalion"
    },
    {
        name:"Quick links",
        link:"/Quicklinks"
    },
    {
        name:"support",
        link:"/support"
    }
]



const HomePage = () => {
    const [posts,setData]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                setData(res.data.slice(0,3))
            })
    })
    const [comments,setcomments]= useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(res=>{
                setcomments(res.data.slice(0,4))
            })
    })
    const navigate =useNavigate();



    return (
       <>
           <div className={styles.allWrapper}>
               <div className={styles.Menuwrapper}>
                   <Typography variant={"h3"} component={"h1"} color="white" or="wi">BIX.dot</Typography>
                   <nav className={styles.navWrapper}>
                       {
                           navMenus.map(nav => (
                               <NavLink to={nav.link} style={({isActive})=> ({color: isActive ? "blue"  : "white"})}>
                                   {nav.name}
                               </NavLink>
                           ))
                       }
                   </nav>
                   <SplitButton/>
               </div>
               <Grid container >
                   <Grid item xs={12} md={9} className={styles.textGrid} sx={{mt:20}} >
                       <Typography variant="h2" color="white" fontWeight="bold"  >Think Creative and make </Typography>
                       <Typography variant="h4" color="Blue" >innovative Desige</Typography>
                       <Grid item xs={5} sx={{mt:3}} >
                           <Typography variant="caption" color="white"  >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Typography>
                       </Grid>
                       <Button variant="contained" sx={{mt:5,borderRadius:0}}  >Learn more</Button>
                   </Grid>
               </Grid>
           </div>
           <div className={styles.allWrapper}>
               <div className={styles.textmid}>
                   <Typography variant="subtitle2">"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."</Typography>
               </div>
           </div>
           <div className={styles.allWrapper}>
               <div className={styles.cardwrapprt}>
                   {
                       posts.map((post,index) => (
                           <div key={post.id} >
                               <Cardcusttom
                                   title={post.title}
                                   desc={post.body}
                                   name={`iconcard${index + 1}`}
                                   iconsrc={require(`../assets/images/icon-card${index+1}.png`)}
                               />
                           </div>
                       ))
                   }
               </div>
           </div>
           <div className={styles.allWrapper}>
               <div className={styles.textcard}>
                   <Typography variant={"h4"}>Our Latest Project</Typography>
                   <Typography variant={"caption"}>"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."</Typography>
               </div>
               <div>
                   <Grid container spacing={3} >
                       {/*{*/}
                       {/*    comments.map((comment,index) => (*/}
                       {/*        <div key={comment.id} className={styles.cardwrapprt}>*/}
                       {/*            <Grid item xs={12} sm={6}>*/}
                       {/*                <CardButton*/}
                       {/*                    title={comment.email}*/}
                       {/*                    desc={comment.body}*/}
                       {/*                    name={`iconcardmid-${index +1}`}*/}
                       {/*                    iconsrc={require(`../assets/images/imgComplexButton${index+1}.png`)}*/}
                       {/*                />*/}
                       {/*            </Grid>*/}
                       {/*        </div>*/}
                       {/*    ))*/}
                       {/*}*/}
                       <CardButton
                       title="..."
                       desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                       button="See more"
                       name="iconcard-1"
                       iconsrc={require("../assets/images/imgComplexButton1.png")}
                       />
                       <CardButton
                           title="..."
                           desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                           button="See more"
                           name="iconcard-2"
                           iconsrc={require("../assets/images/imgComplexButton2.png")}
                       />
                       <CardButton
                           title="..."
                           desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                           button="See more"
                           name="iconcard-3"
                           iconsrc={require("../assets/images/imgComplexButton3.png")}
                       />
                       <CardButton
                           title={comments.name}
                           desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                           button="See more"
                           name="iconcard-4"
                           iconsrc={require("../assets/images/imgComplexButton4.png")}
                       />
                   </Grid>
               </div>
           </div>
           <div className={styles.allWrapper}>
                   <div className={styles.linkdvideo}
                        onClick={() => navigate("/video")}>
               </div>
                   <div className={styles.textmid}>
                       <Typography variant={"h4"} color={"blue"}>Watch our Video</Typography>
                       <Typography  variant={"caption"}  color={"white"} >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing</Typography>
                   </div>
           </div>
           <div className={styles.allWrapper}>
               <div>
                   <div className={styles.textvar}>
                       <Typography variant={"h4"} fontWeight="bold">Meet our Happy Clientsay</Typography>
                       <Typography>"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing"</Typography>

                   </div>
                   <Slickslider/>
               </div>
               <div className={styles.textfooter}>
               <Typography variant={"h2"} fontWeight={"bold"}>Bix.dot</Typography>
                   <nav className={styles.navFooter}>
                       {
                           navFooter.map(nav => (
                               <NavLink to={nav.link} style={({isActive})=> ({color: isActive ? "blue"  : "white"})}>
                                   {nav.name}
                               </NavLink>
                           ))
                       }
                   </nav>
           </div>
               <div className={styles.iconstyle} >
                   <TwitterIcon/>
                   <TelegramIcon/>
                   <WhatsAppIcon/>
                   <InstagramIcon/>
               </div>

               </div>
       </>
    );
};

export default HomePage;
