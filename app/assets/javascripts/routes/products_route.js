Pos.ProductsRoute = Ember.Route.extend({
  model: function(){
    return Pos.Product.find();
  }
});
