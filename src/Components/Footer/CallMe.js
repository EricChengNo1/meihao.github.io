import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import PhoneInTalk from '@material-ui/icons/PhoneInTalk';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
    root: {
        width: 400,
    },
    dialog:{
        borderRadius: "10px !important",
        overflowY: "hidden",
    },
    dialogContent:{
        width:"260px",
        maxWidth:"600px",
        height: "100px"
    },
    dialogTitle:{
        position:"relative",
        display:'block',
        textAlign:"center",
        color: "#000000",
        fontWeight:"bold",
        height:"55px",
        lineHeight:'70px'
    },
    phone:{
        textDecorationLine: 'none'
    }
});

export default function CallMe(props) {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={props.contentStyle}>
            <Button  color="inherit" aria-label="open drawer" onClick={handleClickOpen}>
                <div className={props.contentChildStyle}>
                    <PhoneInTalk />
                    <span>电话</span>
                </div>
            </Button>
            <Dialog
                classes={{paper:classes.dialog}}
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                style={{root:"borderRadius"}}
            >
                <div className={classes.dialogContent}>
                    <div className={classes.dialogTitle}>
                        <span>13917899554</span>
                    </div>
                    <Divider />
                    <div style={{display:"flex", justifyContent:"space-evenly", alignItem:"center"}}>
                        <Button onClick={handleClose} color="primary">
                            取消
                        </Button>
                        <hr style={{border:"none", height:"50px", width:"1px",margin:0,flexShrink:0,
                        backgroundColor:"rgba(0,0,0,0.12)"}}/>
                        <Button onClick={handleClose} color="primary" autoFocus>
                            <a className={classes.phone} href="tel:+13917899554">呼叫</a>
                        </Button>
                    </div>
                </div>
                {/*<DialogTitle id="alert-dialog-title">{"    13917899554    "}</DialogTitle>*/}
                {/*<Divider/>*/}
                {/*<DialogActions>*/}
                    {/*<Button onClick={handleClose} color="primary">*/}
                        {/*取消*/}
                    {/*</Button>*/}
                    {/*<div style={divStyle}></div>*/}
                    {/*<Button onClick={handleClose} color="primary" autoFocus>*/}
                        {/*呼叫*/}
                    {/*</Button>*/}
                {/*</DialogActions>*/}
            </Dialog>
        </div>
    );
}
