<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>
<?php

$_SESSION["username"] = "gm";
$_SESSION["email"] = "gm@gmail.com";
echo "Session set.";
?>
</body>
</html>
