import JSONAPIAdapter from 'ember-data/adapters/json-api';

export default JSONAPIAdapter.extend({
  host: 'http://localhost:8080',
  pathForType: function(type) {
    return type;
  }
});
