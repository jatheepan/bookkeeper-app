import Ember from 'ember';

const bookmarks = [{
    name: "Theepan"
}, {
    name: "Kanthavel"
}];

export default Ember.Route.extend({
    model() {
        return bookmarks;
    }
});
