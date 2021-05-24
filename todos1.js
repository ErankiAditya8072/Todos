$(function(){$('#btn').on('click',addValue);
    $('#addtext').on('keypress',function(e){if(e.keyCode==13){addValue();}});
    function addValue(){var value= $('#addtext').val();if(value.length!=0)
        {$('table').append($('<tr><td class="cols1">'+ value + '</td><td><button class="desbtn"><i class="fas fa-trash-alt"></i></button></td></tr>'));
            $('tr:last-child').slideDown(500);}
        $('.desbtn').on('click',function(){var row=$(this).closest('tr');row.slideUp(500,function(){row.remove();});});
        $('#addtext').val("");
    }
   
    
});