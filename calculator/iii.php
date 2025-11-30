<?php

$a = (int)trim(fgets(STDIN));
$b = (int)trim(fgets(STDIN));
$c = (int)trim(fgets(STDIN));

if ( $a===$b && $a===$c && $b===$c) {
    echo "Equilateral";
}
else if($a != $b && $a != $c && $b != $c) {
    echo "Scalene";
}
else {
    echo "Isosceles";
}
?>
