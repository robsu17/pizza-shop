import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableRow } from './order-table-row'

interface OrderTableProps {
  items: []
}

export function OrderTable({ items = [] }: OrderTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[64px]"></TableHead>
          <TableHead className="w-[140px]">Identificador</TableHead>
          <TableHead className="w-[180px]">Realizado há</TableHead>
          <TableHead className="w-[140px]">Status</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead className="w-[140px]">Total do pedido</TableHead>
          <TableHead className="w-[164px]"></TableHead>
          <TableHead className="w-[132px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.from({ length: 10 }).map((_, i) => {
          return <OrderTableRow key={i} />
        })}
      </TableBody>
    </Table>
  )
}
