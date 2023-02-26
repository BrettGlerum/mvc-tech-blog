const { User } = require('../models');

const users = [
  {
    username: 'name1',
    email: 'name1@cbc.ca',
    password: 'password123',
  },
  {
    username: 'name2',
    email: 'name2@cbc.ca',
    password :'password123',
  },
  {
    username: 'name3',
    email: 'name3@cbc.ca',
    password: 'password123',
  },
  {
    username: 'name4',
    email: 'name4@cbc.ca',
    password: 'password123',
  },
  {
    username: 'name5',
    email: 'name5@cbc.ca',
    password: 'password123',
  },
  {
    username: 'name6',
    email: 'name6@cbc.ca',
    password: 'password123',
  },
  {
    username: 'name7',
    email: 'name7@cbc.ca',
    password: 'password123',
  },
  {
    username: 'name8',
    email: 'name8@cbc.ca',
    password: 'password123',
  },
  {
    username: 'name9',
    email: 'name9@cbc.ca',
    password: 'password123',
  },
  {
    username: 'name10',
    email: 'name10@cbc.ca',
    password: 'password123',
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;