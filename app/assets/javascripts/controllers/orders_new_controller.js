Pos.OrdersNewController = Ember.ObjectController.extend({
  addListItem: function(item) {
    var order = this.controllerFor('ordersNew').get('model'),
    		lineItems = order.get('lineItems');
    lineItems.createRecord({
      isNew: true,
      productId: item.id,
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
    return  this.get('cents') * 0.045
  }.property('cents'),

  total: function() {
    return  parseInt(this.get('cents') + this.get('tax'))
  }.property('cents', 'tax'),

  payment: function() {
    order = this.controllerFor('ordersNew').get('model');
    this.transitionTo('order.payment', order);
  }
});
