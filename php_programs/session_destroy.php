<?php
session_start();
?>
<!DOCTYPE html>
<html>
<body>
<?php

session_unset();
// destroy the session
session_destroy();
echo "session variables are destroyed"
?>
</body>
