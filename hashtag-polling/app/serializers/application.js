//import RESTSerializer from 'ember-data/serializers/rest';
//
//export default RESTSerializer.extend({
//  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
//    payload = {
//      twitter: payload.data
//    };
//
//    return this._super(store, primaryModelClass, payload, id, requestType);
//  }
//});

import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    //debugger;
    return this._super(store, primaryModelClass, payload.data, id, requestType);
  }
});