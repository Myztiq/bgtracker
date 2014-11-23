import Ember from 'ember';
import RouteOnlyInsecure from 'bgtracker/mixins/route-only-insecure';

var Route = Ember.Route.extend(RouteOnlyInsecure, {
  secured: false
});

export default Route;
