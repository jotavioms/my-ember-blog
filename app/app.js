import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Route from '@ember/routing/route';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

// Permite utilizar a lógica de mostrar ou não um header na application.hbs
Route.reopen({
  hasLayout: true,
  setupController() {
    this._super(...arguments)
    this.controllerFor('application').set('showLayout', this.get('hasLayout'))
  }
})

loadInitializers(App, config.modulePrefix);

export default App;
