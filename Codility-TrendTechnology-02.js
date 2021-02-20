//Form Validation
function TrendSolution2() {
    
  var person = $("#type_person").is(":checked");
  var company = $("#type_company").is(":checked");
  var firstname = $("#first_name").val();
  var lastname = $("#last_name").val();
  var email = $("#email").val();
  var companyname = $("#company_name").val();
  var phone = $("#phone").val();
  var result = true
 
 
  if(person){
      if (firstname.match(/[a-zA-Z/]+/)== null){
          result = false; 
      }
      if (lastname.match(/[a-zA-Z/]+/)== null){
          result = false; 
      }
      
     if (email.match(/^[a-zAZ.]{1,64}@[a-zA-Z.]{1,64}$/)== null){
          result = false; 
      }
      
      
  }else if (company){
     if (companyname.match(/[/a-zA-Z]+/)== null){
          result = false; 
      }
    if (phone.match(/^[\d]{3}-^[\d]{3}-^[\d]{3}/)== null){
          result = false; 
      }
      
      
  }else{
      return false;
  }
 
   return result;
}

//   console.log(person)
//   console.log( company )
//   console.log(firstname)
//   console.log(lastname )
//   console.log(email) 
//   console.log(companyname)
//   console.log(phone )