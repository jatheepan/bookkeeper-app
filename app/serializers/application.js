import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //     return this.normalizeArrayResponse(store, primaryModelClass, payload, id, requestType);
    // }

    keyForAttribute(attr) {
        return Ember.String.underscore(attr);
    },

    keyForRelationship(rawKey) {
        return Ember.String.underscore(rawKey);
    }
});
