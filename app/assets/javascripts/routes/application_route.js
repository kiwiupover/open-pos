Pos.ApplicationRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('tables');
  }
});
