import Controller from '@ember/controller';
import {inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  actions: {
    createPost({title = 'Moebius', content = 'Dalhe aquela!'}) {
      const store = this.get('store');
      const post = store.createRecord('post', {title, content});

      if(!post) {
        this.set('errorMessage', 'Não foi possível salvar seu post.')
      }

      alert('Seu post foi salvo com sucesso!');
      this.transitionToRoute('blog-posts');
      return post;
      // return post.save();
    },

    returnToBlogPosts() {
      return this.transitionToRoute('blog-posts');
    },
  },
});
