import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    tag: {
      refreshModel: true
    }
  },

  model: function(params){
    // at this point params.search_text will have
    // the string sent, it will hit the model hook
    // if sent an object it would have skipped this
    // hook and just used the object as the model
    //return { searchInThisRoute: params.search_text};

    var tweets = "dummy";
    this.store.query('twitter', params)
      .then(function(res) {
        tweets = res.toArray();
        console.log(tweets);
      });

    return { searchInThisRoute: this.store.query('twitter', params) };


    //return new Ember.RSVP.Promise(function(resolve) {
    //  Ember.run.later(function() {
    //    resolve({ msg: 'Hold Your Horses' });
    //  }, 3000);
    //});
  },

  //setupController(controller, model) {
  //  console.log(model.msg); // "Hold Your Horses"
  //}
});
