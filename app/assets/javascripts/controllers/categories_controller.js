Pos.CategoriesController = Ember.ArrayController.extend({
	changeView: function(category) {
    this.controllerFor('category').set('model', Pos.Category.find(category));
  }
});

