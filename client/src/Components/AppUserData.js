import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {post} from 'axios';

const tag = "[AppUserData]";
class AppUserData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            eagleCount : 0,
            mapleCount : 0,
            britCount : 0,
            kangCount : 0,
            barCount : 0,
            eaglePrice : 0,
            maplePrice : 0,
            britPrice : 0,
            kangPrice : 0,
            barPrice : 0
        }
    }   
    
    componentDidMount(){
        console.log(tag, "componentDidMount()");
        this.getData();
    }

    getData = () => {
        console.log(tag, "getData()");
        
        const url = '/api/data';
        const formData = new FormData();
        formData.append('email',this.props.userEmail);
        const config = { headers : {'content-type' : 'application/x-www-form-urlencoded'} }
        
        post(url,formData,config).then((response) => {
                this.setState({
                    eagleCount : response.data[0].eagle.count,
                    mapleCount : response.data[0].maple.count,
                    britCount : response.data[0].brit.count,
                    kangCount : response.data[0].kang.count,
                    barCount : response.data[0].bar.count,
                    eaglePrice : response.data[0].eagle.price,
                    maplePrice : response.data[0].maple.price,
                    britPrice : response.data[0].brit.price,
                    kangPrice : response.data[0].kang.price,
                    barPrice : response.data[0].bar.price
                })
            console.log("getData 성공", response.data[0]);
        }).catch((error) => {
                console.log(error)
        })
    }

    render(){     
        return(
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#93f5b5'}}>
                    Display {this.props.userEmail} Data
                    <br/>
                    EAGLE : {this.state.eagleCount} 개, {this.state.eaglePrice} 원, 평당 : {this.state.eaglePrice/this.state.eagleCount} 원
                    <br/>
                    MAPLE : {this.state.mapleCount} 개, {this.state.maplePrice} 원, 평당 : {this.state.maplePrice/this.state.mapleCount} 원
                    <br/>
                    BRIT : {this.state.britCount} 개, {this.state.britPrice} 원, 평당 : {this.state.britPrice/this.state.britCount} 원
                    <br/>
                    KANG : {this.state.kangCount} 개, {this.state.kangPrice} 원, 평당 : {this.state.kangPrice/this.state.kangCount} 원
                    <br/>
                    COIN TOTAL : {this.state.eagleCount + this.state.mapleCount + this.state.britCount + this.state.kangCount} 개, 
                    {this.state.eaglePrice + this.state.maplePrice + this.state.britPrice + this.state.kangPrice} 원, 
                    평단 : {(this.state.eaglePrice + this.state.maplePrice + this.state.britPrice + this.state.kangPrice) / (this.state.eagleCount + this.state.mapleCount + this.state.britCount + this.state.kangCount)} 원, 
                    <br/>
                    BAR : {this.state.barCount} 개, {this.state.barPrice} 원, 평당 : {this.state.barPrice/this.state.barCount} 원
                    
                </Typography>
            </Container>
        )
    }
}

export default AppUserData;