import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('about');
    this.route('page-not-found', {
        path: '/*wildcard'
    });
    this.route('users', function() {
        this.route('new');

        this.route('view', {
            path: 'view/:id'
        });
    });
});

export default Router;
