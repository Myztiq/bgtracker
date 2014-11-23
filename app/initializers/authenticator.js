import Base from 'simple-auth/authenticators/base';
import Ember from 'ember';
var CustomAuthenticator = Base.extend({
  authenticate: function(options) {
    var cleanupUser;
    cleanupUser = new Ember.RSVP.Promise(function(resolve) {
      if (Kinvey.getActiveUser() != null) {
        resolve(Kinvey.getActiveUser().logout({
          force: true
        }));
        return console.log('Had to cleanup user on login');
      } else {
        return resolve();
      }
    });
    return cleanupUser.then(function() {
      return Kinvey.User.login(options.email, options.password).then(function(user) {
        console.log('Logged User In');
        return {
          id: user.id
        };
      });
    });
  },
  invalidate: function() {
    var _ref;
    return (_ref = Kinvey.getActiveUser()) != null ? _ref.logout({
      force: true
    }) : void 0;
  },
  restore: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      var user;
      user = Kinvey.getActiveUser();
      if (user != null ? user.id : void 0) {
        console.log('Found existing user to restore');
        return resolve();
      } else {
        console.log('No active user found');
        return reject();
      }
    });
  }
});

var Initializer = {
  name: 'authentication',
  before: 'simple-auth',
  after: 'kinvey',
  initialize: function(container) {
    return container.register('authenticator:custom', CustomAuthenticator);
  }
};

export default Initializer;
