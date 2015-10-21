var mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

module.exports = function(router) {
  var Poll = require('./models/poll')
  router.route('/polls')
    .post(function(request, response) {
      var poll = new Poll();
      
      poll.title = request.body.title;

      poll.save(function(err) {
        if (err) {
          response.status(500).json({
            error: err
          });
        }
        else {
          response.status(201).json({
            polls: [poll]
          });
        }
      })
    })
    .get(function(request, response) {
      Poll.find(function(err, polls) {
        if (err) {
           response,status(500).json({ error: err });
        }   
        else {
            response.status(200).json({
                polls: polls
            });
        }
      });
    });
}