'use strict';

function getTotalRevenue(data) {
  return data.orders.reduce((sum, order) => sum + order.amount, 0);
}

function getCustomerCount(data) {
  return data.customers.length;
}

function getOrderCount(data) {
  return data.orders.length;
}

function getRecentTransactions(data, limit = 5) {
  return data.transactions
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

module.exports = { getTotalRevenue, getCustomerCount, getOrderCount, getRecentTransactions };
