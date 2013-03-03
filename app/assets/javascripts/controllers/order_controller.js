Pos.OrderController = Ember.ObjectController.extend({
	addListItem: function(item) {
    var order = this.controllerFor('order').get('model'),
    		lineItems = order.get('lineItems');
    console.log(item.get("item.id"));
    lineItems.createRecord({
      productId: item.id,
      name: item.get('name'),
      priceCents: item.get('priceCents')
    });
	},
	tax: function() {
    return this.cents * 0.095
  }.property('cents'),

  total: function() {
    return this.cents + this.tax
  }.property('cents', 'tax')
});
