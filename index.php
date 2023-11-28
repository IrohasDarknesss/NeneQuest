<?php 
session_start();

// Connection Setting for SQLite DataBase
$conn = "sqlite:./sqlite/nenequest.sqlite";

$pdo = new PDO($conn);

// Change Setting PDO 
$pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)

$sql = "select * from players_data order by LPAD(score,4,0) desc, time";

// Excecute SQL 
$host = $pdo->query($sql);
$index = 0;
$players;
while ($record = $host->fetch(PDO::FETCH_ASSOC)) {
    setcookie("id[$index]" , $record["id"]);
    setcookie("name[$index]" , $record["name"]);
    setcookie("score[$index]" , $record["score"]);
    setcookie("time[$index]" , $record["time"]);
    setcookie("date[$index]" , $record["date"]);
    $index++;
}
?>



<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>NENE QUEST!</title>
	
	<link rel="icon" href="img/nenequest.ico" type="image/vnd.microsoft.icon" />
	<link href="css/style.css" rel="stylesheet" type="text/css">
	
	</script>
</head>
<body>


	<div class="side_left">
		<img src="img/controler.png" alt="">
		<p><img src="img/ATK_up.png" alt=""></p>
	</div>

	<div class="side_right">
		<img src="img/keyboard.png" alt="">
	</div>

	<div class = "game">
	<canvas id="canvas"></canvas>
	</div>

	<script type="text/javascript" src="js/jquery.js"></script>
	<script type="text/javascript" src="js/jquery.cookie.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
	<script type="text/javascript" src="js/three.min.js">></script>
	<script type="text/javascript" src="js/CSS3DRenderer.js">></script>

</body>
</html>