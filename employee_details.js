     $(function () {

    var employee_array = new Array();
    $('#id').prop('disabled', true);
    $('#name').prop('disabled', true);
    $('#desg').prop('disabled', true);
    $('#basicpay').prop('disabled', true);
    $('#da').prop('disabled', true);
    $('#hra').prop('disabled', true);
    $('#medical').prop('disabled', true);
    $('#salary').prop('disabled', true);

    $('#new').click(function (e) {
        e.preventDefault();
    $('#id').prop('disabled', false);
    $('#name').prop('disabled', false);
    $('#desg').prop('disabled', false);
    $('#basicpay').prop('disabled', false);
    $('#da').prop('disabled', false);
    $('#hra').prop('disabled', false);
    $('#medical').prop('disabled', false);
    
    });
    
    $('#save').click(function (e) {

        e.preventDefault();
        if ($('#id').val() == ""){
            alert('Please fill the id field');
            $('#id').keyup(function(e){
                if (/\D/g.test(this.value))
                {
                // Filter non-digits from input value.
                this.value = this.value.replace(/\D/g, '');
                }
             });
            $('#t1').each(function() {
                var empId = $(this).find("#id").html();    
                if ($('#id').val() == empId){
                    alert('Already exists');
                    }
                });
        }
        else if ($('#name').val() == ""){
            alert('Please fill the name');
            $('#name').keypress(function(key) {
            if (/^[a-zA-Z]/g.test(this.value))
            {
            this.value = this.value.replace(/^[a-zA-Z]/g, '');
             }
             });        
        }
        
        else if ($('#desg').val() == ""){
            alert('Please fill the designation ');
            $('#desg').keyup(function() {
            if (/^[a-zA-Z]/g.test(this.value))
            {
            this.value = this.value.replace(/^[a-zA-Z]/g, '');
             }
            
            });
        }
        else if ($('#basicpay').val() == ""){
            alert('Please fill the basic pay ');
            $('#basicpay').keyup(function(e)
                                {
            if (/\D/g.test(this.value))
            {
            // Filter non-digits from input value.
            this.value = this.value.replace(/\D/g, '');
             }
             });
        }
        else if ($('#da').val() == ""){
            alert('Please fill the DA');
             $('#da').keyup(function(e)
                                {
            if (/\D/g.test(this.value))
            {
            // Filter non-digits from input value.
            this.value = this.value.replace(/\D/g, '');
             }
             });

        }
        else if ($('#hra').val() == ""){
            alert('Please fill the HRA ');
             $('#hra').keyup(function(e)
                                {
            if (/\D/g.test(this.value))
            {
            // Filter non-digits from input value.
            this.value = this.value.replace(/\D/g, '');
            $("#errmsg").html("Digits Only").show();
             }
             });
        }
        else if ($('#medical').val() == ""){
            alert('Please fill Medical allowances');
            $('#medical').keyup(function(e)
                                {
            if (/\D/g.test(this.value))
            {
            // Filter non-digits from input value.
             this.value = this.value.replace(/\D/g, '');
             }
             });
        }
   
        else{                 
                var f = 0;
                var emp_id = $('#id').val();
                var emp_name = $('#name').val();
                var emp_desg = $('#desg').val();
                var emp_basicpay = $('#basicpay').val();
                var emp_da = $('#da').val();
                var emp_hra = $('#hra').val();
                var emp_medical = $('#medical').val();

                for (var i = 0; i < employee_array.length; i++) {                      
                    if (emp_id === employee_array[i]) {                          
                        f = 1;                        
                    }                      
                 }
                if (f === 0) {
                // employee_array.push(emp_id);
                // employee_array.push(emp_name);
                // employee_array.push(emp_desg);
                // employee_array.push(emp_basicpay);
                // employee_array.push(emp_da);
                // employee_array.push(emp_hra);
                // employee_array.push(emp_medical);
                $('#salary').prop('disabled', false);
                var emp_salary=(parseInt($('#basicpay').val()) + parseInt($('#da').val()) + parseInt($('#hra').val()) + parseInt($('#medical').val()));
                $('#salary').val(emp_salary);
                emp = {"id":emp_id,"name":emp_name,"designation":emp_desg,"basicpay":emp_basicpay,"da":emp_da,"hra":emp_hra,"medical":emp_medical,"salary":emp_salary};
                employee_array.push(emp);

                // var newRow = jQuery('<tr><td class ="f1">'+emp_id+'</td><td class= "f2">'+emp_name+'</td><td class ="f3">'+emp_desg+'</td><td class ="f4">'+emp_basicpay+'</td><td class ="f5">'+emp_da+'</td><td class= "f6">'+emp_hra+'</td><td class ="f7">'+emp_medical+'</td><td>'+'<button class ="edit">Edit</button>'+ '<button class= "delete">Delete</button>'+'</td></tr>');
                
                 var newRow = jQuery('<tr><td class ="f1">'+emp_id+'</td><td class= "f2">'+emp_name+'</td><td class ="f3">'+emp_desg+'</td><td class ="f4">'+emp_salary+'</td><td class ="f4">'+'<button class ="edit">Edit</button>'+ '<button class= "delete">Delete</button>'+'</td></tr>');
                jQuery('#t1').append(newRow);
                alert('added successfully');   
                
                // $('#salary').val(parseInt($('#basicpay').val()) + parseInt($('#da').val()) + parseInt($('#hra').val()) + parseInt($('#medical').val()));
                }
                if (f === 1) {                          
                alert('This Id already exist');                        
                }
        }
    });
    
 $('#t1').on('click', '.edit', function(){ 

    var id = $(this).parent().siblings().filter(".f1").text();               
    $('#id').val($(this).parent().siblings().filter(".f1").text()); 
    $('#name').val($(this).parent().siblings().filter('.f2').text()); 
    $('#desg').val($(this).parent().parent().find('.f3').text()); 

    $.each(employee_array, function (index, value) {
                  
                  if (id === value.id) {
                        $('#basicpay').val(value.basicpay);
                        $('#da').val(value.da);
                        $('#hra').val(value.hra);
                        $('#medical').val(value.medical);
                        $('#salary').val(value.salary);   
                    }
                  });
                  
    employee_array = jQuery.grep(employee_array, function(value) {
        return value != id;
    });             
    $(this).closest ('tr').remove ();

 });

    $('#t1').on('click', '.delete', function(){
        if(confirm("Are you sure you want to delete?")){
            $(this).closest ('tr').remove ();}
    });

});