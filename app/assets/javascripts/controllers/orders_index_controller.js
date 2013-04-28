Pos.OrdersIndexController = Ember.ArrayController.extend({
  needs: ['orders'],
  // totalOrders: function() {
  //   return this.get('controllers.orders').getEach('cents').reduce(function(accum, item) {
  //     return accum + item;
  //   }, 0);
  // }.property('@each.cents')

});
