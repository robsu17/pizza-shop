import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'

import { OrderTable } from './utils/order-table'
import { OrderTableFilters } from './utils/order-table-filters'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <OrderTable items={[]} />
        </div>

        <div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
