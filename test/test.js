var chai = require('chai');

test('styles', function() {
  sassert(should);
  sassert(expect);
  sassert(assert);
});

test('stack', function() {
  sassert(chai.Assertion.includeStack);
});

test('showDiff', function() {
  sassert(chai.Assertion.showDiff);
});
