import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
import {Link} from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    card: {
        maxWidth: 345,
    },
    news:{
        marginLeft: "10px",
    },
    brand:{
        display:"flex",
        margin: 10,
        alignItems:'center'
    }
}));


export default function Breadcrumb(props) {
    const classes = useStyles();
    const isHomePage = props.pageName === "首页" ? true : false;

    return (
        <div>
            <div className={classes.brand}>
                <Typography variant="subtitle2" color="textPrimary">当前位置: &nbsp;</Typography>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to="/home" style={{display: isHomePage? "none" : "block", fontSize:"0.875rem",textDecorationLine: 'none'}}  color="primary">
                        首页
                    </Link>
                    <Typography variant="subtitle2" color="inherit">{props.pageName}</Typography>
                </Breadcrumbs>
            </div>
        </div>
    );
}
