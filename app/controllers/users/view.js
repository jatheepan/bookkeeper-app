import Ember from 'ember';

export default Ember.Controller.extend({
    user: null,
    init() {
        console.log(this);
        // Ember.computed(function ()  {
        //     console.log(this);
        //     return 'hello ';
        // })
    }

});
