<!DOCTYPE html>
<html lang="en">

    <head><!--http-equiv="refresh" content="5"-->
        <meta charset="UTF-8">
        <title>Formulario de nuevo cliente</title>
        <link rel="stylesheet" href="../html/css/screen.css">
        <link rel="stylesheet" href="../html/css/reset.css">
        <script type="text/javascript" src="../html/lib/front-end.min.js"></script>
    </head>

    <body>
        <main>
            <h1>Formulario de nuevo cliente</h1>

            <p class="title">Los campos marcados con <span class="redLetter">*</span> son obligatorios</p>

            <?php
                if(isset($msg)){
                    echo "<h2>" . $msg . "</h2>";
                }
            ?>

            <form action="../cgi-bin/index.php" method="POST">
                <div class="divForm" id="left">
                    <span>Nombre y apellidos</span>
                    <span>Dirección de e-mail</span>
                    <span>Contraseña</span>
                    <span>Repita la contraseña</span>
                    <span>Acepto las condiciones del sitio</span>
                    <span>Dirección web</span>
                    <span>Dirección domicilio</span>
                    <span>País</span>
                </div>
                <div class="divForm" id="right">
                    <input type="text" name="datos['userName']" id="userName"
                           placeholder="* Introduzca solo letras o guiones">

                    <input type="text" name="datos['userMail']" id="userMail"
                           placeholder="* Ej: algo@algo.resto">

                    <input type="text" name="datos['pass']" id="pass"
                           placeholder="* Letras y nºs, mínimo 6 caracteres">

                    <input type="text" name="datos['passConfirmation']" id="passConfirmation"
                           placeholder="* Repita su contraseña">

                    <input type="checkbox" name="datos['siteConditions']" value="1" id="siteConditions">
                    <input type="url" name="datos['url']" id="url">
                    <input type="text" name="datos['address']" id="address">

                    <select name="datos['country']" id="country">
                        <option value="ger">Alemania</option>
                        <option value="bel">Bélgica</option>
                        <option value="den">Dinamarca</option>
                        <option value="spa">España</option>
                        <option value="fra">Francia</option>
                        <option value="gre">Grecia</option>
                        <option value="hol">Holanda</option>
                        <option value="ita">Italia</option>
                        <option value="swe">Suecia</option>
                        <option value="uk">Reino Unido</option>
                    </select>

                </div>
                <div class="buttons">
                    <input type="reset" name="reset" value="Limpiar" id="clean">
                    <input type="submit" name="send" value="Enviar">
                </div>
            </form>
        </main>
    </body>

</html>