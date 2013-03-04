Pos.OrderController = Ember.ObjectController.extend({
  addListItem: function(item) {
    var order = this.controllerFor('order').get('model'),
        lineItems = order.get('lineItems');


    lineItems.forEach(function(lineItem) {
      if(lineItem.get('productId') === parseInt(item.id)) {
        var q = lineItem.get('quantity');
        var qq = q+1;
        lineItem.set('quantity', qq);
      } else if (!lineItem.get('productId') !== parseInt(item.id)) {
        lineItems.createRecord({
          isNew: true,
          productId: item.id,
          quantity: 1,
          name: item.get('name'),
          priceCents: item.get('priceCents')
        });
      }
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
  },
  tender: function() {
    this.set('paid', true);
    // this.set('taxCents', this.tax);
    // this.set('subtotalCents', this.cents);
    // this.set('totalCents', this.total);
    this.store.commit();
    return this.transitionTo('orders.new');
  },
  // lineItemQuantity: function() {
  //   var q = lineItem.get('quantity');
  //   return lineItem.set('quantity', q++);
  //   return lineItem.get('quantity');
  // }.property('quantity')
});
