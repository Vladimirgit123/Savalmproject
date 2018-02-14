<?php
if(isset($_POST['login'])&&!empty($_POST['login'])){
    require_once("admin/param.php");
$query="select id from user WHERE login='".$_POST['login']."'";
//echo $query;
$rezult=mysqli_query($dbc,$query)or die("plohoi haker");
if(mysqli_num_rows($rezult)>0){
    echo 1;//ploho
}
else{
    echo 2;//good
}
}else{
    echo("false");
}

?>