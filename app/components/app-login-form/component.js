import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  classNames: [
    'app-login-form',
  ],

  email: null,
  password: null,

  actions: {
    async login() {
      const {
        email,
        password,
        onLogin,
      } = this.getProperties('email','password', 'onLogin');

      // Nas versoes antigas do ember é utilizado o método this.sendAction()
      const isSuccess = await onLogin({email, password});

      if(!isSuccess) {
        this.set('showErrorMessage', true);
      }
    },
  },

  layout: hbs`
    <!-- Colocar uma div com border, colocar imagem e input dentro, input sem estilo -->
    <div class="login-email">
      <i class="login-email-icon"></i>
      {{app-input
        value=email
        classNames='login-email-input'
        type='email'
        placeholder='Email'
      }}
    </div>

    {{app-input
      value=password
      classNames='login-password'
      type='password'
      placeholder='Password'
    }}

    {{#if showErrorMessage}}
     <p>Email ou senha inválidos</p>
    {{/if}}

    {{#app-button onClick=(action 'login') classNames='primary'}}
      Login
    {{/app-button}}
  `,
});
