import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        saveUser() {
            let values = this.getProperties('firstname', 'lastname');

            console.log(values);
        }
    }
});
