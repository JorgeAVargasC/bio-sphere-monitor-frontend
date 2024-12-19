import { useQuery } from '@tanstack/react-query'
import { ref, get } from 'firebase/database'
import { realtimeDB } from '../../../../firebase/firebase.config'
import { IFirebaseData } from '@dashboard/beehives/components/cards/interfaces'

export const useGetBeehivesData = () => {
  return useQuery({
    queryKey: ['beehives'],
    queryFn: async () => {
      const snapshot = await get(ref(realtimeDB))
      console.log(snapshot.val())
      return snapshot.val() as IFirebaseData
    }
  })
}
