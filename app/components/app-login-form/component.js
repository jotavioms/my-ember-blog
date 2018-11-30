import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';
import {inject as service} from '@ember/service';

export default Component.extend({
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
        userEmail,
        userPassword,
      } = this.getProperties('auth','userEmail','userPassword');

      try {
        await auth.login({
          email: userEmail,
          password: userPassword,
        });
      } catch(exception) {
        console.log(exception);
      }

    },
  },

  layout: hbs`
    {{app-input
      value=userEmail
      className='login-email'
      type='email'
    }}
    {{app-input
      value=userPassword
      className='login-password'
      type='password'
    }}
    {{#app-button click=(action 'login')}}
      Login
    {{/app-button}}
  `,
});
