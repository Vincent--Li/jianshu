import styled from 'styled-components';


export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top; 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 240px;
    }
`;

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    padding-right: 10px;
    margin-bottom: 18px;
    margin-left: 18px;
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    color: #000
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        width: 32px;
        height: 32px;
        display: block;
        float: left;
        margin-right: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title { 
        line-height: 20px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .desc {
        line-height: 18px;
        font-size: 13px;
        color: #999;
    }
`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .list-pic {
        width: 125px;
        height: 100px;
        display: block;
        float: right;
        border-radius: 10px;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    widht: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props)=> props.imgUrl});
    background-size: contain;
`;

export const WriterWrapper = styled.div`
    width: 278px;
    border: 1px soilid #dcdcdc;
    border-radius: 3px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`;