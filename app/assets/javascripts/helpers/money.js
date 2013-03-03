Ember.Handlebars.registerBoundHelper('money', function(value) {
  if (isNaN(value)) { return "0.00"; }
  return (value % 100 === 0 ?
          value / 100 + ".00" :
          parseInt(value / 100, 10) + "." + value % 100);
});