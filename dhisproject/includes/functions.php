<?php
function test_input($data) {
  global $conn;
  $data = trim($data);
  $data = stripslashes($data);
  $data = addslashes($data);
  $data = htmlspecialchars($data);
  $data = strip_tags($data);
  $data = mysqli_real_escape_string($conn, $data);
  return $data;
}

function test_email($email){
 if (!filter_var($email, FILTER_VALIDATE_EMAIL))
  return false;
 else 
  return true;
}

function test_website($website){
 if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i",$website)) {
  $websiteErr = "Invalid URL";
 }
}

 function redirect_to($location=NULL){
	 if($location!=NULL){
		 header("Location: {$location}");
		 exit;
	 }
 }
 
 function check_password($word)
 {
    if(strlen($word)>=6 && strlen($word)<=15)
	{
	   return true;
	}
	else
	{
	   return false;
	}
 } 
 
 function test_secret_key($word)
 {
    if(strlen($word)==5 && !preg_match('/[A-Z]/',$word) && !preg_match('/[a-z]/',$word) && preg_match('/[0-9]/',$word) && !preg_match('/\W/',$word) && is_numeric($word))
	{
	   return true;
	}
	else
	{
	   return false;
	}
 } 
 
 function is_phone_number($number){
  if(preg_match('/[0-9]/',$number) && !preg_match('/[a-z]+[A-Z]+\W/',$number) && strlen($number) == 10)
      return true;
   else 
     return false;
 }
 
 function confirm_logged_in($role)
 {
	 if(!isset($_SESSION['user_id']) && !isset($_SESSION['role']))
	 {
		redirect_to("../"); 
	 }
	 else
	 {
		 if($_SESSION['role']!=$role)
		 {
			 redirect_to("../");
		 }
	 }
 }
 
 function test_employee_id($id)
 {
	 if(preg_match('/[0-9]/',$id) && preg_match('/[a-z]/',$id) && !preg_match('/[A-Z]/',$id) && !preg_match('/[\W]/',$id) && strlen($id)>5 && strlen($id)<16)
	 {
		 return true;
	 }
	 else
	 {
		 return false;
	 }
 }
 
 function test_name($name)
 {
	 if(!empty($name) && strlen($name)>1 && !preg_match('/\W/',$name) && !preg_match('/[0-9]/',$name))
	 {
		 return true;
	 }
	 else
	 {
		 return false;
	 }
 }
 
 function test_price($price)
 {
	 if(!empty($price) && strlen($price) > 1 && preg_match('/[0-9]/',$price) && !preg_match('/[A-Z]/',$price) && !preg_match('/\W/',$price) && !preg_match('/[a-z]+\W/',$price))
	 {
		 return true;
	 }
	 else
	 {
		 return false;
	 }
 } 
 
 function test_coffin_length($length)
 {
	 if(!empty($length) && strlen($length)>1 && preg_match('/[0-9]/',$length) && !preg_match('/[A-Z]/',$length) && !preg_match('/[a-z]+\W/',$length))
	 {
		 return true;
	 }
	 else
	 {
		 return false;
	 }
 }
 
?>