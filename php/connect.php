<?php
require_once 'seting.php';

$connection = new mysqli($host, $user, $pass, $data);

if ($connection->connect_error) dir('ошибка подключения!');



?>