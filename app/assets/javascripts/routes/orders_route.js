Pos.OrdersRoute = Ember.Route.extend({
  model: function() {
    return Pos.Order.find();
  }
});
