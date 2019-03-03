import React, { Component } from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import { connect } from 'react-redux';


import { HomeWrapper , HomeLeft, HomeRight } from './style';

class Home extends Component {
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4614/860581df72e818f1c4046b077f6e20ea2069c6ca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        );
    }

    componentDidMount(){
        axios.get('/api/home.json')
            .then((res)=>{
                const result = res.data.data;
                const action = {
                    type: 'change_home_data',
                    topicList: result.topicList,
                    articleList: result.articleList,
                    recommendList: result.recommendList
                }
                this.props.changeHomeData(action);

            })
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData(action){
        dispatch(action);
    }
})

export default connect(null, mapDispatch)(Home);