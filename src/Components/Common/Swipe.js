import React from 'react';
import { makeStyles ,useTheme} from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tileData = {
    img: "https://material-ui.com/static/images/cards/contemplative-reptile.jpg",
    title: '新闻动态',
    author: 'Buid this knowledge',
};

export default function Swipe(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [index, setIndex] = React.useState(0);

    const handleChangeIndex = index => {
        setIndex(index);
    };
    return (
        <div>
            <div>
                <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
                    <div>
                        <GridList cellHeight={180} className={classes.gridList} cols={1}>
                            <GridListTile key={tileData.img} style={{padding:"-2px"}}>
                                <img src={meihao1} alt={tileData.title} />
                            </GridListTile>
                        </GridList>
                    </div>
                    <div>
                        <GridList cellHeight={180} className={classes.gridList} cols={1}>
                            <GridListTile key={tileData.img} style={{padding:"-2px"}}>
                                <img src={meilihao1} alt={tileData.title} />
                            </GridListTile>
                        </GridList>
                    </div>
                </AutoPlaySwipeableViews>
            </div>
            <div>
                <Typography variant="caption" display="block" gutterBottom>
                    美豪酒店致力于打造酒吧文化+3D影院与酒店完美结合的风情主题酒店，创新以智能时尚、简约原生态装修、
                    异国风情全时茶餐吧、五星核心设施配置、自助洗衣房、3D影院客房、个性管家服务等全新产品模式，
                    为商旅顾客带来舒适、超值的入住体验，在静谧优雅环境中得到心灵的释放及家一样的温馨感受。
                </Typography>
            </div>
        </div>
    );
}
