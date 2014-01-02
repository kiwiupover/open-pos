Pos.CategoriesController = Ember.ArrayController.extend({
	needs: 'category',

  actions: {
    changeView: function(category) {
      var categoryModel = this.store.find('category', category);
      this.get('controllers.category').set('model', categoryModel);
    }
  }
});
