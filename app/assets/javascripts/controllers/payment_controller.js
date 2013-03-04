Pos.OrderPaymentController = Ember.ObjectController.extend({
	needs: 'order',
	amountTendered: "",

	changeDue: function() {
    var amountTendered = parseInt(this.get('amountTendered') * 100),
    		total =  this.controllerFor('order').get('total'),
    		change = parseInt(amountTendered - total)

   	if (change > 0) {
   		return change;
   	}
  }.property('amountTendered', 'total'),

  tender: function() {
		debugger;
		var amountTendered = this.get('amountTendered');
	}

});