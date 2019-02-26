import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
  HeaderWrapper, 
  Logo, 
  Nav, 
  NavItem, 
  NavSearch,
  SearchInfo,
  Addition,
  Button,
  SearchWrapper,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
 } from './style';

const getListArea = (show) => {
  if(show){
    return (
      <SearchInfo>
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch>
                换一换
              </SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoList>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
              <SearchInfoItem>教育</SearchInfoItem>
            </SearchInfoList>
          </SearchInfo>
    )
  }else{
    return null;
  }
}

const Header = (props) => {
  return (
    <HeaderWrapper>
        <Logo href='/'/>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'><i className='iconfont'>&#xe636;</i></NavItem>
          <SearchWrapper>
            <CSSTransition
              in={props.focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className = { props.focused ? 'focused': ''}
                onFocus={props.handInputFocus}
                onBlur={props.handInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className = { props.focused ? 'focused iconfont' : 'iconfont'}
          >&#xe617;</i>
          { getListArea(props.focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe601;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handInputFocus: () =>{
        dispatch(actionCreators.searchFocus());
      },
      handInputBlur: () => {
        dispatch(actionCreators.searchBlur());
      }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);