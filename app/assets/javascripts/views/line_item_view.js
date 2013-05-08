Pos.LineItemView = Ember.View.extend({
  tagName: 'li',
  classNames: ['line-item'],

  touchEnd: function() {
    if (!this.isEditing()) {
      this.trigger('removeLineItem');
    }
  },
  mouseUp: function() {
    if (!this.isEditing()) {
      this.trigger('removeLineItem');
    }
  },
  removeLineItem: function(e) {
    var contentProductId = this.content.get('productId');
    this.get('controller').send('removeListItem', contentProductId)
  },

  isEditing: function() {
    return this.get('controller').get('editing');
  }
});
