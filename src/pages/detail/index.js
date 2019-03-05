import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    DetailWrapper, Header,Content
} from './style'

class Detail extends PureComponent {
    render () {
        const { title, content } = this.props;

        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Content dangerouslySetInnerHTML={{__html: content}} />
            </DetailWrapper>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapToState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapToDispatch = (dispatch) => ({
    getDetail (id){
        dispatch(actionCreators.getDetail(id));
    }
});

export default connect(mapToState, mapToDispatch)(Detail);