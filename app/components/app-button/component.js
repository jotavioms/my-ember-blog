import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  isLoading: false,

  tagName: 'button',

  classNames: [
    'app-button'
  ],

  attributeBindings: [
    'data-test'
  ],

  async click(event) {
    const onClick = this.get('onClick') || (() => {});

    this.set('isLoading', true);
    try {
      await onClick(event);
    } finally {
      this.set('isLoading', false);
    }
  },

  layout: hbs`
    {{#if isLoading}}
      {{app-loading}}
    {{else}}
      {{yield}}
    {{/if}}
  `,
});
