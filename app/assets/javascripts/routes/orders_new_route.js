Pos.OrdersNewRoute = Ember.Route.extend({
  beforeModel: function() {
    var newOrder =  this.store.createRecord('order'),
        self = this;

    newOrder.save().then(function(order){
      self.transitionTo('order', order);
    });
  }
});
