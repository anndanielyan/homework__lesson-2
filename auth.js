const { faker } = require('@faker-js/faker');
const _ = require('lodash');

const users = Array.from({ length: 10 }, () => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
}));

console.log(users);
const sortedUsers = _.sortBy(users, 'name');

console.log(sortedUsers);
