import React, {Component} from 'react';
import NewItem from "./NewItem";
import LoadMore from './LoadMore';
import {dataList, dataList2} from "../../../Fetch/FavoriteDataConfig";
import {post} from '../../../Fetch/post';
import {get} from '../../../Fetch/get';

const style = {
    display: 'flex',
    justifyContent: 'center',
    color: '#999',
}
export default class News extends Component{
    constructor(props){
        super(props);

        this.state ={
            dataList: [],
            page: 0,
            isLoadMore: true
        }
    }
    GetFavoriteDataList(page) {
        let data;
        let isLoadMore = false;

        if (page === 0) {
            data = dataList.data;
            // let result = post("/meihaoWeb/meihao/api/GetNewsList", {pageSize:6, pageIndex: 1});

            // result.then(function (res) {
            //     return res.json();
            // },function (r) {
            //     console.log(r)
            // }).then(function (myJson) {
            //     console.log(myJson);
            // });
            //
            isLoadMore = true;
        }
        else
        {
            data = this.state.dataList.concat(dataList2.data);
            isLoadMore = dataList2.isLoadMore;
            console.log(isLoadMore + '_' + this.state.page)
        }
        this.setState({
            dataList: data,
            page: page,
            isLoadMore: isLoadMore
        })
    }

    componentDidMount() {
        this.GetFavoriteDataList(0);
    }

    LoadMoreDataFn() {
        let nextPage = this.state.page + 1;
        this.GetFavoriteDataList(nextPage);
    }
    render(){
        return(
            <div>
                {
                    this.state.dataList.length > 0
                    ? this.state.dataList.map((item, index) => {
                        return (<NewItem key={index} item={item}/>)
                        })
                    : <div>暂无新闻...</div>
                }
                {
                    this.state.isLoadMore
                        ? <LoadMore  loadMoreDataFn={this.LoadMoreDataFn.bind(this)}/>
                        : <div style={style}><span>没有更多了</span></div>
                }
            </div>
        )
    }
}