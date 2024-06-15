import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { Building, ChevronDown, LogOut } from 'lucide-react'

import { Button } from './ui/button'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={'outline'}
          className="flex select-none items-center gap-2"
        >
          Pizza Shop
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-foreground/2 mt-1.5 w-56 rounded-md border bg-background p-2"
      >
        <DropdownMenuLabel className="flex flex-col px-1">
          <span>Diego Fernandes</span>
          <span className="text-xs font-normal text-muted-foreground">
            diego@rocketseat.com.br
          </span>
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="my-2 h-1 w-full rounded-md bg-foreground/5" />

        <DropdownMenuItem className="flex items-center rounded-md px-2 py-1 outline-none hover:bg-foreground/5">
          <Building className="mr-2 h-4 w-4" />
          <span>Perfil da loja</span>
        </DropdownMenuItem>

        <DropdownMenuItem className="flex items-center rounded-md px-2 py-1 text-rose-500 outline-none hover:bg-foreground/5 dark:text-rose-400">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
