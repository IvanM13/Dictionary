<?php
$handle = fopen("data.json", "r");
$content = fread($handle, filesize("data.json"));
fclose($handle);

// Декодируем прочитанный текст в массив
$data = json_decode($content, true);
echo "Введите слово: ";
$word = fgets(STDIN);
$i = 1;
while ($i <= 2) {
  echo "Введите предложение[$i] и перевод: ";
  $phrase[$i] = fgets(STDIN);
  $i++;
}


// Добавляем новые данные в массив
$data[] = array(
  'word' => $word,
  'phrase' => $phrase
);

// Записываем модифицированный массив обратно в файл
$json = json_encode($data, JSON_PRETTY_PRINT);
file_put_contents("data.json", $json);
$arr = json_decode($json, true);
print_r($arr);
