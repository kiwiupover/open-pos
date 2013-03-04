Pos.OrderView = Ember.View.extend({
	templateName: 'orders/current',
	didInsertElement: function() {
		return this.get('controller').get('model').reload();
	}

});
