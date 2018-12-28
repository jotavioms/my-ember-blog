import Service, {inject as service} from '@ember/service';
import fetch from 'fetch';

export default Service.extend({
  store: service(),

  async request(url, ...params) {
    debugger;

    const adapter = this.get('store').adapterFor('application');
    const urlPath = `${adapter.get('host')}/${url}`;

    return await fetch(urlPath, {
      method: 'post',
      body: JSON.stringify(params[0]),
    });
  },
});
