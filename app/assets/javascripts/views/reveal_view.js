Pos.RevealView = Ember.View.extend({
	didInsertElement: function() {
		debugger;
    this._super();
    this.$().foundationCustomForms();
    this.$('input:first').focus();
  }
});