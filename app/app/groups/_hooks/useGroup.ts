'use client'

import { QUERY_KEYS } from '@/lib/constants'
import services from '@/services'
import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'

export default function useGroup() {
  const { isPending, data: groupRes } = useQuery({
    queryKey: [QUERY_KEYS.GROUPS, 'list'],
    queryFn: () => services.Group.getGroups(),
  })

  const groupData = useMemo(() => groupRes?.data.data || [], [groupRes?.data.data])

  return { isPending, groupData }
}
