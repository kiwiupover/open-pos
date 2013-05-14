Pos.OrderController = Ember.ObjectController.extend({
  needs: ['lineItems'],
  sortProperties: ['lineItems.id'],
  sortAscending: true,
  customLineItem: false,
  editing: false,

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
    if (price) {
      this.get('lineItems').createRecord({ name: name, priceCents: priceCents, quantity: 1, orderId: orderId });
      this.get('store').commit();
      this.set('customLineItem', false);
    }
  },

  cancelCustomLineItem: function() {
    this.set('customLineItem', false);
  },

  editOrder: function() {
    if (this.get('editing') === true) {
      this.set('editing', false);
    } else {
      this.set('editing', true);
    }
  },

  tax: function() {
    var taxableLineItems = this.get('lineItems').findProperty('product.taxable', true);
    return  parseInt(this.get('cents') * 0.095)
  }.property('cents', 'lineItems'),

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
