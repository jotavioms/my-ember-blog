import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  tagName: 'button',

  classNames: [
    'app-button'
  ],

  classNameBindings: [
    'disabled'
  ],

  attributeBindings: [
    'data-test',
    'disabled'
  ],

  isLoading: false,
  disabled: false,

  async click(event) {
    const onClick = this.get('onClick') || (() => {});

    this.set('isLoading', true);
    this.set('disabled', true);
    try {
      await onClick(event);
    } finally {
      this.set('isLoading', false);
      this.set('disabled', false);
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
