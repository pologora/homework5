/* eslint-disable no-undef */
const customFilterUnique = require('../tasks/customFilterUnique');

describe('Custom uniq', () => {
  test('Should return an array', () => {
    expect(Array.isArray(customFilterUnique([], () => {}))).toBeTruthy();
  });
});
