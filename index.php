<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="resources/images/app.png">
    <title>VFConnect</title>
    <link rel="stylesheet" href="resources/css/bootstrap.min.css">
    <link rel="stylesheet" href="resources/css/own.css">
</head>
<body>
    <nav class="navbar navbar-light navbar-dark bg-dark">
        <span class="navbar-brand" href="#">
            VFConnect Panel
        </span>
        <span class="navbar-text">
            INS7501
        </span>
    </nav>

    <div class="container">
        <div class="row">
            <div class="col-md-4">
            </div>
            <div class="col-md-4">
                <form name="login" id="login">
                    <div class="form-group">                             
                        <input name="usr" type="text" class="form-control" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <input name="pwd" type="password" class="form-control" placeholder="Password">
                    </div>
                    <button class="btn btn-outline-light btn-sm btn-block" onclick="validate(this.form)" name="btnLogin">Enter</button>
                </form>
            </div>
            <div class="col-md-4">
            </div>
        </div>
    </div>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.js"></script>
    <script src='resources/js/popper.min.js'></script>
    <script src='resources/js/bootstrap.min.js'></script>
    <script defer src='webapp/assets/index.js'></script>
</body>
</html>