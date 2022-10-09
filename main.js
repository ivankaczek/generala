$buttonThrowDices = document.querySelector('#throw');
$areaForDices = document.querySelector('#area-for-dices');
console.log($areaForDices);

function throwDices(event){

    $areaForDices.className = "";
    event.preventDefault();
}

$buttonThrowDices.onclick = throwDices;


/*  
<button id="button"></button>

<script type="text/javascript">
    var buttons = document.getElementById("button");
    buttons.innerHTML = '<img src="images\ok.png" />';
</script>
*/


