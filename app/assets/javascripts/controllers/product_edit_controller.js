Pos.ProductsEditController = Ember.ObjectController.extend({

  nameAndPrice: function(){
    return this.get('name') + " - " + this.get('priceCents');
  }.property('name', 'priceCents'),

  actions: {
    save: function() {
      alert('wahoo');
    }
  }

});
