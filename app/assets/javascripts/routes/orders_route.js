Pos.OrdersRoute = Ember.Route.extend({
  model: function() {
    return Pos.Order.find();
  },
  setupController: function(model) {
    return this.controllerFor('ordersIndex').set('content', model);
  },
});
