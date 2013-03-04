Pos.OrdersCurrentRoute = Ember.Route.extend({
  model: function() {
    return Pos.Order.find('current');
  },
  setupController: function(controller, model) {
    this.controllerFor('ordersCurrent').set('content', model);
  }
});