angular.module('election').factory('resourceFactory', function($resource) {
  var CrudMethods = {
    create: { method: 'POST' },
    read: { method: 'GET' },
    update: { method: 'PUT' },
    delete: { method: 'DELETE' },
  };
  var polls = $resource('/api/polls/:id', {}, CrudMethods);

  return {
    polls: polls
  };
});