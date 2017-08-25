import Ember from 'ember';

const users = [
    {name: "Theepan Kanthavel"},
    {name: "David Dayan"}
];

export default Ember.Route.extend({
    model() {
        return users;
    }
});
