Pos.OrdersController = Ember.ArrayController.extend({
	addListItem: function(item) {
		debugger;
		var order = this.controllerFor('category').get('model'),
        listItems = order.get('order.listItems');
    console.log(item.get("item.id"));
    debugger;
    listItem.createRecord({
      productId: item.id,
      cents: food.get('cents')
    });
	}
});

// addFood: function(food) {
//   var table = this.controllerFor('table').get('model'),
//       tabItems = table.get('tab.tabItems');

//   tabItems.createRecord({
//     food: food,
//     cents: food.get('cents')
//   });
// }
