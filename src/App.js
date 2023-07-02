import React from 'react';
import HomePage from "./pages/Home";
import {createTheme} from "@mui/material";
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Defaultlayout from "./layout/Default";
import './app.css'



const App = () => {

    return (
        <ThemeProvider
            theme={createTheme({
                palette:{
                    // primary:{
                    //     mine:"#ffffff"
                    // },
                    // secondary:{
                    //     mine:"#006bff"
                    // }
                },
                components:{
                    MuiButton:{
                        defaultProps:{
                            variant:"contained"
                        },
                        styleOverrides:{
                            root:{
                                borderRadius:"10rem"
                            }
                        }
                    }
                }
        })}>
            <Router>
                <Routes>
                    <Route path="/" element={<Defaultlayout/>}>
                        <Route path="/" element={<HomePage/>}/>
                    </Route>
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
