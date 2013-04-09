Pos.CategoryItemView = Ember.View.extend({
	tagName: 'li',

  mouseDown: function() {
    this.fire('itsClicked');
  },
  touchStart: function() {
  	this.fire('itsClicked');
  },
  itsClicked: function(e) {
  	var contentId = this.content.id
  	this.get('controller').send('changeView', contentId)
  }
});
