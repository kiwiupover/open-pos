Pos.OrderController = Ember.ObjectController.extend({
	addListItem: function(item) {
    var order = this.controllerFor('order').get('model'),
    		lineItems = order.get('lineItems');
    debugger;
    console.log(item.get("item.id"));
    lineItems.createRecord({
      productId: item.id

    });
	}
});
