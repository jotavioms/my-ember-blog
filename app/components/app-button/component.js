import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  tagName: 'button',

  classNames: [
    'app-button'
  ],

  attributeBindings: [
    'data-test'
  ],

  layout: hbs`
    {{yield}}
  `,
});
