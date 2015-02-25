Pos.OrderController = Ember.ObjectController.extend({
  needs: ['lineItems'],
  sortProperties: ['lineItems.id'],
  sortAscending: true,
  customLineItem: false,
  editing: false,

  actions: {
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
        var lineItem = {
          name: name,
          priceCents: priceCents,
          quantity: 1,
          orderId: orderId
        };

        lineItem = this.store.createRecord('lineItem', lineItem);
        lineItem.save();

        this.get('model').save();
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

    payment: function() {
      return this.transitionToRoute('order.payment');
    },

    tender: function() {

      this.setProperties({
        paid: true,
        taxCents: this.tax,
        subtotalCents: this.cents,
        totalCents: this.total,
      });

      this.get('model').save();
      return this.transitionToRoute('orders.new');
    }
  },

  tax: function() {
    var taxableLineItems = this.get('lineItems').findProperty('product.taxable', true);
    return  parseInt(this.get('cents') * 0.095, 10);
  }.property('cents', 'lineItems'),

  total: function() {
    return  parseInt(this.get('cents') + this.get('tax'), 10);
  }.property('cents', 'tax'),

  _priceInCents: function(price) {
    var splitPrice = price.split('.');

    if (splitPrice[1] > 0) {
      return parseInt(splitPrice[0] * 100, 10) + parseInt(splitPrice[1], 10);
    } else {
      return parseInt(splitPrice[0] * 100, 10);
    }
  }
});
