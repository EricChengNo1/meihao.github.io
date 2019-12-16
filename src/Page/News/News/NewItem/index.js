import React, {Component} from 'react';
import {Link} from "react-router-dom";

// import ReactModal from "react-modal";

import './index.css';

class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    render() {
        const item = this.props.item;
        return (<div>
            <div className="favorite-list-item">
                <div className="favorite-list-item-img-div">
                    <Link to='/home'>
                        <img className="favorite-list-item-img" src={item.img} alt="图片加载失败"></img>
                    </Link>
                </div>

                <div className="favorite-list-item-detail">
                    <Link to="/home">
                        <span className="favorite-list-item-detail-title">{item.title}</span></Link>
                    <div className="favorite-list-item-detail-desc">
                        <span>{`abcfasdfasjd;fjasd;fljas;fklasjdf;sadjf;`}</span>
                    </div>
                    <div className="favorite-list-item-detail-desc">
                        <span>日期 <i className="icon-rmb"></i>{`2019-09-12`}</span>&nbsp;&nbsp;
                    </div>
                </div>
            </div>
            <div style={{height: '1px', backgroundColor: '#dfdfdf'}}></div>
        </div>)
    }
}

export default NewItem;