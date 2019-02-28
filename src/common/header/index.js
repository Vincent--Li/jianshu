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
            <i className = { focused ? 'focused iconfont' : 'iconfont'}
          >&#xe617;</i>
          { this.getListArea()}
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

    getListArea = (show) => {
      const { focused, list} = this.props;
      if(focused){
        return (
          <SearchInfo>
                <SearchInfoTitle>
                  热门搜索
                  <SearchInfoSwitch>
                    换一换
                  </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                  {
                    list.map((item)=>{
                      return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                    })
                  }
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
    list: state.get('header').get('list')
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
      }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Header);