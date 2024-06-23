
$(document).ready(function () {
    $('#order').submit(function (evt) {

        var flag = true;
        var errors = [];

        
        var firstName = $('#firstname').val();
        if (firstName === '') { 
            $('#firstname').css('border','3px solid red');
            $('#firstspan').html('You Must Fill Out Your First Name!!'); 
            flag = false;
            errors.push(['firstname', 'Please fill in your first name']) 
        }

        var lastName = $('#lastname').val();
        if (lastName === '') {
            $('#lastname').css('border','3px solid red');
            $('#lastspan').html('You Must Fill Out Your Last Name!!'); 
            flag = false;
            errors.push(['lastname', 'please fill in your last name']);
        }

        var address = $('#address').val();
        if (address === '') {
            $('#address').css('border','3px solid red');
            $('#addressspan').html('You Must Fill Out Your Address!!'); 
            flag = false;
            errors.push(['address', 'please fill out your address']);
        }

        var city = $('#city').val();
        if (city === '') {
            $('#city').css('border','3px solid red');
            $('#cityspan').html('You Must Fill Out A Valid City!!'); 
            flag = false;
            errors.push(['city', 'please fill in your city']);
        }

        var state = $('#state').val();
        if (state === '-') {
            $('#state').css('border','3px solid red');
            $('#statespan').html('You Must Select A Valid State!!');
            flag = false;
            errors.push(['state', 'please select a state']);
        }
        

        var product = $('#product').val();
        if (product === '--') {
            $('#product').css('border','3px solid red');
            $('#productspan').html('You Must Select A Valid Product!!');
            flag = false;
            errors.push(['product', 'please select a product']);
        }


        var quantity = $('#quantity').val();
        if (quantity === '') {
            $('#quantity').css('border','3px solid red');
            $('#quantityspan').html('You Must Fill Out A Valid Quantity!!'); 
            flag = false;
            errors.push(['quantity', 'please select a quantity']);
        }

        var contactFlag = false;
        $(':radio:checked').each(function () {
            contactFlag = true;
        });

        if (!contactFlag) {
            $('#contactspan').html('You Must Select Either Yes Or No!!');
            flag = false;
            errors.push(['contact', 'please select contacting preference']);
        }

        var termsFlag = false;
        $(':checkbox:checked').each(function () {
            termsFlag = true;
        });

        if (!termsFlag) {
            $('#termsspan').html('you must agree to the terms!!');
            flag = false;
            errors.push(['terms', 'you must agree to the terms']);
        } 
        
        // if (!flag) {
        //     evt.preventDefault();
        // }

        // error bucket and form submission prevent
        if (!flag) {
            var errorBucket = $('.errors');
            var output = '<ul>';
            for (let index = 0; index < errors.length; index++) {
                output += '<li>' + errors[index][1] + '</li>';
                console.log('Error: complete ' + errors[index][0] + ' field');
            }
            output += '</ul>';
            errorBucket.html(output);
            // stops form from being submitted
            evt.preventDefault();
            // puts the currsor in first unfilled input
            $('#' + errors[0][0]).focus();
        }

    });

});