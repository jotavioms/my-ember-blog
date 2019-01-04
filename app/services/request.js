import Service, {inject as service} from '@ember/service';
import fetch from 'fetch';

export default Service.extend({
  store: service(),

  request(url, options) {
    const adapter = this.get('store').adapterFor('application');
    const urlPath = `${adapter.get('host')}/${url}`;

    return fetch(urlPath, options);
  },
});
