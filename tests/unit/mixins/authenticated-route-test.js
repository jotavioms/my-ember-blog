import EmberObject from '@ember/object';
import AuthenticatedRouteMixin from 'my-ember-blog/mixins/authenticated-route';
import { module, test } from 'qunit';

module('Unit | Mixin | authenticatedRoute', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let AuthenticatedRouteObject = EmberObject.extend(AuthenticatedRouteMixin);
    let subject = AuthenticatedRouteObject.create();
    assert.ok(subject);
  });
});
