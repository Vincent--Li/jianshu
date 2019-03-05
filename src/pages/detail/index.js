import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
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
}

const mapToState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

export default connect(mapToState, null)(Detail);