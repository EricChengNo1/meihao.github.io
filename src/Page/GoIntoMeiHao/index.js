import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumb from '../../Components/Common/Breadcrumb';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '../../Page/JoinMeiHao/MeiHaoTab/TabPanel';
import CircularProgress from '@material-ui/core/CircularProgress';
import {get} from '../../Fetch/get';

import ceo from '../../Image/CEO.JPG';
import meihaoshijian from './MeiHaoEvent/Image/dashijian.png';
import meihaorongyu001 from './MeiHaoHonour/Image/001.jpg';
import meihaorongyu002 from './MeiHaoHonour/Image/002.jpg';

const useStyles = makeStyles(theme => ({
    panelDiv:{
        padding:"-2px"
    },
    panelImage:{
        width: "100%"
    },
    loading:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}));

export default function  GoIntoMeiHao(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [imgSrc, setImgSrc] = React.useState();
    const [title, setTitle] = React.useState();
    const [description, setDescription] = React.useState();

    // React.useEffect(()=>{
    //     let result = get("/meihaoWeb/meihao/api/GetGoInMeihaoInfo");
    //
    //     result.then(function (res) {
    //         if(res.status === 200){
    //             return res.json();
    //         }
    //         else {
    //             return Promise.reject(res.json());
    //         }
    //     }).then(function (myJson) {
    //         console.log(myJson);
    //         console.log(myJson.Data.Title);
    //         console.log(myJson.Data.Description);
    //         console.log(myJson.Data.ImgeUrl[0]);
    //
    //         setTitle(myJson.Data.Title);
    //         setDescription(myJson.Data.Description);
    //         let imgUrl = "/meihaoWeb/meihao/api/viewImage?id=";
    //         setImgSrc(imgUrl + myJson.Data.ImgeUrl[0]);
    //     }).catch( (err) => {
    //         console.log(err);
    //     });
    // },[]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // if(!title){
    //     return (<div className={classes.loading}>
    //         <CircularProgress />
    //     </div>)
    // }

    return (
        <div>
            <Breadcrumb pageName="走进美豪"/>
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        // height="140"
                        image={ceo}
                        // image={imgSrc}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            美豪发誓要做让所有宾客有尊严、有温度的酒店
                            {/*{title}*/}
                        </Typography>
                        <Typography variant="caption" component="p">
                            美豪酒店致力于打造酒吧文化+3D影院与酒店完美结合的风情主题酒店，创新以智能时尚、简约原生态装修、
                            异国风情全时茶餐吧、五星核心设施配置、自助洗衣房、3D影院客房、个性管家服务等全新产品模式，
                            为商旅顾客带来舒适、超值的入住体验，在静谧优雅环境中得到心灵的释放及家一样的温馨感受。
                            {/*{description}*/}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <div style={{padding:"8px",backgroundColor:"#f0f0f0"}}></div>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                variant="fullWidth"
            >
                <Tab label="美豪大事件" />
                <Tab label="美豪荣誉" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <div className={classes.panelDiv}>
                    <img className={classes.panelImage} src={meihaoshijian} alt=""/>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div className={classes.panelDiv}>
                    <img className={classes.panelImage} src={meihaorongyu001} alt=""/>
                </div>
                <div className={classes.panelDiv}>
                    <img className={classes.panelImage} src={meihaorongyu002} alt=""/>
                </div>
            </TabPanel>
        </div>
    )
}