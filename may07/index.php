<meta http-equiv="refresh" content="1">

<?php
$frist = 'Angel';
$last = 'Cobian';
$a = 'Angel';
$b = 25;
// $c = $a + $b;
$d = 'black';
?>


<!-- <p>
    <?php
        // print 'test';
        $x= 5;
        print $x; 
     ?>
</p> -->

<?php 
    $x =5;
    function test($myVar){
        echo "the value of x is: " . $myVar;
    }
    test($x);

    function test2(){
        $y = 6;
        echo $y;
        
    }
    test2()
    ?>

<p>Hello <?php 
    $txt = $frist . ' ' . $last;
    print $txt;
    //echo $a; ?>  
    <!-- Welcome to my site</p> -->
<p>
My car is <?php echo $c; ?>
</p>
