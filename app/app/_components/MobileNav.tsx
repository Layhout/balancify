import { Button } from '@/components/ui/button'
import { AppLinkType } from '../_hooks/useAppLayout'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type MobileNavProps = {
  appLinks: AppLinkType[]
  pathname: string
}

export default function MobileNav({ appLinks, pathname }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 block h-20 p-2 pt-0 sm:hidden">
      <div className="relative flex h-full w-full items-center justify-between overflow-hidden rounded-lg border bg-white px-4 shadow-md">
        {appLinks.map(({ Icon, link, title }) => (
          <div className="flex flex-col items-center justify-center" key={title}>
            <Button
              size="icon"
              variant="ghost"
              asChild
              className={cn('translate-y-2 transition-all duration-300 hover:bg-white', {
                'translate-y-0': link === pathname,
              })}
            >
              <Link href={link}>
                <Icon className="h-4 w-4 flex-shrink-0" />
              </Link>
            </Button>
            <span
              className={cn('translate-y-full text-xs opacity-0 transition-all duration-300', {
                'translate-y-0 opacity-100': link === pathname,
              })}
            >
              {title}
            </span>
          </div>
        ))}
      </div>
    </nav>
  )
}