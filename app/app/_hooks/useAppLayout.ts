'use client'

import { ROUTES } from '@/lib/constants'
import { useUser } from '@clerk/nextjs'
import { useMemo } from 'react'
import { LayoutDashboard, LucideIcon, PieChart, Settings, User, Users } from 'lucide-react'
import { useAtom } from 'jotai'
import { desktopNavToggleAtom } from '@/repositories/layout'

export type AppLinkType = {
  title: string
  link: string
  Icon: LucideIcon
}

export default function useAppLayout() {
  const { user, isLoaded: userLoaded } = useUser()
  const [isCollapsed, setIsCollapsed] = useAtom(desktopNavToggleAtom)

  const appLinks: AppLinkType[] = useMemo(
    () => [
      {
        title: 'Dashboard',
        link: ROUTES.APP.DASHBOARD,
        Icon: LayoutDashboard,
      },
      {
        title: 'Expenses',
        link: ROUTES.APP.EXPENSES,
        Icon: PieChart,
      },
      {
        title: 'Groups',
        link: ROUTES.APP.GROUPS,
        Icon: Users,
      },
      {
        title: 'Friends',
        link: ROUTES.APP.FRIENDS,
        Icon: User,
      },
      {
        title: 'Settings',
        link: ROUTES.APP.SETTINGS,
        Icon: Settings,
      },
    ],
    [],
  )

  return {
    isCollapsed,
    setIsCollapsed,
    user,
    userLoaded,
    appLinks,
  }
}
