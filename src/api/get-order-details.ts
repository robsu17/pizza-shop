import { api } from '@/lib/axios'

export interface GetOrderDetailsResponse {
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  id: string
  createdAt: string
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

interface OrderParams {
  orderId: string
}

export async function getOrderDetails({ orderId }: OrderParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)
  return response.data
}
