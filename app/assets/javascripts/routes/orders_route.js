Pos.OrdersRoute = Ember.Route.extend({
  // model: function() {
  //   return Pos.Order.find('current');
  // },
  // setupController: function(controller, model) {
  //   this.controllerFor('order').set('content', model);
  // },
  redirect: function() {
  	this.transitionTo('orders.current');
  }
});
