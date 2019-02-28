import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: '社会热点',
            imgURL:'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 2,
            title: '手绘',
            imgURL:'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 3,
            title: '测试',
            imgURL:'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 4,
            title: '聚',
            imgURL:'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 5,
            title: '列',
            imgURL:'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 6,
            title: 'reducer',
            imgURL:'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 7,
            title: 'redux',
            imgURL:'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
        {
            id: 8,
            title: 'topics',
            imgURL:'https://upload.jianshu.io/users/upload_avatars/13213889/7314c5cc-ca7f-4542-b914-2c8dffaf324d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp'
        },
    ],
    articleList: [
        {
            id: 1,
            title: '行书与楷书书写风格的差异',
            desc: '1.放松楷法，书写增速 行书兼有楷书的基本法则和草书流动的笔法，行书运笔虽比草书慢，但比楷书要快，而且具有强烈的节奏感。苏轼所言的：“真如立、行...',
            imgURL: 'https://upload-images.jianshu.io/upload_images/14952399-c6919afdcd16edeb?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 2,
            title: '行书与楷书书写风格的差异',
            desc: '1.放松楷法，书写增速 行书兼有楷书的基本法则和草书流动的笔法，行书运笔虽比草书慢，但比楷书要快，而且具有强烈的节奏感。苏轼所言的：“真如立、行...',
            imgURL: 'https://upload-images.jianshu.io/upload_images/14952399-c6919afdcd16edeb?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 3,
            title: '行书与楷书书写风格的差异',
            desc: '1.放松楷法，书写增速 行书兼有楷书的基本法则和草书流动的笔法，行书运笔虽比草书慢，但比楷书要快，而且具有强烈的节奏感。苏轼所言的：“真如立、行...',
            imgURL: 'https://upload-images.jianshu.io/upload_images/14952399-c6919afdcd16edeb?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        },
        {
            id: 4,
            title: '行书与楷书书写风格的差异',
            desc: '1.放松楷法，书写增速 行书兼有楷书的基本法则和草书流动的笔法，行书运笔虽比草书慢，但比楷书要快，而且具有强烈的节奏感。苏轼所言的：“真如立、行...',
            imgURL: 'https://upload-images.jianshu.io/upload_images/14952399-c6919afdcd16edeb?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
        }
    ]
})

export default (state = defaultState, action ) => {


    return state;
}