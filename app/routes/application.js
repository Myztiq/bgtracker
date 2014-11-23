import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend(ApplicationRouteMixin, {
  secured: false
});

export default ApplicationRoute;

