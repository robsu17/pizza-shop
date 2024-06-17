import { useQuery } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'

import { getOrders } from '@/api/get-orders'
import { Pagination } from '@/components/pagination'

import { OrderTable } from './utils/order-table'
import { OrderTableFilters } from './utils/order-table-filters'

export function Orders() {
  const { data: result } = useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  })

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter">Pedidos</h1>
      </div>
      <div className="space-y-2.5">
        <OrderTableFilters />

        <div className="rounded-md border">
          <OrderTable orders={result?.orders} />
        </div>

        <div>
          <Pagination
            pageIndex={result?.meta.pageIndex || 0}
            totalCount={result?.meta.totalCount || 0}
            perPage={result?.meta.perPage || 0}
          />
        </div>
      </div>
    </>
  )
}
