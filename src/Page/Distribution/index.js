import React from 'react';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import SwipeableViews from 'react-swipeable-views';
import TabPanel from '../../Page/JoinMeiHao/MeiHaoTab/TabPanel';
import { autoPlay } from 'react-swipeable-views-utils';
import Breadcrumb from '../../Components/Common/Breadcrumb';

import meihao1 from '../../Page/JoinMeiHao/Image/meihao2.jpg';
import  lizhi2 from '../../Page/JoinMeiHao/Image/lizhi2.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tileData = {
    img: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
    title: '新闻动态',
    author: 'Buid this knowledge',
};


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Distribution() {
    const [value, setValue] = React.useState(0);

    const classes = useStyles();
    const theme = useTheme();
    const [index, setIndex] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setIndex(index);
    };

    const handleChangeTabIndex = index => {
        setValue(index);
    };

    return (
        <Paper square>
            <Breadcrumb pageName="门店分布"/>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                variant="fullWidth"
            >
                <Tab label="开业门店" />
                <Tab label="待开门店" />
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeTabIndex}
            >
                <TabPanel value={value} index={0}>
                    <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                        <GridList cellHeight={180} className={classes.gridList} cols={0}>
                            <GridListTile key={tileData.img} style={{padding:"-2px"}}>
                                <img src={meihao1} alt={tileData.title} />
                            </GridListTile>
                        </GridList>
                    </AutoPlaySwipeableViews>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                        <GridList cellHeight={180} className={classes.gridList} cols={1}>
                            <GridListTile key={tileData.img} style={{padding:"-2px"}}>
                                <img src={lizhi2} alt={tileData.title} />
                            </GridListTile>
                        </GridList>
                    </AutoPlaySwipeableViews>
                </TabPanel>
            </SwipeableViews>
        </Paper>
    );
}
