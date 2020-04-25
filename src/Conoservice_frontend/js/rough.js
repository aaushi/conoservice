/*(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    /*var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++)
         {
            if(validate(input[i]) == false)
            {
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) 
    {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') 
        {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null)
             {
                return false;
            }
        }
        else 
        {
            if($(input).val().trim() == '')
            {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

    <input class="input100-name" type="text" id="name" placeholder="Name" pattern="[a-zA-Z]" title="Name should not contain any numbers or special characters" oninvalid="NameValidate()" required />
    

})(jQuery);*/


/*
                    <!-- <div class="wrap-input100 validate-input" data-validate = "interval">
                        <input class="input100-other" type="text" name="interval" placeholder="Interval in hours">
                        <span class="focus-input100"></span>
                        <span class="symbol-input100">
                            <i class="fa fa-hourglass-start"></i>
                        </span>
                    </div> -->*/



                    /*<input class="input100-name" type="text" id="name" placeholder="Name"
                     pattern="[a-zA-Z]" title="Name should not contain any numbers or special characters"
                      oninvalid="setCustomValidity('Name should not contain any numbers or special characters')"
                       oninput="setCustomValidity('')" required />*/