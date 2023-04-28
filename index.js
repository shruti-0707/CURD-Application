const firebaseConfig = {
    apiKey: "AIzaSyAddFU5hhZzp47JS6xtI1CHgi1RaEWa0qE",
    authDomain: "fir-curd-f9ef9.firebaseapp.com",
    projectId: "fir-curd-f9ef9",
    storageBucket: "fir-curd-f9ef9.appspot.com",
    messagingSenderId: "333930509003",
    appId: "1:333930509003:web:394d12e75f50c17914214e"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

//ready data
var nameV , rollV , secV , genV

function ready() {
    nameV = document.getElementById('namebox').value ;
    rollV = document.getElementById('rollbox').value ;
    secV = document.getElementById('secbox').value ;
    genV = document.getElementById('genbox').value ;
}

// for insert button

document.getElementById('insert').onclick = function()
{
    ready();
 // write data to firebase
 firebase.database().ref('student/'+rollV).set({
    NameOfStudent : nameV,
    RollNo :rollV,
    Section :secV,
    Gender : genV
 })   ;
}
//-----------------------------------------------------------------------------------------------------------------------------
document.getElementById('select').onclick = function()
{
    ready();
 // write data to firebase
 //snapshot is basically copying small data from larger data and giving back 
 firebase.database().ref('student/'+rollV).on('value',function(snapshot){
    document.getElementById('namebox').value=snapshot.val().NameOfStudent;
    document.getElementById('rollbox').value=snapshot.val().RollNo;
    document.getElementById('secbox').value=snapshot.val().Section ;
    document.getElementById('genbox').value=snapshot.val().Gender ;
 }  );
}
// //-----------------------------------------------------------------------------------------------------------------------------

document.getElementById('update').onclick = function()
{
    ready();
 // write data to firebase
 // here we can set as well instead of update but will delete the previous one
 firebase.database().ref('student/'+rollV).update({
    NameOfStudent : nameV,
    Section :secV,
    Gender : genV
 })   ;
}
// //-----------------delete---------------------------------------------------------------------------------------------------------
document.getElementById('delete').onclick = function()
{
    ready();
 // write data to firebase
 firebase.database().ref('student/'+rollV).remove()};