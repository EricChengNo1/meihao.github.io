import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    imageStyle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    img:{
        width:'26px',
        height: '26px',
        paddingRight:'5px'
    },
    content:{
        fontSize:'0.875rem',
        fontFamily:`"Roboto", "Helvetica", "Arial", sans-serif`,
        fontWeight:400,
        lineHeight: 1.43,
        letterSpacing: "0.01071em"
    }
}));

export default function SimpleExpansionPanel(props) {
    const classes = useStyles();
    return (
        <div>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div className={classes.imageStyle}>
                        <img className={classes.img} src={props.image} alt=""/>
                        <Typography className={classes.heading}>{props.title}</Typography>
                    </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {/*<Typography variant="body2">*/}
                        {/*{props.content}*/}
                    {/*</Typography>*/}
                    <div className={classes.content} dangerouslySetInnerHTML={{ __html: props.content }}>
                    </div>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}
