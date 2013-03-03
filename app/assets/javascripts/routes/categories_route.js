Pos.CategoriesRoute = Ember.Route.extend({
  model: function() {
    return Pos.Category.find();
  }
});
