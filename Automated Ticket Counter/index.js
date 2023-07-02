function checkEntry(){
    let age = document.getElementById("inputAge").value;
    let accompained;
    document.getElementById("entry").innerHTML=" ";
    if(document.getElementById("radio1").checked)
    {
        accompained = document.getElementById("radio1").value;
    }
    else if(document.getElementById("radio2").checked)
    {
        accompained = document.getElementById("radio2").value;
    }
    else
    {
        accompained = "Are you accompained by an adult. Please select an option";
    }

    if(isNaN(age) || age == "")
    {
        alert("Please enter valid age");
    }
    else if(accompained !== 'yes' && accompained !== 'no')
    {
        alert(accompained);
    }
    else if (age >= 16 || (age < 16 && accompained === 'yes'))
    {
        document.getElementById("entry").style.color='#db9c3e';
        document.getElementById("entry").innerHTML="You are allowed. Enjoy Pandagoww 🥳.";
    }
    else if(age<16 && accompained === 'no')
    {
        document.getElementById("entry").style.color = "red";
        document.getElementById("entry").innerHTML="Sorry ,🥺 you are not allowed.";
    }

}