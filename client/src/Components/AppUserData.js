import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {post, get} from 'axios';
import { Button } from '@material-ui/core';

const tag = "[AppUserData]";

const styles = {
    root : {
        align:'center',
    },
    paper : {
        width:"70%",
        paddingLeft : "15%",
        paddingTop : "5%",
        //display : "flex"
    },
    card : {
        width : "100%",
        height : "100%",
        display : "flex"
    },
    avatar: {
        backgroundColor: "#ebe4e4",
    },
    media: {
        // height: "100%",
        paddingTop: '10%', // 16:9
        paddingLeft: '10%'
    },
};

class AppUserData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            SilverEagleURL : "",
            SilverMapleURL : "",
            SilverBritanniaURL : "",
            SilverKangarooURL : "",
            SilverData : [{
                title : "",
                price : 0,
                count : 0,
                cols : 1,
                url : ""
            }]
        }
    }   
    
    componentDidMount(){
        console.log(tag, "componentDidMount()");
        this.getImage('Silver-Eagle');
        this.getImage('Silver-Britannia');
        this.getImage('Silver-Maple');
        this.getImage('Silver-Kangaroo');
        this.getData();
        this.setState({
            SilverData : this.state.SilverData.slice(1, this.state.SilverData.length)
        })
    }

    getData = () => {
        console.log(tag, "getData()");
        
        const url = '/api/data';
        const formData = new FormData();
        formData.append('email',this.props.userEmail);
        const config = { headers : {'content-type' : 'application/x-www-form-urlencoded'} }
        
        post(url,formData,config)
        .then((response) => {
            console.log(response.data[0]);
            this.setState({
                SilverData : this.state.SilverData.concat({
                    title:"Silver Eagle", 
                    count : response.data[0].eagle.count, 
                    price : response.data[0].eagle.price, 
                    cols : 1,
                    url : this.state.SilverEagleURL
                },{
                    title:"Silver Britannia", 
                    count : response.data[0].brit.count, 
                    price : response.data[0].brit.price, 
                    cols : 1,
                    url : this.state.SilverBritanniaURL
                },{
                    title:"Silver Maple", 
                    count : response.data[0].maple.count, 
                    price : response.data[0].maple.price, 
                    cols : 1,
                    url : this.state.SilverMapleURL
                },{
                    title:"Silver Kangaroo", 
                    count : response.data[0].kang.count, 
                    price : response.data[0].kang.price, 
                    cols : 1,
                    url : this.state.SilverKangarooURL
                }),
            })    
        
            console.log(this.state.SilverData);

        })
        .catch((error) => {
                console.log(error)
        })
    }

    getImage = (data) => {
        const url = 'http://localhost:3000/api/public/' + data;
        
        get(url)
        .then((res) => {
            console.log(tag, `getImage(${data})`, url);
            if(data === 'Silver-Eagle') this.setState({SilverEagleURL : url})
            else if(data === 'Silver-Britannia') this.setState({SilverBritanniaURL : url})
            else if(data === 'Silver-Maple') this.setState({SilverMapleURL : url})
            else if(data === 'Silver-Kangaroo') this.setState({SilverKangarooURL : url})
        })
        .catch((error) => {
            return error;
        })        
    }

    render(){     
        const {classes} = this.props;

        return(
            <div class={classes.root}>
                <Paper class={classes.paper} elevation={3}>
                    {this.state.SilverData.map(v => {
                        if(v.count >= 0){
                            return(
                                <Card class={classes.card}>
                                    <CardHeader
                                        avatar={<Avatar aria-label="recipe" className={classes.avatar} src={v.url}/>}
                                        title={v.title}
                                    />
                                    <CardContent>
                                        <Typography variant="body1" component="p">
                                            현재단가 : ?  구매단가 : {v.price / v.count}  구매수량 : {v.count} 구매총가 : {v.price} 수익률 : {}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button variant="contained" color="#f5f52f">수정</Button>
                                    </CardActions>
                                </Card>
                            )
                        }
                    })}
                </Paper>
            </div>
            
        )
    }
}

export default withStyles(styles)(AppUserData);