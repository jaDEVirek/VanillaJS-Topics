<?php
echo 'Processing...';

//Check getting param: 
if(isset($_GET['name'])){
      echo 'GET: Your name is:  '. $_GET['name'];
}