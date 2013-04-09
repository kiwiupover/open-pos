Pos.CategoriesController = Ember.ArrayController.extend({
	needs: 'category',
	changeView: function(category) {
    this.get('controllers.category').set('model', Pos.Category.find(category));
  }
});

