Pos.OrderPaymentController = Ember.ObjectController.extend({
	needs: 'order',
	amountTendered: "",

	changeDue: function() {
    var amountTendered = parseInt(this.get('amountTendered') * 100, 10),
        total =  this.get('controllers.order').get('total'),
        change = parseInt(amountTendered - total, 10);

    if (change > 0) {
      return change;
    }
  }.property('amountTendered', 'total'),

  actions: {
    tender: function() {
      this.get('controllers.order').send('tender');
    },

    closeModal: function () {
      var order = this.get('controllers.order').get('model');
      return this.transitionToRoute('order', order);
    }
  }

});
