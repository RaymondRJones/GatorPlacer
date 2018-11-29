angular.module('listings', []).factory('Listings', function($http) {
  var methods = {
    getAll: function() {
      return $http.get('/api/listings');
    },
    //Gets current user info from site page
    getUser: function() {
      return $http.get('/api/users/getCurrentUser');
    },
    findByEmail: function(email) {
      return $http.get('/api/users/'+ email);
    },
    signOut: function(){
      return $http.get('/logout');
    },

    update: function(id, listing){
      return $http.put('/api/listings/' + id, listing);
    },
    getBuildings: function() {
      return $http.get('/api/buildings');
    },

    getClasses: function() {
      return $http.get('/api/classes');
    },

    findUFCourse: function(classCode) {
      return $http.get('https://cors-anywhere.herokuapp.com/https://one.ufl.edu/apix/soc/schedule?category=CWSP&term=2188&course-code=' +
      classCode , {
        headers: {'x-requested-with': 'foo'}
      });
      /*
      return $http.get('https://cors-anywhere.herokuapp.com/https://api.fortnitetracker.com/v1/profile/psn/ispyjohn', {
        headers: {'TRN-Api-Key':'be67a216-f805-4ebd-b469-8c5dae13d904'}
      });
      */
    },


    createProf: function(newProfessor) {
	     return $http.post('http://localhost:8080/api/listings', newProfessor);
      },
    createCourse: function(newCourse) {
       return $http.post('/api/classes', newCourse);
      },

    delete: function(id) {
      Listings.findById(id, function(err,listing){
        if(err) throw err;
        listing.remove(function(err){
          if (err) throw err;
        });
      });
      return $http.delete('127.0.0.1/api/listings/' + id);
  },

  getCurrentUser:function() {
    return $htttp.get("127.0.0.1/api/users/getCurrentUser")
  }
};

  return methods;
});
