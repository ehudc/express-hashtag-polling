import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  retweet_count: DS.attr('number'),
  favorite_count: DS.attr('number')
});
