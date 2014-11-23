import Ember from 'ember';
import RouteOnlyInsecure from 'bgtracker/mixins/route-only-insecure';

var Route = Ember.Route.extend(RouteOnlyInsecure, {
  secured: false,
  actions: {
    login: function() {
      var email, password;
      this.controller.set('isProcessing', true);
      email = this.controller.get('email');
      password = this.controller.get('password');
      this.controller.set('password', null);
      this.controller.set('isProcessing', false);
      return this.get('session').authenticate('authenticator:custom', {
        email: email,
        password: password
      }).then((function(_this) {
        return function() {
          return _this.transitionTo('index');
        };
      })(this), (function(_this) {
        return function(err) {
          return _this.controller.set('error', err.description);
        };
      })(this));
    }
  }
});

export default Route;

