import { $fetch } from 'ofetch'
import LRU from 'lru-cache'
import { hash as ohash } from 'ohash'
const apiBaseUrl = 'https://api.coverr.co'
const { VITE_API_KEY } = import.meta.env
const API_KEY = VITE_API_KEY
const cache = new LRU({
  max: 500,
  ttl: 2000 * 60 * 60, // 2 hour
})
const _get = (url: string, params: Record<string, string | number | undefined> = {}) => {
  return $fetch(url, {
    params,
    baseURL: apiBaseUrl,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + API_KEY,
    },
  })
}
export function _fetch(url: string, params: Record<string, string | number | undefined> = {}): Promise<any> {
  const hash = ohash([url, params])
  if (!cache.has(hash)) {
    cache.set(
      hash,
      _get(url, params)
        .catch((e) => {
          cache.delete(hash)
          throw e
        }),
    )
  }
  //Q: 为什么要加！
  //A: 因为我们知道这里一定是Promise<any>，所以我们可以使用！告诉ts，这里一定有值
  return cache.get(hash)! as Promise<any>
}

//视频列表
export function getVideoList(params: Record<string, string | number | undefined> = {}) {
  return _fetch('/videos', params)
}
//视频详情
export function getVideo(id: string) {
  return _fetch(`/videos/${id}`)
}
//下载视频
export function getVideoDownload(id: string) {
  return _fetch(`/videos/${id}/stats/downloads`)
}
//分类列表
export function getCategoriesList(params: Record<string, string | number | undefined> = {}) {
  return _fetch('/categories', params)
}
//视频详情
export function getCategory(id: string) {
  return _fetch(`/categories/${id}`)
}
//分类中的视频
export function getCategoriesVideos(params: Record<string, string | number | undefined> = {}) {
  return _fetch(`/categories/${params.id}/videos`, params)
}
export function getCollectionsList(params: Record<string, string | number | undefined> = {}) {
  return _fetch('/collections', params)
}
export function getCollection(id: string) {
  return _fetch(`/collections/${id}`)
}
export function getCollectionVideos(params: Record<string, string | number | undefined> = {}) {
  return _fetch(`/collections/${params.id}/videos`, params)
}