Pos.OrderPaymentView = Ember.View.extend({
	didInsertElement: function() {
		this.$('#payments').reveal();
	}
});