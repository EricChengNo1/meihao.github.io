import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import News from '../../Page/News/Image/news.jpg';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridListTitleRoot:{
        height:'250px',
    },
    gridList: {
        width: "100%",
        height:"100%"
    },
    gridListLi:{
        // padding: "-2px",
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
}));



const tileData = {
    img: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
    // title: '新闻动态',
    author: 'Buid this knowledge',
};

export default function PageTitle(props) {
    const classes = useStyles();
    //做ipad和ipad pro兼容
    const clientWidth = document.body.clientWidth;

    return (
        <div className={classes.root}>
            <GridList cellHeight={clientWidth >= 768 ? 500 : 250} cols={1}>
                <GridListTile key={tileData.img} className={classes.gridListLi}>
                    <img src={News} alt={props.title} />
                    <GridListTileBar
                        title={props.title}
                        subtitle={<span>{tileData.author}</span>}
                        // actionIcon={
                        //     <IconButton aria-label={`info about ${props.title}`} className={classes.icon}>
                        //         <InfoIcon />
                        //     </IconButton>
                        // }
                    />
                </GridListTile>

            </GridList>
        </div>
    );
}
