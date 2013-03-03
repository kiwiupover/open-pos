Pos.CategoryRoute = Ember.Route.extend({
  model: function(params) {
    return Pos.Category.find(params.category_id);
  },
  setupController: function(controller, model) {
    this._super();
    return controller.set('content', model);
  }
});
