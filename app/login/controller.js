import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import { observer } from '@ember/object';

export default Controller.extend({
  store: service(),
  userToken: null,

  async init(...args) {
    this._super(...args);

    const store = this.get('store');
    this.set('userToken', store.get('token'));
  },

  hasUserToken: observer('userToken', function() {
    debugger;
    this.transitionToRoute('blog-dashboard');
  }),
});
