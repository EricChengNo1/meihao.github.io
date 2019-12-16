import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import logo from '../Image/logo_black.jpg';
import logo_white from '../Image/logo_white.jpg';
import qrcode1 from './Footer/Image/qrcode1.jpg';
import qrcode2 from './Footer/Image/qrcode2.jpg';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up"  ref={ref} {...props} />;
});

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        marginLeft: theme.spacing(2),
        flexGrow: 1,
    },
    card: {
        maxWidth: 345,
    },
    arrow:{
        fontSize: "16px",
        color: "#666666",
    },
    logo:{
        display:"flex",
        justifyContent:"space-between",
        backgroundColor: "#ffffff",
        height:"60px"
    },
    logoImage:{
        height:"60px",
        lineHeight:"100%"
    },
    whiteLogoStyle:{
      display: 'flex',
      justifyContent: "center",
      alignItems:"center"
    },
    whiteLogoImage:{
        height:"40px",
        lineHeight:"100%",
        marginLeft:'10px'
    },
    menuStyle:{
        backgroundColor: "#ffffff",
        display:"flex",
        justifyContent:"space-between",
        height: "80px",
    },
    menuIcon:{
        color:"#999999",
    },
    MenuItem:{
        display:'flex',
        justifyContent: 'space-between',
        padding: '15px',

    },
    MenuItemContent:{
        fontSize:'16px',
        fontWeight: 600,
        color: "#000000"
    },
    LinkStyle:{
        textDecorationLine:'inherit'
    },
    QRCodeContanier:{
        display:'flex',
        padding: '8px'
    },
    QRCodeItem:{
        display:'flex',
        flexDirection:'column',
        padding:'10px'
    },
    QRCodeItemContext:{
        paddingBottom:'5px'
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <div className={classes.logo}>
                    <Link to="/home">
                        <img className={classes.logoImage} src={logo} alt=""/>
                    </Link>
                    <IconButton onClick={handleClickOpen} edge="start" className={classes.menuButton}
                                aria-label="menu">
                        <MenuIcon style={{color: "#000000", fontSize:"40px"}}/>
                    </IconButton>
                </div>
            </AppBar>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <div className={classes.menuStyle}>
                    <Link to="/home" className={classes.whiteLogoStyle}>
                        <img className={classes.whiteLogoImage} src={logo_white} alt=""/>
                    </Link>
                    <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon style={{color: "#000000", fontSize:"40px", marginRight:"3px"}} />
                    </IconButton>
                </div>
                <Divider />

                <List>
                    <Link to="/home" className={classes.LinkStyle}>
                        <ListItem button onClick={handleClose} className={classes.MenuItem}>
                            <ListItemText primary="首页" classes={{primary: classes.MenuItemContent}} />
                            <ArrowForwardIosIcon className={classes.arrow}/>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/goIntoMeiHao" className={classes.LinkStyle}>
                        <ListItem button onClick={handleClose} className={classes.MenuItem}>
                            <ListItemText primary="走进美豪" classes={{primary: classes.MenuItemContent}} />
                            <ArrowForwardIosIcon className={classes.arrow}/>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/joinMeiHao" className={classes.LinkStyle}>
                        <ListItem button onClick={handleClose} className={classes.MenuItem}>
                            <ListItemText primary="加盟美豪" classes={{primary: classes.MenuItemContent}}/>
                            <ArrowForwardIosIcon className={classes.arrow}/>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/news" className={classes.LinkStyle}>
                        <ListItem button onClick={handleClose} className={classes.MenuItem}>
                            <ListItemText primary="集团新闻" classes={{primary: classes.MenuItemContent}}/>
                            <ArrowForwardIosIcon className={classes.arrow}/>
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/distribution" className={classes.LinkStyle}>
                        <ListItem button onClick={handleClose} className={classes.MenuItem}>
                            <ListItemText primary="门店分布" classes={{primary: classes.MenuItemContent}}/>
                            <ArrowForwardIosIcon className={classes.arrow}/>
                        </ListItem>
                    </Link>
                    <Divider />
                    {/*<Link to="/test" className={classes.LinkStyle}>*/}
                        {/*<ListItem button onClick={handleClose} className={classes.MenuItem}>*/}
                            {/*<ListItemText primary="测试react最新API" classes={{primary: classes.MenuItemContent}}/>*/}
                            {/*<ArrowForwardIosIcon className={classes.arrow}/>*/}
                        {/*</ListItem>*/}
                    {/*</Link>*/}
                    <Divider/>
                </List>

                <div className={classes.QRCodeContanier}>
                    <div className={classes.QRCodeItem}>
                        <span className={classes.QRCodeItemContext}>官方微博</span>
                        <img src={qrcode1} alt=""/>
                    </div>
                    <div className={classes.QRCodeItem}>
                        <span className={classes.QRCodeItemContext}>官方微信</span>
                        <img src={qrcode2} alt=""/>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
