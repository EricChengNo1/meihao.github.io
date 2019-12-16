import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

import Caculate from './Footer/Caculate';
import CallMe from './Footer/CallMe';
import OnlineMessage from './Footer/OnlineMessage';


const useStyles = makeStyles({
    root: {
        width: 400,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor:"#ffffff"
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    content:{
        flex: 1,
        display: "flex",
        justifyContent: "center"
    },
    contentChildStyle:{
        flex:1,
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column",
        color: "#000000",
    },
    bottomStyle:{
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight:"56px"
    },
    bottomChildStyle:{
        flex:1,
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection:"column"
    }
});

export default function LabelBottomNavigation() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <div className={classes.bottomStyle}>
                    <Caculate contentStyle={classes.content}  contentChildStyle={classes.contentChildStyle}/>
                    <CallMe contentStyle={classes.content}  contentChildStyle={classes.contentChildStyle}/>
                    <OnlineMessage contentStyle={classes.content} contentChildStyle={classes.contentChildStyle}/>

                    {/*<Message />*/}
                </div>
            </AppBar>
        </div>
    );
}
