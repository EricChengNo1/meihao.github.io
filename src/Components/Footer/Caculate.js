import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import cal from './Image/calculate.jpg';

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
    dialog:{
        overflowX: "hidden",
        minWidth: "350px",
    },
    dialogContent:{
      maxHeight: "180px",
    },
    textContentStyle:{
        display:"flex",
        color: "#000000"
    },
    contentItemStyle:{
        margin: 8,
        flex: 2,
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
    notice:{
        width: '100%',
        maxWidth: 400,
        paddingLeft: "8px",
        paddingRight: "8px",
        color: "rgba(0, 0, 0, 0.54)",
    },
    img:{
        width: '30px',
        height: '30px'
    }
}));

export default function Caculate(props) {
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
                    {/*<MenuIcon />*/}
                    <img className={classes.img} src={cal} alt=""/>
                    <span>投资回报计算</span>
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
                <DialogTitle id="alert-dialog-slide-title">{"投资回报率计算器"}</DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <form  noValidate autoComplete="off">
                        <div className={classes.textContentStyle}>
                            <TextField
                                id="standard-full-width"
                                required
                                autoFocus
                                type="number"
                                label="预估房租"
                                className={classes.contentItemStyle}
                                placeholder="建议区间: 145-360万元"
                                margin="normal"
                                // helperText="万元/年"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div className={classes.helpTextStyle}>
                                <label>万元/年</label>
                            </div>

                    </div>
                        <div className={classes.textContentStyle}>
                            <TextField
                                required
                                id="standard-full-width"
                                label="房间数量"
                                type="number"
                                className={classes.contentItemStyle}
                                placeholder="建议区间: 80-150间"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div className={classes.helpTextStyle}>
                                <label>间&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            </div>
                        </div>

                        <div className={classes.textContentStyle}>
                            <TextField
                                id="standard-full-width"
                                required
                                label="预估房价"
                                type="number"
                                className={classes.contentItemStyle}
                                placeholder="建议区间: 260-500"
                                // helperText="万元/年"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div className={classes.helpTextStyle}>
                                <label>元间/晚</label>
                            </div>
                        </div>

                        <div className={classes.textContentStyle}>
                            <TextField
                                id="standard-full-width"
                                required
                                label="预估出租率"
                                type="number"
                                className={classes.contentItemStyle}
                                placeholder="80%-95%"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div className={classes.helpTextStyle}>
                                <label>%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            </div>
                        </div>

                        <div className={classes.textContentStyle}>
                            <TextField
                                id="standard-full-width"
                                required
                                label="联系电话"
                                type="number"
                                className={classes.contentItemStyle}
                                placeholder="结果发送到您的手机"
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <div className={classes.helpTextStyle}>
                                <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            </div>
                        </div>
                    </form>

                </DialogContent>
                <DialogActions>
                    <Button fullWidth onClick={handleClose} size="large" variant="contained" color="primary">
                        确定
                    </Button>
                </DialogActions>
                <div className={classes.notice}>
                    <Typography variant="caption" display="block" gutterBottom>
                        投资分析不代表美豪对特许酒店收益做实质性判断或保证，每个项目投资回报情况要结合物业地段、
                        配套设施、租金水平、经济发展情况等而有所不同。
                    </Typography>
                </div>
            </Dialog>

        </div>
    );
}
