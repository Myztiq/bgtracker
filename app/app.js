import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import 'bgtracker/lib/route';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: 'bgtracker',
  Resolver: Resolver
});

loadInitializers(App, 'bgtracker');

export default App;
