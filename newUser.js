var app = angular.module('app', []);
 
app.controller('userCtrl', function($scope) {
 
  $scope.user= [{
    fName: "Lindsay",
    lName: "Bloom",
    address: "123 Main St",
    state: "New York",
    highSchool: "CHAT",
    hsCoach: "Aubrey Zimmerman",
    hsCoachEmail: "bigzea@gmail.com",
    aauTeam: "Connecticut Stars",
    aauCoach: "Dave Bethune",
    aauCoachEmail: "dave@bigkahuna.com",
    subscribe: "Subscribe",
  }];
 
  $scope.saveUser = function(userInfo) {
    if($scope.userForm.$valid) {
      $scope.user.push({
        fName: userInfo.fName, lName: userInfo.lName, address: userInfo.address, state: userInfo.state, highSchool: userInfo.highSchool, hsCoach: userInfo.hsCoach, hsCoachEmail: userInfo.hsCoachEmail, aauTeam: userInfo.aauTeam, aauCoach: userInfo.aauCoach, aauCoachEmail: userInfo.aauCoachEmail, subscribe: userInfo.subscribe
      });
      console.log('User Saved');
    } else {
      console.log('Error : Couldn\'t Save User');
    }
 }
 
});