
$(document).ready(function(){
    var tipAmount;
    var total;
    var btnCustom = $("#btn-custom");
    var tipVal= $('#tip-value');
    var numPeople = $('#number-people');
    
    $("#btn-custom").keypress(function(){
        if(numPeople.val() !== 0 && numPeople.val() !== ''){
            tipAmount = ((tipVal.val()*btnCustom.val())/100)/numPeople.val();
            total = (tipVal.val()/numPeople.val()) + tipAmount;
            document.getElementById("tip-amount").innerHTML = ` $${tipAmount.toFixed(2)}`
            document.getElementById("total").innerText = `$${total.toFixed(2)}`;
        }else{
            $('.tip-error').css('display','block');
            $('#number-people').css('border','1px solid rgb(255, 136, 0)')
        } 
    })
    $("button").click(function () {
        var btnTip = $(this).val();
        if(numPeople.val() !== 0 && numPeople.val() !== ''){
            tipAmount = ((tipVal.val()*btnTip)/100)/numPeople.val();
            total = (tipVal.val()/numPeople.val()) + tipAmount;
            document.getElementById("tip-amount").innerHTML = ` $${tipAmount.toFixed(2)}`
            document.getElementById("total").innerText = `$${total.toFixed(2)}`;
        }else{
            $('.tip-error').css('display','block');
            $('#number-people').css('border','1px solid rgb(255, 136, 0)')
        }
    })
    $(".btn-reset").click(function(){
        btnCustom.val("");
        tipVal.val("");
        numPeople.val("");
        document.getElementById("tip-amount").innerHTML = "$ 0.00";
        document.getElementById("total").innerText = "$ 0.00";
    })
})

