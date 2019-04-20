<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Teen Goti</title>
        <link href="./css/app.css" rel="stylesheet">
        
        
<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD5q3YTSUVe7njoQQhvQ1viV3-AxWPqk6Y">

</script>
       
    </head>
    <body id='GBody'>

    <div class="middle">            
            <canvas id="inner"></canvas>
            <canvas id="outer"></canvas>
        </div>
        <script src='./js/app.js'></script>
    </body>
</html>

