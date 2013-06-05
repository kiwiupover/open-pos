DS.RESTAdapter.configure("plurals", { category: "categories" });

Pos.Store = DS.Store.extend({
  revision: 12
});



// DS.RESTAdapter.map('Pos.Category', {
//   products: { embedded: 'always'}
// });

// DS.RESTAdapter.map('Pos.Order', {
//   lineItems: { embedded: 'always'}
// });
