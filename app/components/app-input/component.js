import Component from '@ember/component';

export default Component.extend({
  tagName: 'input',

  classNames: [
    'app-input',
  ],

  attributeBindings: [
    'placeholder',
    'data-test',
    'value',
    'type',
  ],

  input(event) {
    this.set('value', event.target.value);
  },
});
