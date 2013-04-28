Pos.CategoryItemView = Ember.View.extend({
	tagName: 'li',
  classNames: ['category'],
  touchStart: function() {
    this.trigger('changeCategory');
  },
  mouseDown: function() {
    this.trigger('changeCategory');
  },

  changeCategory: function(e) {
  	var contentId = this.content.id
  	this.get('controller').send('changeView', contentId)
  }
});



