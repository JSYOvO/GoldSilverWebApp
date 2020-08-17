import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

import {post} from 'axios';

const tag = "[AppTab]";

const styles = {
    root : {flexGrow: 1,},
    bar : {background: "#f5f52f", color:"#000000"},
    menuTitle: {marginRight: 'auto',},
    dialogPaper: {
        minHeight: '45.5vh',
    },
    DialogTextFiled: {background: "#F7F7F7", height: 32},
    DialogButton: {background: "#f5f52f", border: 0, borderRadius: 20, height: 32, padding: '0 20px', margin: "dense"}
};
  
class AppTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginToggle : false,
            joinToggle : false,
            isLogined : false,
            joinEmail : "",
            joinPassword : "",
            joinPasswordRe : " ",
            loginEmail : "",
            loginPassword : "",
            joinInfoCorrect : true,
            loginInfoCorrect : true,
        }
    }
    
    componentDidMount() {
        console.log(tag, "componentDidMount()");
    }

    handleLoginToggle = () => {
        console.log(tag,"handleLoginToggle()")
        this.setState({
            loginToggle : !this.state.loginToggle,
            loginEmail : "",
            loginPassword : "",
        })
    }

    handleJoinToggle = () => {
        console.log(tag,"handleJoinToggle()")
        this.setState({
            joinToggle : !this.state.joinToggle,
            joinEmail : "",
            joinPassword : "",
            joinPasswordRe : " "
        })
    }

    handleChange = (e, type) => {
        console.log(tag, "handleChange()", e.target.value, type);
        const value = e.target.value;
        const nextState = {};
        nextState[type] = value;
        this.setState(nextState);
    }

    validate = (data, type) => {
        console.log(tag,"validate()", data, type);

        if(type === 'joinEmail' || type === 'loginEmail'){
            if(data.indexOf('@') < 0) return true;
            else return false;
        }
        else if(type === 'joinPassword'){
            var reg_pwd = /^.*(?=.{6,20})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
            if(!reg_pwd.test(data)) return true;
            else return false;
        }
        else if(type ==='joinPasswordRe'){
            if(this.state.joinPassword === this.state.joinPasswordRe) return false;
            else return true; 
        }
        else if(type === 'loginPassword'){
            if(this.state.loginPassword.length > 0) return false;
            else return true;
        }
    }

    handleJoin = () => {
        console.log(tag, "handleJoin");
        const url = '/api/join';
        const formData = new FormData();
        if(!this.validate(this.state.joinEmail,'joinEmail') 
        && !this.validate(this.state.joinPassword,'joinPassword') 
        && !this.validate(this.state.joinPasswordRe,'joinPasswordRe')){
            formData.append('email',this.state.joinEmail);
            formData.append('password',this.state.joinPassword);
            const config = { headers : {'content-type' : 'multipart/form-data'}}
            return post(url,formData,config);
        }
        else{
            this.setState({
                joinInfoCorrect : !this.state.joinInfoCorrect
            })
        }
    }

    handleLogin = () => {
        console.log(tag, "handleLogin");

        const url = '/api/join';
        const formData = new FormData();

        if(this.state.loginEmail.length > 0 && this.state.loginPassword.length > 0){
            formData.append('email',this.state.loginEmail);
            formData.append('password',this.state.loginPassword);
            const config = {
                // headers : {'content-type' : 'multipart/form-data'}
                headers : {'content-type' : 'application/x-www-form-urlencoded'}
            }
            return post(url,formData,config);
        }
        else{
            this.setState({
                loginInfoCorrect : !this.state.loginInfoCorrect
            })
        }
    }

    onCloseJoinFail = () => {
        this.setState({joinInfoCorrect : !this.state.joinInfoCorrect})
    }

    onCloseLoginFail = () => {
        this.setState({loginInfoCorrect : !this.state.loginInfoCorrect})
    }

    render() {
        const {classes} = this.props;

        return (
            <div className = {classes.root}> 
                <AppBar className = {classes.bar} position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.menuTitle}>
                            Gold&Silver Investing
                        </Typography>
                        <div>
                            <Button color="inherit" onClick={this.handleJoinToggle}>
                                Join
                            </Button>
                            <Button color="inherit" onClick={this.handleLoginToggle}>
                                Login
                            </Button>
                        </div>
                    </Toolbar>
                </AppBar>
                <Dialog classes={{ paper: classes.dialogPaper }} open={this.state.joinToggle} onClose={this.handleJoinToggle}>
                    <DialogTitle>처음이신가요?</DialogTitle>
                    <DialogContent>
                        이메일
                        <TextField class={classes.DialogTextFiled}
                            autoFocus
                            margin="dense"
                            id="Email Address"
                            type="email"
                            onChange={e => this.handleChange(e,'joinEmail')}
                            error = {this.validate(this.state.joinEmail, 'joinEmail')}
                        />
                        비밀번호
                        <TextField class={classes.DialogTextFiled}
                            margin="dense"
                            id="password"
                            type="password"
                            onChange={e => this.handleChange(e,'joinPassword')}
                            error = {this.validate(this.state.joinPassword, 'joinPassword')}
                        />
                        비밀번호 확인
                        <TextField class={classes.DialogTextFiled}
                            margin="dense"
                            id="passwordRe"
                            type="password"
                            onChange={e =>this.handleChange(e,'joinPasswordRe')}
                            error = {this.validate(this.state.joinPasswordRe, 'joinPasswordRe')}
                            helperText = "영문, 숫자 혼합하여 6~20자리 이내"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button class={classes.DialogButton} color="primary" onClick={this.handleJoin}>회원가입하기</Button>
                        <Button class={classes.DialogButton} color="primary" onClick={this.handleJoinToggle}>취소하기</Button>
                    </DialogActions>
                </Dialog>
                <Dialog open={this.state.loginToggle} onClose={this.handleLoginToggle}>
                <DialogTitle>로그인하세요</DialogTitle>
                    <DialogContent>
                        이메일
                        <TextField class={classes.DialogTextFiled}
                            autoFocus
                            margin="dense"
                            id="Email Address"
                            type="email"
                            onChange={e => this.handleChange(e,'loginEmail')}
                            error = {this.validate(this.state.loginEmail, 'loginEmail')}
                        />
                        비밀번호
                        <TextField class={classes.DialogTextFiled}
                            margin="dense"
                            id="password"
                            type="password"
                            onChange={e => this.handleChange(e,'loginPassword')}
                            error = {this.validate(this.state.loginPassword,'loginPassword')}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button class={classes.DialogButton} color="primary" onClick={this.handleLogin}>로그인하기</Button>
                        <Button class={classes.DialogButton} color="primary" onClick={this.handleLoginToggle}>취소하기</Button>
                    </DialogActions>

                </Dialog>
                <Snackbar 
                    open={!this.state.joinInfoCorrect} 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
                    autoHideDuration={1000}
                    onClose = {this.onCloseJoinFail}
                    message="회원가입 정보를 확인하세요"
                />
                <Snackbar 
                    open={!this.state.loginInfoCorrect} 
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center',}}
                    autoHideDuration={1000}
                    onClose = {this.onCloseLoginFail}
                    message="로그인 정보를 확인하세요"
                />
            </div>
        )
    }
}

export default withStyles(styles)(AppTab);