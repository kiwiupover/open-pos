Pos.OrdersNewRoute = Ember.Route.extend({
  model: function() {
    return Pos.Order.createRecord();
  }

});