// 技术分类GET：https://api.juejin.cn/tag_api/v1/query_category_briefs?aid=2608&uuid=7340513793933755940&spider=0
// 作者榜GET：https://api.juejin.cn/user_api/v1/quality_user/rank?aid=2608&uuid=7340513793933755940&spider=0
// 作者推荐GET：https://api.juejin.cn/user_api/v1/author/recommend?aid=2608&uuid=7340513793933755940&spider=0&category_id=&cursor=0&limit=20
// 文章榜GET：https://api.juejin.cn/content_api/v1/content/article_rank?category_id=1&type=hot&count=50&from=0&aid=2608&uuid=7340513793933755940&spider=0
// 推荐话题:
//    POST：https://api.juejin.cn/tag_api/v1/theme/list_by_hot?aid=2608&uuid=7340513793933755940&spider=0
//    {"cursor":"0","limit":10}
// 文章列表:
//    POST：https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7340513793933755940&spider=0
//    {"id_type":2,"client_type":2608,"sort_type":200,"cursor":"0","limit":20}
// 文章详情：https://juejin.cn/post/7290751877734776893

export const LATEST_DATA_URL = 'https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed'
export const HOT_DATA_URL = 'https://api.juejin.cn/tag_api/v1/theme/list_by_hot'

// 取最新的主题
export function getLatestDateUrl(): string {
  return LATEST_DATA_URL;
}

// 获取热议主题
export function getHotDateUrl(): string {
  return HOT_DATA_URL;
}

// function queryString (obj?: Object) {
//   if (!obj) {
//     return ''
//   }
//   return '?' + Object.keys(obj).map(function (k) {
//     return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])
//   }).join('&')
// }

