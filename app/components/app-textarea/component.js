import Component from '@ember/component';

export default Component.extend({
  tagName: 'textarea',

  classNames: [
    'app-textarea',
  ],

  attributeBindings: [
    'rows',
    'cols',
    'placeholder',
    'data-test',
    'value',
  ],

  input(event) {
    this.set('value', event.target.value);
  },
});
