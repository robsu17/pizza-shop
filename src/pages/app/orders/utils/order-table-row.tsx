import { useMutation } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'
import { useState } from 'react'

import {
  getOrderDetails,
  GetOrderDetailsResponse,
} from '@/api/get-order-details'
import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { priceFormatter } from '@/utils/formatter'

import { OrdersDetails } from './orders-details'

interface OrderTableRowProp {
  order: {
    orderId: string
    createdAt: string
    status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
    customerName: string
    total: number
  }
}

export function OrderTableRow({ order }: OrderTableRowProp) {
  const [orderDetailsState, setOrderDetailsState] =
    useState<GetOrderDetailsResponse>()

  const { mutateAsync: orderDetails } = useMutation({
    mutationFn: getOrderDetails,
  })

  async function handleGetOrderDetails(orderId: string) {
    const order = await orderDetails({ orderId })
    setOrderDetailsState(order)
  }

  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              onClick={() => handleGetOrderDetails(order.orderId)}
              variant={'outline'}
              size={'sm'}
            >
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>

          <OrdersDetails order={orderDetailsState} />
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell className="">
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {priceFormatter.format(order.total)}
      </TableCell>
      <TableCell>
        <Button variant={'outline'} size={'sm'}>
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant={'ghost'} size={'sm'}>
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
