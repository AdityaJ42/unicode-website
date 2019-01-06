import React, { Component } from 'react';
import unicode from '../images/UNICODE_LOGO.PNG';
import { AppBar, Toolbar , createMuiTheme, MuiThemeProvider, Typography, Button } from '@material-ui/core';

const theme=createMuiTheme(
    {
        overrides:{
            MuiAppBar: {
                root: {
                  height: 114,
                  boxShadow: "#FFFFFF 0px 0px 0px"
                }
              }
        },
        palette:{
            primary:{
                main: "#FFFFFF"
            },
            secondary:{
                main: "#C1D37F"
            }
        }
    }
);



class Head extends Component {
    state = { 
        color: "secondary"
     }
    styles = {
        root: {
          flexGrow: 1,
        },
        logo:{
            position: "absolute",
            top: 34,
            left: "9.32%"
        },
        grow: {
          flexGrow: 1,
        }
      };
      handleBtn=()=>{
          
      }
        render() { 
            console.log(theme);
        return ( 
            <div>
                <MuiThemeProvider theme={theme}>
                <AppBar 
                position="fixed"
                color="primary" >
                    <Toolbar >
                        <img src={unicode} style={this.styles.logo} width="237px" />
                    </Toolbar>
                </AppBar>
                </MuiThemeProvider>
            </div>
         );
    }
}
 
export default Head;