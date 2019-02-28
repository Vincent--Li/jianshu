import React , {Component }from 'react';
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

 class Header extends Component {
   
    render(){
      const { focused , handInputBlur, handInputFocus} = this.props;
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
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className = { focused ? 'focused': ''}
                onFocus={handInputFocus}
                onBlur={handInputBlur}
              ></NavSearch>
            </CSSTransition>
            <i className = { focused ? 'focused iconfont zoom' : 'iconfont zoom'}
          >&#xe617;</i>
          { this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont spin'>&#xe601;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
      );

    }

    getListArea = () => {
      const { focused, list, page, mouseIn, totalPage, handChangePage, handMouseEnter, handMouseLeave} = this.props;
      const pageList = [];
      const newList = list.toJS();

      if(newList.length) {
        for( let i = ((page-1) * 10); i< page * 10  ; i++){
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
      
      if(focused || mouseIn){
        return (
          <SearchInfo 
            onMouseEnter={handMouseEnter}
            onMouseLeave={handMouseLeave}
          >
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch
                    onClick={() => handChangePage(page, totalPage, this.spinIcon)}
                  >
                  <i className='iconfont spin'
                    ref={(icon) => {this.spinIcon = icon}}
                  >&#xe851;</i>
                    换一批
                  </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                  {pageList}
                </SearchInfoList>
              </SearchInfo>
        )
      }else{
        return null;
      }
    }

 }



const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
    page: state.get('header').get('page'),
    mouseIn: state.get('header').get('mouseIn'),
    totalPage: state.get('header').get('totalPage')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      handInputFocus: () =>{
        dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
      },
      handInputBlur: () => {
        dispatch(actionCreators.searchBlur());
      },
      handMouseEnter: () =>{
        dispatch(actionCreators.mouseEnter());
      },
      handMouseLeave: () =>{
        dispatch(actionCreators.mouseLeave());
      },
      handChangePage: (page, totalPage, spin) => {
        
        let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
        if(originAngle) {
          originAngle = parseInt(originAngle, 10);
        }else{
          originAngle = 0;
        }
        spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';

        if(page < totalPage){
          dispatch(actionCreators.changePage(page + 1));
        }else{
          dispatch(actionCreators.changePage(1));
        }
      }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);