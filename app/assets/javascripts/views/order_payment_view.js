Pos.OrderPaymentView = Ember.View.extend({
	didInsertElement: function() {
		this.$('input').val("");
		this.$('#payments').reveal({
			closeOnBackgroundClick: false,
			animationSpeed: 150
		});
	}
});