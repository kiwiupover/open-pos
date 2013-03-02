Pos.Order = DS.Model.extend({
  customerEmail: DS.attr('string'),
  paid: DS.attr('boolean'),
  hold: DS.attr('boolean'),
  subtotalCents: DS.attr('number'),
  taxCents: DS.attr('number'),
  totalCents: DS.attr('number')
});