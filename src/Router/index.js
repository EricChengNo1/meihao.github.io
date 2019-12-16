// import React,{Component} from 'react';
// import {HashRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItem from '@material-ui/core/ListItem';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
//
// import MenuIcon from '@material-ui/icons/Menu';
// import Phone from '@material-ui/icons/Phone';
// import MoreIcon from '@material-ui/icons/MoreVert';
//
// import Home from '../Page/Home';
//
// class  RootRouter extends Component{
//     render(){
//         return (
//             <div>
//                 <Router>
//                     <List>
//                         <ListItem button>
//                             <Link to="/home">
//                                 <ListItemIcon>
//                                     <Phone fontSize="small"/>
//                                 </ListItemIcon>
//                                 <ListItemText primary="首页" secondary="Titania" />
//                             </Link>
//                         </ListItem>
//                         <Divider />
//                         <ListItem button>
//                             <Link to="/home">
//                                 <ListItemIcon>
//                                     <MenuIcon fontSize="small"/>
//                                 </ListItemIcon>
//                                 <ListItemText primary="品牌介绍" secondary="Tethys" />
//                             </Link>
//                         </ListItem>
//                         <Divider />
//                         <ListItem button>
//                             <Link to="/home">
//                                 <ListItemIcon>
//                                     <MoreIcon fontSize="small"/>
//                                 </ListItemIcon>
//                                 <ListItemText primary="加盟美豪" secondary="Tethys" />
//                             </Link>
//                         </ListItem>
//                         <Divider />
//                         <ListItem button>
//                             <Link to="/home">
//                                 <ListItemIcon>
//                                     <MoreIcon fontSize="small"/>
//                                 </ListItemIcon>
//                                 <ListItemText primary="酒店设计" secondary="Tethys" />
//                             </Link>
//                         </ListItem>
//                         <Divider />
//                         <ListItem button>
//                             <Link to="/home">
//                                 <ListItemIcon>
//                                     <MenuIcon fontSize="small"/>
//                                 </ListItemIcon>
//                                 <ListItemText primary="新闻资讯" secondary="Tethys" />
//                             </Link>
//                         </ListItem>
//                         <Divider />
//                         <ListItem button>
//                             <Link to="/home">
//                                 <ListItemIcon>
//                                     <Phone fontSize="small"/>
//                                 </ListItemIcon>
//                                 <ListItemText primary="门店分布" secondary="Tethys" />
//                             </Link>
//                         </ListItem>
//                     </List>
//                     <Switch>
//                         <Route path="/home" component={Home}></Route>
//                         <Redirect from="/" to="/home"></Redirect>
//                     </Switch>
//                 </Router>
//             </div>
//         )
//     }
// }
//
// export default RootRouter;