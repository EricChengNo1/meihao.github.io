import React, {useState, createRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from '../../Components/Common/MySnackbarContentWrapper';
import {post} from '../../Fetch/post';

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
        maxHeight: "180px",
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
    contentItemStyle:{
        margin: 8,
        flex: 2,
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
    const nameRef = createRef();
    const phoneRef = createRef();
    const emailRef = createRef();
    const addressRef = createRef();
    const messageRef = createRef();
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [scroll] = React.useState("paper");


    const [openSnackBar, setOpenSnackBar] = React.useState(false);

    const handleSnackBarClick = () => {
        setOpenSnackBar(true);
    };
    const handleSnackBarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackBar(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const submitMessage = () => {
        let url= "/meihaoWeb/meihao/api/AddOnlineConsulting";
        let paramsObj = {
            Name: nameRef.current.value,
            Phone: phoneRef.current.value,
            Email: emailRef.current.value,
            Address: addressRef.current.value,
            Message: messageRef.current.value
        };
        let result = post(url, paramsObj);
        result.then((res)=>{
            if(res.status===200){
                return res.json();
            }
            else{
                return Promise.reject(res.join());
            }
        }).then((data) => {
            console.log(data);
            setOpenSnackBar(true);
            setTimeout(()=>{
                setOpen(false);
            },2000);
        });
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
                        <TextField
                            className={classes.margin}
                            id="input-with-icon-textfield"
                            label="姓名"
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            inputRef={nameRef}
                        />

                        <TextField label="电话（必填）"
                                   required
                                   fullWidth
                                   id="input-with-icon-grid"
                                   className={classes.contentItemStyle}
                                   InputProps={{
                                       startAdornment: (
                                           <InputAdornment position="start">
                                               <PhoneIcon />
                                           </InputAdornment>
                                       ),
                                   }}
                                   inputRef={phoneRef}

                        />
                        <TextField label="邮箱"
                                   fullWidth
                                   id="input-with-icon-grid"
                                   className={classes.contentItemStyle}
                                   InputProps={{
                                       startAdornment: (
                                           <InputAdornment position="start">
                                               <EmailIcon />
                                           </InputAdornment>
                                       ),
                                   }}
                                   inputRef={emailRef}
                        />

                        <TextField label="地址"
                                   fullWidth id="input-with-icon-grid"
                                   className={classes.contentItemStyle}
                                   InputProps={{
                                       startAdornment: (
                                           <InputAdornment position="start">
                                               <LocationOnIcon />
                                           </InputAdornment>
                                       ),
                                   }}
                                   inputRef={addressRef}
                        />
                        {/*<div className={classes.margin}>*/}
                            {/*<Grid container spacing={1} alignItems="flex-end">*/}
                                {/*<Grid item xs={2} sm={2}>*/}
                                    {/*<AccountCircle className={classes.iconStyle}/>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={10} sm={10}>*/}
                                    {/*<TextField label="姓名"  id="input-with-icon-grid" fullWidth placeholder="姓名" />*/}
                                {/*</Grid>*/}
                            {/*</Grid>*/}
                        {/*</div>*/}
                        {/*<div className={classes.margin}>*/}
                            {/*<Grid container spacing={1} alignItems="flex-end">*/}
                                {/*<Grid item xs={2} sm={2}>*/}
                                    {/*<PhoneIcon className={classes.iconStyle}/>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={10} sm={10}>*/}
                                    {/*<TextField required id="input-with-icon-grid" fullWidth placeholder="电话（必填）" />*/}
                                {/*</Grid>*/}
                            {/*</Grid>*/}
                        {/*</div>*/}
                        {/*<div className={classes.margin}>*/}
                            {/*<Grid container spacing={1} alignItems="flex-end">*/}
                                {/*<Grid item  xs={2} sm={2}>*/}
                                    {/*<EmailIcon className={classes.iconStyle}/>*/}
                                {/*</Grid>*/}
                                {/*<Grid item  xs={10} sm={10}>*/}
                                    {/*<TextField id="input-with-icon-grid" fullWidth placeholder="邮箱" />*/}
                                {/*</Grid>*/}
                            {/*</Grid>*/}
                        {/*</div>*/}
                        {/*<div className={classes.margin}>*/}
                            {/*<Grid container spacing={1} alignItems="flex-end">*/}
                                {/*<Grid item xs={2} sm={2}>*/}
                                    {/*<LocationOnIcon className={classes.iconStyle}/>*/}
                                {/*</Grid>*/}
                                {/*<Grid item  xs={10} sm={10}>*/}
                                    {/*<TextField id="input-with-icon-grid" fullWidth placeholder="地址" />*/}
                                {/*</Grid>*/}
                            {/*</Grid>*/}
                        {/*</div>*/}

                        <TextField
                            id="standard-multiline-static"
                            label="留言内容（必填）"
                            multiline
                            required
                            rows="3"
                            fullWidth
                            autoFocus={true}
                            className={classes.contentItemStyle}
                            // defaultValue="Default Value"
                            placeholder="请在此输入留言内容，我们会尽快与您联系。"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputRef={messageRef}
                        />
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button fullWidth onClick={submitMessage} size="large" variant="contained" color="primary">
                        发送
                    </Button>
                </DialogActions>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={openSnackBar}
                    autoHideDuration={500}
                    onClose={handleSnackBarClick}
                >
                    <MySnackbarContentWrapper
                        onClose={handleSnackBarClose}
                        variant="success"
                        message="您的留言我们已经收到了!"
                    />
                </Snackbar>
            </Dialog>
        </div>
    );
}
