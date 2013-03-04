Pos.OrderRoute = Ember.Route.extend({
  model: function(params) {
    return Pos.Order.find(params.order_id);
  },
  events: {

  }
});
