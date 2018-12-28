import Service, {inject as service} from '@ember/service';
import fetch from 'fetch';

export default Service.extend({
  store: service(),
  request: service(),

  // NAMED PARAMS
  // ADAPTER = DEFINE URL DO ENDPOINT, CONTRATO, ETC
  async login({ email, password}) {
    //const request = this.get('request').request('login', {email, password})

    const adapter = this.get('store').adapterFor('application');
    const url = `${adapter.get('host')}/login`;

    const user = await fetch(url, {
      method: 'post',
      body: JSON.stringify({ email, password}),
    });

    this.get('store').set('token', user.token);

    debugger;
    // this.get('store').set('token', user.token);
  },
});
