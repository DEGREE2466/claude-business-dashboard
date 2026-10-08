'use strict';

const customers = [
  { id: 1, name: 'Acme Corp', email: 'billing@acme.com', createdAt: '2026-01-15' },
  { id: 2, name: 'Globex Inc', email: 'accounts@globex.com', createdAt: '2026-02-03' },
  { id: 3, name: 'Initech', email: 'finance@initech.com', createdAt: '2026-03-20' },
  { id: 4, name: 'Umbrella Ltd', email: 'pay@umbrella.com', createdAt: '2026-04-11' },
  { id: 5, name: 'Stark Industries', email: 'stark@stark.com', createdAt: '2026-05-07' },
];

const orders = [
  { id: 101, customerId: 1, amount: 1200.00, status: 'completed', date: '2026-07-01' },
  { id: 102, customerId: 2, amount: 850.50, status: 'completed', date: '2026-07-05' },
  { id: 103, customerId: 3, amount: 3400.00, status: 'pending', date: '2026-07-10' },
  { id: 104, customerId: 1, amount: 620.75, status: 'completed', date: '2026-07-18' },
  { id: 105, customerId: 4, amount: 990.00, status: 'cancelled', date: '2026-07-22' },
  { id: 106, customerId: 5, amount: 5100.00, status: 'completed', date: '2026-08-01' },
  { id: 107, customerId: 2, amount: 300.25, status: 'pending', date: '2026-08-14' },
];

const transactions = [
  { id: 1001, orderId: 101, amount: 1200.00, date: '2026-07-01', description: 'Payment for order #101' },
  { id: 1002, orderId: 102, amount: 850.50, date: '2026-07-05', description: 'Payment for order #102' },
  { id: 1003, orderId: 104, amount: 620.75, date: '2026-07-18', description: 'Payment for order #104' },
  { id: 1004, orderId: 106, amount: 5100.00, date: '2026-08-01', description: 'Payment for order #106' },
  { id: 1005, orderId: 103, amount: 1700.00, date: '2026-08-10', description: 'Partial payment for order #103' },
  { id: 1006, orderId: 107, amount: 300.25, date: '2026-08-14', description: 'Payment for order #107' },
  { id: 1007, orderId: 103, amount: 1700.00, date: '2026-09-01', description: 'Final payment for order #103' },
];

module.exports = { customers, orders, transactions };
