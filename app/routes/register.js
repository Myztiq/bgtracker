import Ember from 'ember';
import RouteOnlyInsecure from 'bgtracker/mixins/route-only-insecure';
var Route = Ember.Route.extend(RouteOnlyInsecure, {
  secured: false,
  actions: {
    register: function() {
      var cleanupUser, email, password;
      this.controller.set('isProcessing', true);
      email = this.controller.get('email');
      password = this.controller.get('password');
      this.controller.set('password', null);
      cleanupUser = new Ember.RSVP.Promise(function(resolve) {
        if (Kinvey.getActiveUser() != null) {
          return resolve(Kinvey.getActiveUser().logout({
            force: true
          }));
        } else {
          return resolve();
        }
      });
      return cleanupUser.then((function(_this) {
        return function() {
          return Kinvey.User.signup({
            email: email,
            username: email,
            password: password
          }).then(function() {
            return Kinvey.getActiveUser().logout().then(function() {
              _this.controller.set('isProcessing', false);
              return _this.get('session').authenticate('authenticator:custom', {
                email: email,
                password: password
              }).then(function() {
                return _this.transitionTo('index');
              });
            });
          });
        };
      })(this))["catch"]((function(_this) {
        return function(error) {
          _this.controller.set('isProcessing', false);
          return _this.controller.set('error', error.errors.description);
        };
      })(this));
    }
  }
});

export default Route;
