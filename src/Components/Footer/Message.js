import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';

import './index.css';

import message from './Image/onlineMessage.png';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: "100%",
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    dialog:{
        overflowX: "hidden",
        minWidth: "300px",
        opacity: 0.95
    },
    dialogContent:{
        maxHeight: "130px",
    },
    helpTextStyle:{
        display:"flex",
        alignItems:"center",
        margin: 0,
        fontSize: "0.75rem",
        minHeight:"1em",
        textAlign:"left",
        fontFamily: "Roboto, Helvetica, Arial",
        fontWeight: 400,
        lineHeight:"1em",
        letterSpacing: "0.03333em",
        color: "rgba(0, 0, 0, 0.54)",
    },
    message:{
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius:"4px",
    },
    messageTitle:{
        fontSize:"16px",
        color: "#666666",
    },
    iconStyle:{
        color: "#cccccc",
    },
    img:{
        width: "30px",
        height: "30px"
    }
}));

export default function OnLineMessage(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [scroll] = React.useState("paper");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={props.contentStyle}>
            <Button color="inherit" aria-label="open drawer" onClick={handleClickOpen}>
                <div className={props.contentChildStyle}>
                    <img src={message} className={classes.img} alt=""/>
                    <span>咨询</span>
                </div>
            </Button>
            <Dialog
                classes={{paper:classes.dialog}}
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
                scroll={scroll}
            >
                <DialogTitle id="alert-dialog-slide-title">{"请您留言"}</DialogTitle>
                <DialogContent dividers className={classes.dialogContent}>
                    <form  noValidate autoComplete="off">
                        <div>
                            <span className="title-span">中国+86 <i className="icon-chevron-down"></i></span>
                            <div className="login-user">
                                <AccountCircle />
                                <input type="text" placeholder="输入用户名"/>
                            </div>
                        </div>

                        <div>
                        <span className="title-span">验证码登录</span>
                        <div className="login-phone">
                            <PhoneIcon />
                            <input  type="text" placeholder="电话"/>
                        </div>
                    </div>
                        {/*<button type="submit" disabled={this.state.isActive? false: true}>登录</button>*/}
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button fullWidth onClick={handleClose} size="large" variant="contained" color="primary">
                        发送
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
