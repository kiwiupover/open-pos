Pos.LineItemsController = Ember.ArrayController.extend({
    needs: 'order',
    addLineItem: function(item) {

      var lineItems = this.get('controllers.order').get('lineItems'),
          itemId = parseInt(item.id),
          lineItemWithProduct = lineItems.findProperty('productId', itemId);

      if (lineItemWithProduct) {
        var lineItemQuantity = lineItemWithProduct.get('quantity');
        lineItemWithProduct.set('quantity', parseInt(lineItemQuantity + 1));
      } else {
        lineItems.createRecord({
          productId: item.id,
          quantity: 1,
          name: item.get('name'),
          priceCents: item.get('priceCents')
        });
      }

      this.store.commit();
    },

    removeListItem: function(item) {
        var lineItems = this.get('controllers.order').get('lineItems'),
            lineItemWithProduct = lineItems.findProperty('productId', item),
            lineItemQuantity = lineItemWithProduct.get('quantity');

        if (lineItemQuantity > 1) {
          lineItemWithProduct.set('quantity', parseInt(lineItemQuantity - 1));
        } else {
          lineItems.removeObject(lineItemWithProduct);
        }
        this.store.commit();
    }
});
