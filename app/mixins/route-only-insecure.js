import Ember from 'ember';

var RouteOnlyInsecure = Ember.Mixin.create({
  beforeModel: function(transition) {
    this._super(transition);
    if (this.get('session').get('isAuthenticated')) {
      return this.transitionTo('index');
    }
  }
});

export default RouteOnlyInsecure;
