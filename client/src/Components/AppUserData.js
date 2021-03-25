import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import NativeSelect from '@material-ui/core/NativeSelect';



import {post, get} from 'axios';
import { Button } from '@material-ui/core';
import { promises } from 'fs';

const tag = "[AppUserData]";

const styles = {
    root : {
        align:'center',
    },
    paper : {
        width:"90%",
        paddingLeft : "5%",
        paddingRight : "5%",
        paddingTop : "2.5%",
        paddingBottom : "2.5%",
        //display : "flex"
    },
    avatar: {
        backgroundColor: "#ebe4e4",
        width : "20px",
        height : "20px",
    },
    media: {
        // height: "100%",
        paddingTop: '10%', // 16:9
        paddingLeft: '10%'
    },
    image: {
        width: 24,
        height: 24,
    },
    gridItem:{
        display:'flex',
    },
    grid: {
        borderRadius : 5,
        borderStyle: 'solid',
        borderWidth : '0.5px',
        borderColor : '#aaa',
        marginTop : "2.5%",
        marginBottom : "2.5%",
    },
    Typography : {
        marginLeft:'5px'
    },
};

class AppUserData extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            changeToggle : false,
            changeToggleBuy : false,
            changeToggleSell : false,
            buyItem : "",
            buyCount : 0,
            buyCost : 0,
            sellItem : "",
            sellCount : 0,
            sellCost : 0,
            nowChanging : "",
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
            }],
        }
    }   
    
    componentDidMount(){
        console.log(tag, "componentDidMount()");
        // this.getImagePromise(['Silver-Eagle','Silver-Britannia','Silver-Maple','Silver-Kangaroo'])        
        this.getImagePromise('Silver-Eagle')        
        .then((res) => this.getImagePromise('Silver-Britannia')
        .then((res) => this.getImagePromise('Silver-Maple')
        .then((res) => this.getImagePromise('Silver-Kangaroo')
        .then((res) => this.getData()))))
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

    getImagePromise = (data) => {
        return new Promise((response, reject) => {
            const url = 'http://localhost:3000/api/public/' + data; 
                get(url)
                .then((res) => {
                    console.log(tag, `getImage(${data})`, url);
                    if(data === 'Silver-Eagle') this.setState({SilverEagleURL : url})
                    else if(data === 'Silver-Britannia') this.setState({SilverBritanniaURL : url})
                    else if(data === 'Silver-Maple') this.setState({SilverMapleURL : url})
                    else if(data === 'Silver-Kangaroo') this.setState({SilverKangarooURL : url})
                    response("Sucess Getting Image Url");
                })
                .catch((error) => {
                    reject(error)
                })    
        })
    }
    handleChange = (e, type) => {
        //console.log(tag, "handleChange()", e.target.value);
        console.log("sellItem : ", this.state.sellItem," / sellCount : ", this.state.sellCount, " / sellCost : ", this.state.sellCost);
        console.log("buyItem : ", this.state.buyItem," / buyCount : ", this.state.buyCount, " / buyCost : ", this.state.buyCost);
        const value = e.target.value;
        const nextState = {};
        nextState[type] = value;
        this.setState(nextState);
    }

    handleChangeToggle = (e) => {
        console.log(tag, "handleChangeToggle()", e.target);
        this.setState({
            changeToggle : !this.state.changeToggle,
            changeToggleBuy : false,
            changeToggleSell : false,

        })
    }
    handleChangeToggleBuy = (e) => {
        this.setState({changeToggleBuy : !this.state.changeToggleBuy})
    }
    handleChangeToggleSell = (e) => {
        this.setState({changeToggleSell : !this.state.changeToggleSell})
    }
    handleClickChange = (e, type) => {
        if(type === 'buy'){
             
        }

    }

    render(){     
        const {classes} = this.props;
        var sumCount=0, sumPrice=0, sumRealPrice=0;

        return(
            <div class={classes.root}>
                <Paper class={classes.paper} elevation={3}>
                    {this.state.SilverData.map((v, index) => {
                        sumCount += v.count;
                        sumPrice += v.price;
                        sumRealPrice += 40000*v.count;
                        
                        if(v.count >= 0){
                            return(
                                <div>
                                    <Grid container spacing={2} className={classes.grid}>
                                        <Grid item className={classes.gridItem} xs={12}>
                                            <Avatar aria-label="recipe" className={classes.avatar} src={v.url}/>
                                            <Typography variant="body1" className={classes.Typography}>{v.title}</Typography>
                                        </Grid>
                                        <Grid item xs={6} >
                                            <Typography variant="body2" className={classes.Typography}>
                                                현재가 : 40,000 
                                            </Typography>
                                            <Typography variant="body2" className={classes.Typography}>
                                                잔고수량 : {v.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                                            </Typography>
                                            <Typography variant="body2" className={classes.Typography}>
                                                평가순익 : {(40000 * v.count - v.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="body2" className={classes.Typography}>
                                                매입가 : {Math.round(v.price / v.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </Typography>
                                            <Typography variant="body2" className={classes.Typography}>
                                                평가금액 : {(40000 * v.count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                            </Typography>
                                            <Typography variant="body2" className={classes.Typography}>
                                                수익률 : {(Math.round(((40000 * v.count - v.price)*10000)/v.price)/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </div>
                            )
                        }                        
                    })}
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid item className={classes.gridItem} xs={12}>
                            <Typography variant="body1" className={classes.Typography}>TOTAL</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Typography variant="body2" className={classes.Typography}>
                                총 자산 : {sumRealPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>
                            <Typography variant="body2" className={classes.Typography}>
                                손 익 : {(sumRealPrice - sumPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.Typography}>
                                수익률 : {(Math.round((sumRealPrice - sumPrice)*10000/sumPrice)/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}%
                            </Typography>
                            <Typography variant="body2" className={classes.Typography}>
                                매입금액 : {sumPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                            </Typography>                                    
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} className={classes.grid}>
                        <Grid xs={4}/>
                        <Grid item className={classes.gridItem} xs={4}>
                            <Button color="default" onClick={this.handleChangeToggle}>
                                데이터 변경
                            </Button>
                        </Grid>
                        <Grid xs={4}/>
                    </Grid>

                    <Dialog open={this.state.changeToggle} onClose={this.handleChangeToggle}>
                        <DialogTitle>구매리스트 변경</DialogTitle>
                            {(!this.state.changeToggleBuy&&!this.state.changeToggleSell) && 
                                <DialogContent>
                                    <Button color="primary" onClick={this.handleChangeToggleBuy}>
                                        매수
                                    </Button>
                                    <Button color="secondary" onClick={this.handleChangeToggleSell}>
                                        매도
                                    </Button>
                                </DialogContent>
                            }
                            {(this.state.changeToggleBuy&&!this.state.changeToggleSell) && 
                                <DialogContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            변경자산
                                        </Grid>
                                        <Grid item xs={8}>
                                            <NativeSelect onChange={e => this.handleChange(e,'buyItem')}>
                                                <option aria-label="None"/>
                                                <option value={"Eagle"}> SilverCoin Eagle</option>
                                                <option value={"Britannia"}> SilverCoin Britannia </option>
                                                <option value={"Maple"}> SilverCoin Maple </option>
                                                <option value={"Kangaroo"}> SilverCoin Kangaroo </option>
                                            </NativeSelect>
                                        </Grid>
                                        <Grid item xs={4}>
                                            구매수량
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField class={classes.DialogTextFiled}
                                                autoFocus
                                                margin="dense"
                                                id="count"
                                                type="number"
                                                onChange={e => this.handleChange(e,'buyCount')}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            구매단가
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField class={classes.DialogTextFiled}
                                                autoFocus
                                                margin="dense"
                                                id="cost"
                                                type="number"
                                                onChange={e => this.handleChange(e,'buyCost')}
                                            />
                                        </Grid>
                                        <Grid item xs={4}/>
                                        <Grid item xs={4}>
                                            <Button color="primary" onClick={e => this.handleClickChange('buy')}>
                                                변경
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button color="secondary" onClick={this.handleChangeToggle}>
                                                취소
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                            }
                            {(!this.state.changeToggleBuy&&this.state.changeToggleSell) && 
                                <DialogContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={4}>
                                            변경자산
                                        </Grid>
                                        <Grid item xs={8}>
                                            <NativeSelect onChange={e => this.handleChange(e,'sellItem')}>
                                                <option aria-label="None"/>
                                                <option value={"Eagle"}> SilverCoin Eagle</option>
                                                <option value={"Britannia"}> SilverCoin Britannia </option>
                                                <option value={"Maple"}> SilverCoin Maple </option>
                                                <option value={"Kangaroo"}> SilverCoin Kangaroo </option>
                                            </NativeSelect>
                                        </Grid>
                                        <Grid item xs={4}>
                                            판매수량
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField class={classes.DialogTextFiled}
                                                autoFocus
                                                margin="dense"
                                                id="count"
                                                type="number"
                                                onChange={e => this.handleChange(e,'sellCount')}
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            판매단가
                                        </Grid>
                                        <Grid item xs={8}>
                                            <TextField class={classes.DialogTextFiled}
                                                autoFocus
                                                margin="dense"
                                                id="cost"
                                                type="number"
                                                onChange={e => this.handleChange(e,'sellCost')}
                                            />
                                        </Grid>
                                        <Grid item xs={4}/>
                                        <Grid item xs={4}>
                                            <Button color="primary" onClick={e => this.handleClickChange(e,'sell')}>
                                                변경
                                            </Button>
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Button color="secondary" onClick={this.handleChangeToggle}>
                                                취소
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                            }             
                     </Dialog>
                </Paper>
            </div>
            
        )
    }
}

export default withStyles(styles)(AppUserData);