import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { fade, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const tag = "[AppBar]";

const styles = {
    root : {flexGrow: 1,},
    bar : {background: "#f5f52f", color:"#000000"},
    menuTitle: {marginRight: 'auto',},
    DialogTextFiled: {background: "#F7F7F7", height: 32},
    DialogButton: {background: "#f5f52f", border: 0, borderRadius: 20, height: 32, padding: '0 20px', margin: "dense"}
};

class AppTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginToggle : false,
            joinToggle : false,
            isLogined : false
        }
    }
    
    componentDidMount() {
        console.log(tag, "componentDidMount()");
    }

    handleLoginToggle = () => {
        console.log(tag,"handleLoginToggle()")
        this.setState({
            loginToggle : !this.state.loginToggle
        })
    }

    handleJoinToggle = () => {
        console.log(tag,"handleJoinToggle()")
        this.setState({
            joinToggle : !this.state.joinToggle
        })
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
                        <Typography variant="h6" className={classes.menuTitle} noWarp>
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
                <Dialog open={this.state.joinToggle} onClose={this.handleJoinToggle}>
                    <DialogTitle>처음이신가요?</DialogTitle>
                    <DialogContent>
                        이메일
                        <TextField class={classes.DialogTextFiled}
                            autoFocus
                            margin="dense"
                            id="Email Address"
                            type="email"
                        />
                        비밀번호
                        <TextField class={classes.DialogTextFiled}
                            margin="dense"
                            id="password"
                            type="password"
                        />
                        비밀번호 확인
                        <TextField class={classes.DialogTextFiled}
                            margin="dense"
                            id="password"
                            type="password"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button class={classes.DialogButton} color="primary">회원가입하기</Button>
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
                        />
                        비밀번호
                        <TextField class={classes.DialogTextFiled}
                            margin="dense"
                            id="password"
                            type="password"

                        />
                    </DialogContent>
                    <DialogActions>
                        <Button class={classes.DialogButton} color="primary">로그인하기</Button>
                        <Button class={classes.DialogButton} color="primary" onClick={this.handleLoginToggle}>취소하기</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}

export default withStyles(styles)(AppTab);