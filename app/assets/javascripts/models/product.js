Pos.Product = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  shortDescription: DS.attr('string'),
  priceCents: DS.attr('number'),
  upcCode: DS.attr('string'),
  image: DS.attr('string'),
  taxable: DS.attr('boolean'),

  category: DS.belongsTo('category', { async: true }),
  lineItems: DS.hasMany('lineItem', { async: true })

});
