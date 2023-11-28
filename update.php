<?php 
// Game BackEnd
session_start();

// Connection Setting for SQLite DataBase
$conn = "sqlite:./sqlite/nenequest.sqlite";

$pdo = new PDO($conn);

// Change Setting PDO 
$pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)


$name = "";
$score = "";
$time = "";
$date = "";

if(isset($_COOKIE["input_name"])){
	$name='"'.$_COOKIE["input_name"].'"';
	$score = $_COOKIE["input_score"];
	$time = '"'.$_COOKIE["input_time"].'"';
	$date = '"'.$_COOKIE["input_date"].'"';
	$sql = "INSERT INTO players (name,score,time,date) VALUES ($name,$score,$time,$date)";
	$pdo->exec($sql);
}

echo $name."<br>".$score."<br>".$time."<br>".$date."<br>";

header("location:index.php");
?>