import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),
  auth: service(),

  classNames: [
    'app-login-form',
  ],

  userEmail: null,
  userPassword: null,

  actions: {
    async login() {
      const {
        auth,
        store,
        userEmail,
        userPassword,
      } = this.getProperties('auth','store','userEmail','userPassword');

      try {
        await auth.login({
          email: userEmail,
          password: userPassword,
        });

        debugger;

        if(store.get('token')) {
          debugger;
          alert('tem token');
        }

      } catch(exception) {
        alert(exception);
      }
    },
  },

  layout: hbs`
    {{app-input
      value=userEmail
      classNames='login-email'
      type='email'
      placeholder='Email'
    }}
    {{app-input
      value=userPassword
      classNames='login-password'
      type='password'
      placeholder='Password'
    }}
    {{#app-button click=(action 'login') classNames='primary'}}
      Login
    {{/app-button}}
  `,
});
