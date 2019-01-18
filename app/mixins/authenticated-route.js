import Mixin from '@ember/object/mixin';
import {inject as service} from '@ember/service';

export default Mixin.create({
  auth: service(),

  beforeModel() {
    const isAuthenticated = this.get('auth.isAuthenticated');

    if(!isAuthenticated) {
      this.transitionTo('login');
    }
  },
});
