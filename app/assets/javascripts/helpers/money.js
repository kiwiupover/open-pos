Ember.Handlebars.registerBoundHelper('money', function(value) {
  if (isNaN(value)) { return "0.00"; }
  var number = value / 100;
  return accounting.formatNumber(number, 2, ",");
});
