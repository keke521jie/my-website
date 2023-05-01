import request from './request'


// 获取blog文章列表
export const getBlogList = () => request({ url: '/getblog', method: 'get' })

// 获取某一条文章信息
export const getABlog = () => request({ url: 'getablog', method: 'get' })