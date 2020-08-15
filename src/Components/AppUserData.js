import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const tag = "[AppUserData]";
class AppUserData extends React.Component{
    constructor(props){
        super(props);
    }   
    componentDidMount(){
        console.log(tag, "componentDidMount()");
    }
    
    render(){     
        return(
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#93f5b5'}}>
                    Display User Data
                </Typography>
            </Container>
        )
    }
}

export default AppUserData;