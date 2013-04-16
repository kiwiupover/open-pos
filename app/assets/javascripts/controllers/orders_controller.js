Pos.OrdersController = Ember.ArrayController.extend({
  totalOrders: function() {
    return this.getEach('cents').reduce(function(accum, item) {
      return accum + item;
    }, 0);
  }.property('@each.cents')
});
