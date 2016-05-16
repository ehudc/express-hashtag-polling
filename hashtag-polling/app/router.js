import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('twitter', { path:'twitter'});
  //this.route('twitter', function() {
  //  this.route('twitter', { path:'/:tweet_id'});
  //});
});

export default Router;
