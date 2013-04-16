Pos.OrdersNewController = Ember.ObjectController.extend({
  addListItem: function(item) {
    var order = this.get('model'),
    		lineItems = order.get('lineItems');
    lineItems.createRecord({
      isNew: true,
      productId: item.id,
      quantity: 1,
      name: item.get('name'),
      priceCents: item.get('priceCents')
    });
    this.store.commit();
    this.content.addObserver('id', this, 'afterCreate');
  },
  afterCreate: function() {
    this.transitionToRoute('order', this.content);
	},
	tax: function() {
    return  parseInt(this.get('cents') * 0.095)
  }.property('cents'),

  total: function() {
    return  parseInt(this.get('cents') + this.get('tax'))
  }.property('cents', 'tax'),

  payment: function() {
    order = this.controllerFor('ordersNew').get('model');
    this.transitionTo('order.payment', order);
  }
});
