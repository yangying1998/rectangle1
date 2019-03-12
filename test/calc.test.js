/* global chai describe Rectangle it: true */
var expect = chai.expect;

describe('矩形计算器面积计算功能测试', function(){
  it('宽度和高度是整数', function(){
    var r = new Rectangle(4, 5);
    expect(r.area()).to.be.equal(20);
  });

  /*
  it('宽度和高度是小数', function() {
    
  });
  */

  it('宽度和高度是整数字符串', function() {
    var r = new Rectangle('4', '5');
    expect(r.area()).to.be.equal(20);
  });
});

describe('矩形计算器周长计算功能测试', function(){
  it('宽度和高度是整数', function(){
    var r = new Rectangle(4, 5);
    expect(r.perimeter()).to.be.equal(18);
  });

  /*
  it('宽度和高度是小数', function() {
    
  });
  */

  it('宽度和高度是整数字符串', function() {
    var r = new Rectangle('4', '5');
    expect(r.perimeter()).to.be.equal(18);
  });
});