'use client';
import { useState } from 'react';
import { OrderStatus } from '@/data/orders';

type Order = {
id: string;
  sender: string;
  receiver:string;
  pickuploc:string;
  dropoffloc:string;
  items: string[];
  status: OrderStatus;
  ordertype: string;
//   amount: number;
//   date: string;
 
};

export function OrdersTable({ orders }: { orders: Order[] }) {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <div className="overflow-x-auto shadow">
      <table className="min-w-full bg-white ">
        <thead className="bg-amber-50">
          <tr>
            <th className="text-left p-4 ">Order Number</th>
            <th className="text-left p-4">Sender</th>
            <th className="text-left p-4">Receiver</th>
            <th className="text-left p-4">Status</th>
            <th className="text-left p-4">Order Type</th>
       
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr
              key={order.id}
              onClick={() => setSelectedOrder(order)}
              className="cursor-pointer hover:bg-purple-50 transition p-6"
            >
              <td className="p-4">{order.id}</td>
              <td className="p-4">{order.sender}</td>
              <td className="p-4 capitalize">{order.receiver}</td>
              <td className="p-4">{order.status}</td>
              <td className="p-4">{order.ordertype}</td>
         
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="fixed inset-0 bg-purple-100/30 backdrop-blur-sm flex items-center justify-center z-50">

          <div className="bg-purple-100/40 p-6 rounded-xl w-[90%] max-w-md shadow-lg space-y-4 relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-2 right-4 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <h2 className="text-xl font-semibold text-amber-200">Order Details</h2>
            <p><strong>Order Number:</strong> {selectedOrder.id}</p>
            <p><strong>Sender:</strong> {selectedOrder.sender}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Pickup Location:</strong> {selectedOrder.pickuploc}</p>
            <p><strong>Dropoff Location:</strong> {selectedOrder.dropoffloc}</p>
            {/* <p><strong>Amount:</strong> ${selectedOrder.amount}</p> */}
            <p><strong>Items:</strong> {selectedOrder.items.join(', ')}</p>
          </div>
        </div>
      )}
    </div>
  );
}
