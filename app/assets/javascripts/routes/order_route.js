Pos.OrderRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('order', params.order_id);
  }
});
