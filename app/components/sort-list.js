import Ember from 'ember';

export default Ember.Component.extend({
    fields: null,
    items: null,

    init() {
        this._super(...arguments);
    },

    headers: Ember.computed(function() {
        let fields = this.get('fields') || '';

        return fields.split(',')
    }).property('fields'),


    rows: Ember.computed(function(){
        const fields = this.get('fields').split(',');
        const items = this.get('items');
        return items.map(item => fields.map(field => item.get(field)));
    }).property('fields'),

    actions: {
        sort(args) {
            console.log(args)
        }
    }
});
