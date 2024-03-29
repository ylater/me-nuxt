import { $fetch } from 'ofetch'
import LRU from 'lru-cache'
import { hash as ohash } from 'ohash'
const apiBaseUrl = 'https://api.unsplash.com/'
const { VITE_UNSPLASH_KEY } = import.meta.env
const API_KEY = VITE_UNSPLASH_KEY
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
      'Authorization': ' Client-ID ' + API_KEY,
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
//随机获取图片
export async function getRandomPhotos(params: Record<string, string | number | undefined> = {}) {
  return await _fetch('/photos/random', params)
}
//搜索图片
export async function getSearchPhotos(params: Record<string, string | number | undefined> = {}) {
  return await _fetch('/search/photos', params)
}
//获取图片topics
export async function getPhotoTopics(params: Record<string, string | number | undefined> = {}) {
  return await _fetch('/topics', params)
}
///photos/:id/download
export async function getPhotoDownload(params: Record<string, string | number | undefined> = {}) {
  return await _fetch(`/photos/${params.id}/download`, params)
}
//Get a topic
export async function getTopic(params: Record<string, string | number | undefined> = {}) {
  return await _fetch(`/topics/${params.id}`, params)
}
//Get a topic’s photos
export async function getTopicPhotos(params: Record<string, string | number | undefined> = {}) {
  return await _fetch(`/topics/${params.id}/photos`, params)
}

//collections
export async function getCollections(params: Record<string, string | number | undefined> = {}) {
  return await _fetch(`/collections`, params)
}
//Get a collection
export async function getCollectionDetail(params: Record<string, string | number | undefined> = {}) {
  return await _fetch(`/collections/${params.id}`, params)
}
export async function getCollectionsPhotos(params: Record<string, string | number | undefined> = {}) {
  return await _fetch(`/collections/${params.id}/photos`, params)
}