import DS from 'ember-data';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default DS.RESTAdapter.extend({
  auth: service(),

  host: 'http://localhost:4000',
  
  headers: computed('auth.token', function() {
    const authToken = this.get('auth.token');

    return {
      authorization: authToken,
    }
  }),
});
