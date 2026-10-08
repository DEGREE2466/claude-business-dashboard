'use strict';

const { test } = require('node:test');
const assert = require('node:assert/strict');
const { getTotalRevenue, getCustomerCount, getOrderCount, getRecentTransactions } = require('../src/dashboard');

const fixture = {
  customers: [
    { id: 1, name: 'Alpha Co', email: 'a@alpha.com', createdAt: '2026-01-01' },
    { id: 2, name: 'Beta Ltd', email: 'b@beta.com', createdAt: '2026-02-01' },
    { id: 3, name: 'Gamma Inc', email: 'g@gamma.com', createdAt: '2026-03-01' },
  ],
  orders: [
    { id: 1, customerId: 1, amount: 100.00, status: 'completed', date: '2026-05-01' },
    { id: 2, customerId: 2, amount: 250.50, status: 'completed', date: '2026-05-10' },
    { id: 3, customerId: 3, amount: 75.25, status: 'pending', date: '2026-05-20' },
  ],
  transactions: [
    { id: 1, orderId: 1, amount: 100.00, date: '2026-05-01', description: 'Payment A' },
    { id: 2, orderId: 2, amount: 250.50, date: '2026-05-10', description: 'Payment B' },
    { id: 3, orderId: 3, amount: 75.25, date: '2026-05-20', description: 'Payment C' },
    { id: 4, orderId: 1, amount: 50.00, date: '2026-04-01', description: 'Earlier payment' },
    { id: 5, orderId: 2, amount: 30.00, date: '2026-06-01', description: 'Latest payment' },
  ],
};

// getTotalRevenue
test('getTotalRevenue returns correct sum of all order amounts', () => {
  const result = getTotalRevenue(fixture);
  assert.equal(result, 425.75);
});

test('getTotalRevenue returns 0 when there are no orders', () => {
  const result = getTotalRevenue({ ...fixture, orders: [] });
  assert.equal(result, 0);
});

test('getTotalRevenue handles a single order', () => {
  const result = getTotalRevenue({ ...fixture, orders: [{ id: 99, customerId: 1, amount: 42.00, status: 'completed', date: '2026-01-01' }] });
  assert.equal(result, 42.00);
});

// getCustomerCount
test('getCustomerCount returns the correct number of customers', () => {
  assert.equal(getCustomerCount(fixture), 3);
});

test('getCustomerCount returns 0 for an empty customers array', () => {
  assert.equal(getCustomerCount({ ...fixture, customers: [] }), 0);
});

// getOrderCount
test('getOrderCount returns the correct number of orders', () => {
  assert.equal(getOrderCount(fixture), 3);
});

test('getOrderCount returns 0 for an empty orders array', () => {
  assert.equal(getOrderCount({ ...fixture, orders: [] }), 0);
});

// getRecentTransactions
test('getRecentTransactions returns transactions sorted newest-first', () => {
  const result = getRecentTransactions(fixture);
  assert.equal(result[0].date, '2026-06-01');
  assert.equal(result[1].date, '2026-05-20');
});

test('getRecentTransactions respects the default limit of 5', () => {
  const result = getRecentTransactions(fixture);
  assert.ok(result.length <= 5);
});

test('getRecentTransactions respects a custom limit', () => {
  const result = getRecentTransactions(fixture, 2);
  assert.equal(result.length, 2);
});

test('getRecentTransactions returns all transactions when limit exceeds total', () => {
  const result = getRecentTransactions(fixture, 100);
  assert.equal(result.length, fixture.transactions.length);
});

test('getRecentTransactions does not mutate the original transactions array', () => {
  const originalOrder = fixture.transactions.map((t) => t.id);
  getRecentTransactions(fixture, 5);
  const afterOrder = fixture.transactions.map((t) => t.id);
  assert.deepEqual(originalOrder, afterOrder);
});
