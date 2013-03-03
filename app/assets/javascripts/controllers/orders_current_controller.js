Pos.OrdersCurrentController = Ember.ObjectController.extend({
  addListItem: function(item) {
    var order = this.controllerFor('ordersCurrent').get('model'),
    		lineItems = order.get('lineItems');
    console.log(item.get("item.id"));
    lineItems.createRecord({
      productId: item.id,
      name: item.get('name'),
      priceCents: item.get('priceCents')
    });
	},
	tax: function() {
    return  parseInt(this.get('cents') * 0.095)
  }.property('cents'),

  total: function() {
    return  parseInt(this.get('cents') + this.get('tax'))
  }.property('cents', 'tax')
});
