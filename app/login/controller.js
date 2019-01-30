import Controller from '@ember/controller';
import {inject as service} from '@ember/service';

export default Controller.extend({
  auth: service(),
  loginFailed: null,

  actions: {
    async onLogin({email, password}) {
      const auth = this.get('auth');
      const response = await auth.login({
        email: email,
        password: password,
      });

      if (!response) {
        return false;
      }

      return this.transitionToRoute('blog-posts');
    },
  },
});
