Pos.LineItemsController = Ember.ArrayController.extend({
    needs: 'order',
    actions: {
      addLineItem: function(item) {
        var lineItems = this.get('controllers.order').get('lineItems'),
            orderController = this.get('controllers.order'),
            lineItemWithProduct = lineItems.findProperty('product', item);

        if (lineItemWithProduct) {
          var lineItemQuantity = lineItemWithProduct.get('quantity');
          lineItemWithProduct.set('quantity', parseInt(lineItemQuantity + 1, 10));
        } else {
          var lineItem = {
            product: item,
            order: orderController.get('model'),
            quantity: 1,
            name: item.get('name'),
            priceCents: item.get('priceCents'),
            taxable: item.get('taxable')
          };

          lineItem = this.store.createRecord('lineItem', lineItem);

          lineItem.save();
        }
        orderController.get('model').save();
      },

      removeListItem: function(item) {
        var orderController = this.get('controllers.order'),
            lineItems = orderController.get('lineItems'),
            lineItemWithProduct = lineItems.findProperty('id', item.id),
            lineItemQuantity = lineItemWithProduct.get('quantity');

        if (lineItemQuantity > 1) {
          lineItemWithProduct.set('quantity', parseInt(lineItemQuantity - 1, 10));
        } else {
          lineItemWithProduct.destroyRecord();
        }
        orderController.get('model').save();
      },
    }
});
