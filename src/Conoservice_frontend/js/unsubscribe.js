
// api key: AIzaSyC1kND3WkB9Gnq9I_5Js7x0oEtkZFUJxBM

class ele{
    email=document.getElementById("email");
    name=document.getElementById("name");
    city=document.getElementById("city");
    // subscribe='input[name="subscribe"]';
    // subscribe=document.querySelector('button[name="subscribe"]');
    subscribe=document.getElementById("subscribe");
    unsubscribe=document.getElementById("unsubscribe");
    model=document.getElementById("myModal");
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
        this.email='';
    }
    setProperties()
    {
        this.email=document.getElementById("email").value;
    }
    getEmail()
    {
       return this.email;
    }
    /*display()
    {
        console.log(`${this.name},${this.city},${this.email}`);
    }  */
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
                console.log("hey");
    elements.unsubscribeFinal.addEventListener('click',async(e)=>{
    await covidQueryAnswers.setProperties(); 
        if(covidQueryAnswers.getEmail()!=='')
        { 
                console.log("hello");

          await e.preventDefault(); 
            console.log(covidQueryAnswers);
            
                elements.unsubscribeWindow.style.display = "block";
        }
           
    });
    elements.cancel.addEventListener('click',e=>{
        e.preventDefault();
         window.close()
    });
    elements.span.addEventListener('click',e=>{
    e.preventDefault();
    elements.unsubscribeWindow.style.display = "none";});
    
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