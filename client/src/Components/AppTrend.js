import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {get} from 'axios';

const tag = "[AppTrend]";
class AppTrend extends React.Component{
    constructor(props){
        super(props);
    }   
    componentDidMount(){
        console.log(tag, "componentDidMount()");
        this.getTrend();
    }
    
    getTrend = () => {
        console.log(tag, "getTrend()");
        const url = '/api/trend/';
        
        get(url)
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((error) => {
            return error;
        }) 
    }

    render(){     
        return(
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#f08b95'}}>
                Real Time Trend
                { this.getTrend()}
                </Typography>
            </Container>
        )
    }
}

export default AppTrend;