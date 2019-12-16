import React, {Component} from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './index.css';

class LoadMore extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    clickHandler(){
        this.props.loadMoreDataFn();
    }

    // componentDidMount() {
    //     let timer;
    //     let top = this.myRef.current.getBoundingClientRect().top + 184 + 24 + 60;
    //     let screenHeight = window.screen.height;
    //     let loadMoreFn = this.props.loadMoreDataFn;
    //     window.addEventListener("scroll", function(){
    //         if(timer){
    //             clearTimeout(timer)
    //         }
    //         timer = setTimeout(callback, 50);
    //     }.bind(this), false);
    //
    //     function callback(){
    //         console.log("top:" + top+",screenHeight:"+screenHeight);
    //         if(top && top < screenHeight){
    //             loadMoreFn();
    //         }
    //     }
    // }
    render() {
        return (<div ref={this.myRef}  className="load-more" onClick={this.clickHandler.bind(this)}>
            <div className="load-more-content">
                <span >加载更多</span><ExpandMoreIcon />
            </div>
        </div>)
    }
}

export default LoadMore;