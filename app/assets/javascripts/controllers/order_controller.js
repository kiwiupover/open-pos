Pos.OrderController = Ember.ObjectController.extend({
  needs: ['order', 'lineItems'],
  customLineItem: false,
  addListItem: function(item) {
    this.get('controllers.lineItems').send('addLineItem', item);
  },

  removeListItem: function(item) {
    this.get('controllers.lineItems').send('removeListItem', item);
  },

  setUpCustomLineItem: function() {
    this.set('name', '');
    this.set('price', '');
    this.set('customLineItem', true);
  },

  submit: function() {
    var name = this.get('name'),
        price = this.get('price'),
        orderId = this.get('id');
    priceCents = this._priceInCents(price);
    if (price)
    this.get('lineItems').createRecord({ name: name, priceCents: priceCents, orderId: orderId });
    this.get('store').commit();
    this.set('customLineItem', false);
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
    this.set('taxCents', this.tax);
    this.set('subtotalCents', this.cents);
    this.set('totalCents', this.total);
    this.store.commit();
    return this.transitionToRoute('orders.new');
  },
  _priceInCents: function(price) {
    splitPrice = price.split('.');
    if (splitPrice[1] > 0) {
      return parseInt(splitPrice[0] * 100) + parseInt(splitPrice[1]);
    } else {
      return parseInt(splitPrice[0] * 100);
    }
  }
});
