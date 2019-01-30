import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  classNames: ['app-post-card'],

  actions: {
    showPostDetails() {
      console.log('showPostDetails');
    },
  },

  layout: hbs`
    {{post.title}}
    <br>
    {{post.content}}
    <br>
    {{#app-button onClick=(action 'showPostDetails') classNames='primary'}}
      Visualizar
    {{/app-button}}
    <br><br>
  `,
});
