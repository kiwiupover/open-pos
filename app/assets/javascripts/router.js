Pos.Router.map(function() {
	this.resource('orders', function() {
    this.resource('order', {path:':order_id'}, function() {
    	this.route('payment');
    	this.route('edit');
    });
    this.route('new');
    this.route('current');
  });
	// this.resource('categories', function() {
	// 	this.resource('category', {path:':category_id'});
	// });
	this.resource('products', function() {
		this.resource('product', {path:':product_id)'});
	})
});
