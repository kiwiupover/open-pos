Pos.OrderRoute = Ember.Route.extend({
  model: function(params) {
    return Pos.Order.find(params.order_id);
  },
  setupController: function(controller, model) {
    this._super();
    return controller.set('content', model);
  }
});
