define([], function(){
  var TrialView = Backbone.View.extend({
    
    // Define the element we want to target 
    el: '.target',

    // Render out a text string to the page
    render: function(){
      this.$el.html("Your trial ends in 28 days!");
    }
  });
  return TrialView;
});