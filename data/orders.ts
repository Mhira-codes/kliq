export type OrderStatus = 'pending' | 'ongoing' | 'completed';

export const orders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    status: 'pending' as OrderStatus,
    amount: 120,
    date: '2025-04-20',
    items: ['Laptop', 'Mouse'],
  },
  {
    id: 'ORD-002',
    customer: 'Alice Smith',
    status: 'ongoing' as OrderStatus,
    amount: 200,
    date: '2025-04-21',
    items: ['Monitor'],
  },
  {
    id: 'ORD-003',
    customer: 'Ben White',
    status: 'completed' as OrderStatus,
    amount: 75,
    date: '2025-04-19',
    items: ['Keyboard'],
  },
];

export const cards = [
  {
    label: 'Pending',
    count: orders.filter(o => o.status === 'pending').length,
    status: 'pending',
  },
  {
    label: 'Ongoing',
    count: orders.filter(o => o.status === 'ongoing').length,
    status: 'ongoing',
  },
  {
    label: 'Completed',
    count: orders.filter(o => o.status === 'completed').length,
    status: 'completed',
  },
  {
    label: 'Total Orders',
    count: orders.length,
    status: 'all',
  },
];
