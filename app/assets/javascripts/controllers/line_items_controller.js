Pos.LineItemsController = Ember.ArrayController.extend({
	needs: 'order',
	addLineItem: function(item) {
		var lineItems = this.get('controllers.order').get('lineItems');
    lineItems.createRecord({
      isNew: true,
      productId: item.id,
      name: item.get('name'),
      priceCents: item.get('priceCents')
    });
    // this.store.commit();
	},
	removeListItem: function(item) {
    var listItems = this.get('controllers.order').get('lineItems');
    listItems.removeObject(item);
    // this.store.commit();
  }
});
