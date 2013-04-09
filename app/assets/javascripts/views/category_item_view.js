Pos.CategoryItemView = Ember.View.extend({
	tagName: 'li',

  mouseDown: function() {
    this.trigger('itsClicked');
  },
  touchStart: function() {
  	this.trigger('itsClicked');
  },
  itsClicked: function(e) {
  	var contentId = this.content.id
  	this.get('controller').send('changeView', contentId)
  }
});
