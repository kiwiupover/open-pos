Pos.Router.map(function() {
	this.resource('orders', function() {
    this.resource('order', {path:':order_id'}, function() {
    	this.route('payment');
    	this.route('edit');
    });
    this.route('new');
    this.route('current');
  });
  this.resource('products', function(){
    this.route('show', {path: ':product_id'});
  });
});
