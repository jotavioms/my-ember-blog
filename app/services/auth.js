import Service, {inject as service} from '@ember/service';
import { bool } from '@ember/object/computed';

export default Service.extend({
  store: service(),
  request: service(),
  token: null,

  isAuthenticated: bool('token'),

  // NAMED PARAMS
  // ADAPTER = DEFINE URL DO ENDPOINT, CONTRATO, ETC
  async login({ email, password}) {
    const requestService = this.get('request');
    const options = {
      method: 'post',
      body: JSON.stringify({email, password}),
    };

    try {
      const response = await requestService.request('login', options);

      if (!response.ok) {
        return false;
      }

      const data = await response.json();
      this.set('token', data.token);
      return true;
    } catch (error) {
      alert(error);
      return false;
    }
  },
});
