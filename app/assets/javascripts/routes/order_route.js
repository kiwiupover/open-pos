Pos.OrderRoute = Ember.Route.extend({
  model: function(params) {
    return Pos.Order.find(params.order_id);
  },

 //  events: {
	//   addListItem: function(item) {
	//     var order = this.controllerFor('ordersCurrent').get('model'),
	//         lineItems = order.get('lineItems');
	//     console.log(order.id);
	//     lineItems.createRecord({
	//       isNew: true,
	//       productId: item.id,
	//       name: item.get('name'),
	//       priceCents: item.get('priceCents')
	//     });
	//     this.store.commit();
	//   },

	//   payment: function() {
	//   	alert('dsafdas');
	//     this.transitionTo('orders.payment' this.content);
	//   }
	// }
});
