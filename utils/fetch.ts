import { $fetch } from 'ofetch'
import LRU from 'lru-cache'
import { hash as ohash } from 'ohash'
const cache = new LRU({
  max: 500,
  ttl: 2000 * 60 * 60, // 2 hour
})
export function GET(url: string, params = {}) {
  const hash = ohash([url, params])
  if (!cache.has(hash)) {
    cache.set(
      hash,
      $fetch(url, {
        params,
      }).catch((e) => {
        cache.delete(hash)
        throw e
      }),
    )
  }
  return cache.get(hash)! as Promise<any>
}
export function POST(url: string, body = {}) {
  return $fetch(url, {
    body,
    method: 'POST',
  })
}
