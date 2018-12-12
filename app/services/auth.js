import Service, {inject as service} from '@ember/service';
import fetch from 'fetch';

export default Service.extend({
  store: service(),

  // NAMED PARAMS
  // ADAPTER = DEFINE URL DO ENDPOINT, CONTRATO, ETC
  async login({ email, password}) {
    const adapter = this.get('store').adapterFor('application');
    const url = `${adapter.get('host')}/login`;

    const user = await fetch(url, {
      method: 'post',
      body: JSON.stringify({ email, password}),
    });

    // setar o token com o user.token

    // TODO setar token na store para ser recuperada por um serviço de request
  },
});
