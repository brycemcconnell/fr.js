const should = require('should');



describe('my first test', () => { 
    it('is running', () => {
        true.should.equal(true);
    });
});

const conversions = require('../src/fr.conversions.js')

describe('Conversion checking', () => {
	describe('Checking arbitrary angle to cardinal conversions', () => {
		it ('0° should return North', () => {
			conversions.getCardinal(0).should.equal('North');
		});
		it ('178.5° should return South', () => {
			conversions.getCardinal(178.5).should.equal('South');
		});
		it ('46.123° should return North-east', () => {
			conversions.getCardinal(46.123).should.equal('North-east');
		});
		it ('450° should return East', () => {
			conversions.getCardinal(450).should.equal('East');
		});
		it ('-46° should return North-west', () => {
			conversions.getCardinal(-46).should.equal('North-west');
		});
	});
});