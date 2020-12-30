<?php
echo 'Processing...';


//db connection mySQL : DB: AjaxTests
$conn = mysqli_connect('localhost','root','123456','AjaxTests');

//Check getting param FOR GET: 
if(isset($_GET['name'])){
      echo 'GET: Your name is:  '. $_GET['name'];
}

//Check getting param FOR POST: 
if(isset($_POST['name'])){
      $name= mysqli_real_escape_string($conn,$_POST['name']);
      echo 'POST: Your name is:  '. $_POST['name'];
      $query = "INSERT INTO users(name) VALUES ('$name')";
      if(mysqli_query($conn,$query)){
            echo 'User Added,,,,';   
      }else{
            echo 'Error: ' + mysqli_error($conn) ;
      }
}
?>