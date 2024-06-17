import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { GetOrderDetailsResponse } from '@/api/get-order-details'
import { OrderStatus } from '@/components/order-status'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { priceFormatter } from '@/utils/formatter'

interface OrderDetailsProps {
  order?: GetOrderDetailsResponse
}

export function OrdersDetails({ order }: OrderDetailsProps) {
  return (
    <DialogContent>
      <DialogHeader>Pedido: {order?.id}</DialogHeader>
      <DialogDescription>Detalhes do pedido</DialogDescription>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                {order?.status && <OrderStatus status={order.status} />}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    {order?.customer.name}
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    {order?.customer.phone ?? 'Nenhum'}
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Email</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    {order?.customer.email}
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-muted-foreground">
                    {order?.createdAt &&
                      formatDistanceToNow(order.createdAt, {
                        locale: ptBR,
                        addSuffix: true,
                      })}
                  </span>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order?.orderItems.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.product.name}</TableCell>
                  <TableCell className="text-right">{item.quantity}</TableCell>
                  <TableCell className="text-right">
                    {priceFormatter.format(item.priceInCents)}
                  </TableCell>
                  <TableCell className="text-right">
                    {priceFormatter.format(item.priceInCents * item.quantity)}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
          <TableFooter>
            <TableCell colSpan={3}>Total do pedido</TableCell>
            <TableCell className="text-right font-medium">
              {order?.totalInCents &&
                priceFormatter.format(order?.totalInCents)}
            </TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  )
}
