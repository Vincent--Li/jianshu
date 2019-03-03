import { fromJS } from 'immutable'
import * as constants from './constants';

const defaultState = fromJS({
    topicList: [
        
    ],
    articleList: [
        
    ],
    recommendList: [
    
    ],
    articlePage: 1,
    showScroll: false
})

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
    })
}

const addArticleList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.nextPage
    });
}

export default (state = defaultState, action ) => {
    if(action.type === constants.CHANGE_HOME_DATA){
        return changeHomeData(state, action);
    }

    if(action.type === constants.ADD_ARTICLE_LIST){
        return addArticleList(state, action);
    }

    if(action.type === constants.TOGGLE_SCROLL_TOP){
        return state.set('showScroll', action.show);
    }

    return state;
}