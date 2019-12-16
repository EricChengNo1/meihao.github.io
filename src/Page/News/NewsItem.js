import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

import img01 from '../Home/Gallery/img/02.jpeg';

const useStyles = makeStyles(theme => ({
    inline: {
        display: 'inline',
    },
    card: {
        maxWidth: 345,
    },
    news:{
        marginLeft: "10px",
    },
}));
export default function NewsItem() {
    const classes = useStyles();
    return (
        <div>
            <ListItem alignItems="flex-start">
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="100"
                            image={img01}
                            title="Contemplative Reptile"
                        />
                    </CardActionArea>
                </Card>
                <ListItemText className={classes.news}
                              primary="解密终端连锁酒店创赢..."
                              secondary={
                                  <React.Fragment>
                                      <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                                          to Scott, Alex, Jennifer
                                      </Typography>
                                      {` — Wish I could come, but I'm out of town this…`}
                                      <Typography>abc</Typography>
                                  </React.Fragment>
                              }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>

    )
}