import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import MySnackbarContentWrapper from './MySnackbarContentWrapper';

const useStyles2 = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function CustomizedSnackbars() {
    const classes = useStyles2();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" className={classes.margin} onClick={handleClick}>
                Open success snackbar
            </Button>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant="success"
                    message="This is a success message!"
                />
            </Snackbar>
            <MySnackbarContentWrapper
                variant="error"
                className={classes.margin}
                message="This is an error message!"
            />
            <MySnackbarContentWrapper
                variant="warning"
                className={classes.margin}
                message="This is a warning message!"
            />
            <MySnackbarContentWrapper
                variant="info"
                className={classes.margin}
                message="This is an information message!"
            />
            <MySnackbarContentWrapper
                variant="success"
                className={classes.margin}
                message="This is a success message!"
            />
        </div>
    );
}
