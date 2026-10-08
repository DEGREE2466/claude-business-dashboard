'use strict';

const data = require('./data');
const { getTotalRevenue, getCustomerCount, getOrderCount, getRecentTransactions } = require('./dashboard');

const revenue = getTotalRevenue(data);
const customers = getCustomerCount(data);
const orders = getOrderCount(data);
const recent = getRecentTransactions(data, 5);

const divider = '─'.repeat(40);

console.log('\n  BUSINESS DASHBOARD');
console.log(divider);
console.log(`  Total Revenue    : $${revenue.toFixed(2)}`);
console.log(`  Customers        : ${customers}`);
console.log(`  Orders           : ${orders}`);
console.log(divider);
console.log('  Recent Transactions');
console.log(divider);

recent.forEach((tx) => {
  console.log(`  [${tx.date}]  $${tx.amount.toFixed(2).padStart(9)}  ${tx.description}`);
});

console.log(divider + '\n');
