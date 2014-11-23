import Ember from 'ember';

var Controller = Ember.Controller.extend({
  actions: {
    forgotPassword: function() {
      var self = this;
      return Kinvey.User.resetPassword(this.get('email')).then(function(){
        return self.set('resetSent', true);
      });
    }
  }
});

export default Controller;
