<?php
if(!empty($_POST['name'])&&!empty($_POST['login'])&&!empty($_POST['pass1'])&&$_POST['pass1']==($_POST['pass2'])&&!empty($_POST['email'])&&!empty($_POST['phone'])){
//echo("1");

require_once ("admin/param.php");
$query="insert into user (name,login,pass,email,phone) VALUES ('".$_POST['name']."','".$_POST['login']."',SHA1('".$_POST['pass1']."'),'".$_POST['email']."','".$_POST['phone']."')";
echo ($query);
$rezultbd=mysqli_query($dbc,$query) or die("error zapros");
}else{
    echo("error 405");
    };