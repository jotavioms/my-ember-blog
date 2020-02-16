import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  classNames: [
    'app-create-post-form',
  ],

  title: null,
  content: null,

  actions: {
    createPost() {
      const {title, content} = this.getProperties('title', 'content');

      this.get('createPost')({title, content});
    },

    returnToBlogPosts() {
      this.get('returnToBlogPosts')();
    },
  },

  layout: hbs`
    Title
    {{app-input
      value=title
      classNames='create-post-title'
      type='text'
    }}

    Content
    {{app-textarea
      rows=4
      cols=10
      value=content
    }}

    {{#app-button onClick=(action 'returnToBlogPosts') classNames='danger'}}
      Cancel
    {{/app-button}}

    {{#app-button onClick=(action 'createPost') classNames='primary'}}
      Save
    {{/app-button}}
  `,
});
