Pos.Product = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  shortDescription: DS.attr('string'),
  priceCents: DS.attr('number'),
  category: DS.attr('string'),
  upcCode: DS.attr('string'),
  image: DS.attr('string'),

  category: DS.belongsTo('Pos.Category'),
  lineItems: DS.hasMany('Pos.lineItem')

});