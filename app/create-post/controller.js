import Controller from '@ember/controller';
import {inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  actions: {
    createPost({title = 'Moebius', content = 'Dalhe aquela!'}) {
      const store = this.get('store');
      const post = store.createRecord('post', {title, content});

      return post;
      // return post.save();
    }
  },
});
