import Service, {inject as service} from '@ember/service';
import fetch from 'fetch';

export default Service.extend({
  store: service(),

  async request(url, ...params) {
    const store = this.get('store');
    const adapter = store.adapterFor('application');
    const urlPath = `${adapter.get('host')}/${url}`;
    const token = store.get('token');

    await fetch(urlPath, {
      method: 'post',
      body: JSON.stringify(...params),
    });
  },
});
