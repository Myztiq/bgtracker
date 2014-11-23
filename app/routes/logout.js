import Ember from 'ember';
var Route = Ember.Route.extend({
  secured: true,
  beforeModel: function(transition) {
    this._super(transition);
    return transition.send('invalidateSession');
  }
});

export default Route;
