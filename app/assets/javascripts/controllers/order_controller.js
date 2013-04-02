Pos.OrderController = Ember.ObjectController.extend({
  needs: ['order', 'lineItems'],

  addListItem: function(item) {
    this.get('controllers.lineItems').send('addLineItem', item);
  },
  removeListItem: function(item) {
    this.get('controllers.lineItems').send('removeListItem', item);
  },
  tax: function() {
    return  parseInt(this.get('cents') * 0.095)
  }.property('cents'),

  total: function() {
    return  parseInt(this.get('cents') + this.get('tax'))
  }.property('cents', 'tax'),

  payment: function() {
    // this.store.commit();
    return this.transitionToRoute('order.payment');
  },
  tender: function() {
    this.set('paid', true);
    this.set('taxCents', this.tax);
    this.set('subtotalCents', this.cents);
    this.set('totalCents', this.total);
    this.store.commit();
    return this.transitionToRoute('orders.new');
  }
});
