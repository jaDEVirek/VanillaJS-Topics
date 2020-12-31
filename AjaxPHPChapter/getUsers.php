<?php
      $conn = mysqli_connect('localhost','root','123456','AjaxTests');
      $query= 'SELECT * FROM users';
      //get result
      $result = mysqli_query($conn,$query);
       $usersResp =mysqli_data($result, MYSQLI_ASSOC);     
      
       echo json_encode($usersResp);
?>