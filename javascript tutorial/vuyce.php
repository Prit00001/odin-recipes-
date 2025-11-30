<?php

// your code goes here
$n = (int)trim(fgets(STDIN));
$count = 0;
for ($i =1;$i<=$n;$i++){

    if($i%2!=0 && $i%3!=0 && $i%5!=0){
        $count=$count+1;
    }
}
echo $count;

?>
