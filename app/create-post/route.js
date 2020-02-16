import Route from '@ember/routing/route';
import AuthenticatedRoute from 'my-ember-blog/mixins/authenticated-route';

export default Route.extend(AuthenticatedRoute, {
});
