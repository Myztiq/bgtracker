import Ember from 'ember';
Ember.Route.reopen({
  secured: true,
  beforeModel: function(transition) {
    this._super(transition);
    if (this.get('secured') && !this.get('session').get('isAuthenticated')) {
      transition.abort();
      this.get('session').set('attemptedTransition', transition);
      return transition.send('authenticateSession');
    }
  }
});
