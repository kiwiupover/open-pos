Pos.OrderController = Ember.ObjectController.extend({
  addListItem: function(item) {
    var order = this.controllerFor('order').get('model'),
        lineItems = order.get('lineItems');
    console.log(order.id);
    lineItems.createRecord({
      isNew: true,
      productId: item.id,
      name: item.get('name'),
      priceCents: item.get('priceCents')
    });
    this.store.commit();
  },
  tax: function() {
    return  parseInt(this.get('cents') * 0.095)
  }.property('cents'),

  total: function() {
    return  parseInt(this.get('cents') + this.get('tax'))
  }.property('cents', 'tax'),

  payment: function() {
    return this.transitionToRoute('order.payment');
  }
});
