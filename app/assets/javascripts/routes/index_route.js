Pos.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('orders');
  }
});
