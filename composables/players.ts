import { GET, POST } from '@/utils/fetch'
import { Player } from '@/types'

export function addPlayer(body: Player) {
  return POST('/api/players/create', body)
}