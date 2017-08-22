var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
    firebase.auth()

        .signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;

        console.log(token)
        console.log(user)
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.log(error.code)
        console.log(error.message)
    });
}

function googleSignout() {
    firebase.auth().signOut()

        .then(function() {
        console.log('Signout Succesfull')
    }, function(error) {
        console.log('Signout Failed')  
    });
}

/*
var data = firebase.database().ref("userData");

// Save a new recommendation to the database, using the input in the form
var submitData = function () {

    // Get input values from each of the form elements
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var highSchool = $("#highSchool").val();
    var aau = $("#aau").val();
    var about = $("#about").val();
    var transcript = $("#transcript").val();
    var grade = $("#grade").val();

    // Push a new recommendation to the database using those values
    data.push({
        "fName": firstName,
        "lName": lastName,
        "hs": highSchool,
        "aauTeam": aau,
        "bio": about,
        "transcriptFile": transcript,
        "year": grade
    });
};

$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#user").submit(submitData);

});

*/

var database = firebase.database();
var user = firebase.auth().currentUser;
var email = user.email;
$("#submit").click(function(){
    var fname = $("#firstName").val();
    var lname = $("#lastName").val();
    var highSchool = $("#highSchool").val();
    var aau = $("#aau").val();
    var about = $("#about").val();
    var transcript = $("#transcript").val();
    var grade = $("#grade").val();
    var newUser = {"firstName":fname,"lastName":lname,"hs":highSchool, "aauTeam":aau, "bio":about,"transcriptFile":transcript, "year":grade};
    function writeUserData(fname, lname, highschool, aau, transcript, grade, about) {
        firebase.database().ref('users/' + email).set({
            firstName: fname,
            lastName: lname,
            hs : highschool,
            aauTeam: aau,
            transcriptFile: transcript,
            bio: about,
            year: grade
        });
        newUser = firebase.database().ref().child('user').push().key;
    }
});

