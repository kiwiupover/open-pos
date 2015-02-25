/* global $ */
Pos.ApplicationRoute = Ember.Route.extend({
  setupController: function() {
    var categories = this.store.find('category'),
        category = this.store.find('category', 1);

    this.controllerFor('categories').set('model', categories);
    this.controllerFor('category').set('model', category);
  },
  actions: {
    openModal: function(content) {
      this.get('controllers.reveal').set('content', content);
      $('#myModal').reveal();
    }
  }
});
