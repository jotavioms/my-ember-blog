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
