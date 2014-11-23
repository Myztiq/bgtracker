import Ember from 'ember';
var Router;

Router = Ember.Router.extend({
  location: 'hash'
});

Router.map(function() {
  this.route('login');
  this.route('register');
  this.route('logout');
  this.route('forgot-password');
  this.route('dashboard');
});

export default Router;

