import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './utils/day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './utils/month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './utils/month-orders-amount-card'
import { MonthRevenueCard } from './utils/month-revenue-card'
import { PopularProductsChart } from './utils/popular-products-chart'
import { RevenueChart } from './utils/revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
