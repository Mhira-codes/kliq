'use client';
import { useState } from 'react';
import { cards, orders } from '@/data/orders';
import { Card } from './components/Card';
import { OrdersTable } from './components/CardTable';


export default function AdminDashboard() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredOrders =
    filter === 'all'
      ? orders
      : filter
      ? orders.filter(order => order.status === filter)
      : [];

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between gap-4 flex-wrap">
        {cards.map((card) => (
          <Card
            key={card.label}
            count={card.count}
            label={card.label}
            status={card.status}
            onClick={() => {
              if (card.count > 0) setFilter(card.status);
            }}
            isActive={filter === card.status}
          />
        ))}
      </div>

      {(filter === 'all' || (filter && filteredOrders.length > 0)) && (
        <OrdersTable orders={filteredOrders} />
      )}
    </div>
  );
}
