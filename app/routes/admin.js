import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('product');
  },
  actions: {
    save(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
      this.transitionTo('store');
    },
    update(product, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          product.set(key, params[key]);
        }
      });
      product.save();
      this.transitionTo('store');
    },
    delete(product) {
      product.destroyRecord();
      this.transitionTo('store');
    }
  }
});
