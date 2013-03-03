Pos.OrdersCurrentRoute = Ember.Route.extend({
  model: function() {
    return Pos.Order.find('current');
  }
});