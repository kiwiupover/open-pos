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
  isEditing: function() {
    return this.get('controller').get('editing');
  },

  actions: {
    removeLineItem: function(lineItem) {
      this.get('controller').send('removeListItem', lineItem);
    }
  }
});
