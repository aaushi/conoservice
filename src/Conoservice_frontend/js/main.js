
// api key: AIzaSyC1kND3WkB9Gnq9I_5Js7x0oEtkZFUJxBM

class ele{
    email=document.getElementById("email");
    name=document.getElementById("name");
    city=document.getElementById("city");
    // subscribe='input[name="subscribe"]';
    // subscribe=document.querySelector('button[name="subscribe"]');
    subscribe=document.getElementById("subscribe");
    unsubscribe=document.getElementById("unsubscribe");
    subscribesuccess=document.getElementById("subscribe-success");
    btn=document.getElementById("myBtn");
    span=document.getElementsByClassName("close")[0];
    validateWindow=document.getElementById("validate-errors");
    unsubscribeWindow=document.getElementById("unsubscribe-window");
    cancel=document.getElementById("cancel");
    unsubscribeFinal=document.getElementById("final-unsubscribe");
}
const elements=new ele();
class covidQuery
{
    constructor()
    {
        this.name='';
        this.email='';
        this.city='';
    }
    setProperties()
    {
        this.name=elements.name.value;
        this.city=document.getElementById("city").value;
        this.email=document.getElementById("email").value;

    }
    getName()
    {
        return this.name;

    }
    getEmail()
    {
       return this.email;
    
    }
    getCity()
    {
         return this.city;
    }
    display()
    {
        console.log(`${this.name},${this.city},${this.email}`);
    }

   
    
}
function initialize() 
{
              var options = {
                types: ['(cities)'],
                componentRestrictions: {
                  country: "in"
                }
              };
            var input = document.getElementById('city');
            var autocomplete = new google.maps.places.Autocomplete(input, options);
            //var autocomplete = new google.maps.places.Autocomplete.setFields('geometry');
           /* var autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.setFields(
            ['geometry']);*/
 }
google.maps.event.addDomListener(window, 'load', initialize);
function NameValidate()
    {
          
            var name=elements.name.value;
        var regex= /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/;
        if(name.match(regex))
        {
           
            alert('Name should not contain any numbers or special characters');
            elements.name.value="";
            //document.getElementById("validate").innerHTML+="Name should not contain any numbers or special characters";
            return false;
        }
        else
        {
            console.log("valid name");
            
        }
        //console.log("invalid name");
      /*  window.setTimeout(function ()
     {
        elements.name.focus();
    }, 2000);
       
            elements.name.select();
            element.name.reset();
          // elements.name.value='';*/

    }
    function EmailValidate()
    {
        console.log("email ");
        var regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email=elements.email.value;
        if(email.match(regex))
        {
            return true;   
        }
        else
        {
            alert('Please enter a valid Email Id.');
            elements.email.value="";
            //document.getElementById("validate").innerHTML+="Name should not contain any numbers or special characters";
            return false;
            
        }
    /*
            fetch("https://zerobounce1.p.rapidapi.com/v2/validate?ip_address="+this.email, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "zerobounce1.p.rapidapi.com",
                "x-rapidapi-key": "8c550afdfdmshe0813e0c3c1e5cfp13a658jsnb9e1b52cb453"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
        }*/

    }
function eventListeners(covidQueryAnswers)
{
    elements.subscribe.addEventListener('click',async(e)=>{
    await covidQueryAnswers.setProperties(); 
        if(covidQueryAnswers.getName()!=='' && covidQueryAnswers.getCity()!=='' && covidQueryAnswers.getEmail()!=='')
        { 
          await e.preventDefault(); 
            console.log(covidQueryAnswers);
            //const NameValidateRes=await covidQueryAnswers.NameValidate();
            //const EmailValidateRes=await covidQueryAnswers.EmailValidate();
            //console.log(NameValidateRes);
            //.log(EmailValidateRes);
            //if(NameValidateRes===true && EmailValidateRes===true)
            //{
                elements.subscribesuccess.style.display = "block";
            //}
            //else
            //{
               // console.log("validation window");
               // elements.validateWindow.style.display="block";
            //}
            
        }
    });

    elements.span.addEventListener('click',e=>{
    e.preventDefault();
    elements.subscribesuccess.style.display = "none";});
}
function FieldsValidation()
{
    if(NameCityValidate() && EmailValidate() && cityValidate())
        return true;
    else
        return false;
}


function clearFields()
{
        $('form').each(function() { this.reset() });
}


function init()
{
    clearFields();
    
        console.log("hi");
        
         const covidQueryAnswers = new covidQuery();
         eventListeners(covidQueryAnswers);
}

init();