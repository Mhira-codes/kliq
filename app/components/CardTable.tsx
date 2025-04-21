'use client';
import { useState } from 'react';
import { OrderStatus } from '@/data/orders';

type Order = {
  id: string;
  customer: string;
  status: OrderStatus;
  amount: number;
  date: string;
  items: string[];
};

export function OrdersTable({ orders }: { orders: Order[] }) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="overflow-x-auto shadow rounded-lg">
      <table className="min-w-full bg-white border rounded-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3">ID</th>
            <th className="text-left p-3">Customer</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Amount</th>
            <th className="text-left p-3">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className="cursor-pointer hover:bg-gray-50 transition"
            >
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3 capitalize">{order.status}</td>
              <td className="p-3">${order.amount}</td>
              <td className="p-3">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md shadow-lg space-y-4 relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold">Order Details</h2>
            <p><strong>ID:</strong> {selectedOrder.id}</p>
            <p><strong>Customer:</strong> {selectedOrder.customer}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Date:</strong> {selectedOrder.date}</p>
            <p><strong>Amount:</strong> ${selectedOrder.amount}</p>
            <p><strong>Items:</strong> {selectedOrder.items.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}
