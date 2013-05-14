Pos.OrderRoute = Ember.Route.extend({
  model: function(params) {
    return Pos.Order.find(params.order_id);
  },

  // setupController: function(model) {
  //   return this.controllerFor('lineItems').set('model', Pos.LineItems.find(model.id));
  // },
});
