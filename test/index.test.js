// test/index.test.js

const { expect } = require('chai');
const checkContrast = require('../index');

describe('color-contrast-checker', () => {
  it('should work with hex colors', () => {
    const result = checkContrast('#ffffff', '#000000');
    expect(result.ratio).to.equal(21);
    expect(result.AA.normalText).to.be.true;
    expect(result.AAA.largeText).to.be.true;
  });

  it('should work with rgb colors', () => {
    const result = checkContrast('rgb(255,255,255)', 'rgb(0,0,0)');
    expect(result.ratio).to.equal(21);
  });

  it('should throw on invalid format', () => {
    expect(() => checkContrast('blue', 'red')).to.throw();
  });

  it('should detect low contrast failure', () => {
    const result = checkContrast('#aaaaaa', '#bbbbbb');
    expect(result.AA.normalText).to.be.false;
  });
});
