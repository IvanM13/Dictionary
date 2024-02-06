<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<?php
$jsonData = file_get_contents('english.json');
$data     = json_decode($jsonData, true); // true - означает, что мы хотим получить массив вместо объекта
echo "<h2>English words</h2><br>";

foreach ($data as $brand => $items)
{
    echo "<ul>";
    foreach ($items as $key => $value)
    {
        if(gettype($value) !== "array"){
            echo "<h3>$value</h3>";
        }
        foreach($value as $key => $g)
        {
            if ($g !== 'exit') {
                
                echo "<li>$g</li>";

            }
        }
    }
    echo "</ul>";
}
// echo gettype($data);
?>
</body>
</html>
<?php
