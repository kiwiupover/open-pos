Pos.OrdersRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('order');
  },
  setupController: function(model) {
    return this.controllerFor('ordersIndex').set('content', model);
  },
});
