<?php

    session_start();

    if (isset($_POST['accept'])) {
        $value = "Yes";
        $_SESSION['cookie'] = setcookie("cookies", $value, null, "/", null, null, null);
        $_COOKIE["form"] = $_SESSION['cookie'];
        include '../html/index.php';
    } else {
        if (isset($_POST['reject'])) {
            $_SESSION['cookie'] = "";
            include '../html/index.php';
        } else {
            if (!isset($_COOKIE['cookies'])) {
                $_SESSION['cookie'] = 'No';
            }
        }
    }

    if (isset($_POST['datos'])) {
        $data = $_POST['datos'];
        $msg = "Su información ha sido guardada";

        $string = "Usuario: " + $data['userName'] + "\n";
        $string += "E-mail: " + $data['userMail'] + "\n";
        $string += "Contraseña: " + $data['pass'] + "\n";
        $string += "Confirmacion: " + $data['passConfirmation'] + "\n";
        $string += "Usuario: " + $data['siteConditions'] + "\n";
        $string += "Usuario: " + $data['userName'] + "\n";
        $string += "Usuario: " + $data['userName'] + "\n";

        $fp = fopen('data.txt', 'w');
        fwrite($fp, $string);
        fclose($fp);

        include '../html/index.php';
    } else {
        include '../html/index.php';
    }
?>