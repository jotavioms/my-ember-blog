import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  classNames: ['app-header'],

  layout: hbs`
    <div class="menu">
        <h2>My Blog</h2>
      <div class="links">
        {{#link-to "blog-posts" class="menu-posts"}}
          Posts
        {{/link-to}}
        {{#link-to "create-post" class="menu-create-post"}}
          Create Post
        {{/link-to}}
      </div>
    </div>
  `,
});
