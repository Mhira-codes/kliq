"use client";
import { useState } from "react";
import { cards, orders } from "@/data/orders";
import { Card } from "./components/Card";
import { OrdersTable } from "./components/CardTable";

export default function AdminDashboard() {
  const [filter, setFilter] = useState<string | null>(null);

  const filteredOrders =
    filter === "all"
      ? orders
      : filter
      ? orders.filter((order) => order.status === filter)
      : [];

  return (
    <div className="h-screen overflow-hidden flex  justify-center px-4">
      <div className="flex flex-col items-center gap-8 max-h-full overflow-y-auto py-8">
        <div className="text-center text-purple-600 text-4xl font-semibold">KLIQ</div>

        <div className="flex justify-center gap-4 flex-wrap">
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

        {(filter === "all" || (filter && filteredOrders.length > 0)) && (
          <div className="w-max">
            <OrdersTable orders={filteredOrders} />
          </div>
        )}
      </div>
    </div>
  );
}
