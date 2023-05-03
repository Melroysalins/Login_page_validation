let fname=document.getElementById("fnam");
    let lname=document.getElementById("lnm")
    let ps=document.getElementById("pass");
    var passw=  /^[A-Za-z]\w{7,14}$/;

    //check variable declaration
    var malecheck=document.getElementById("malecheck");
    let femalecheck=document.getElementById("femalecheck");
    let conatinner=document.getElementById("login1");
    let menphoto=document.getElementById("menpic");
    let womenphoto=document.getElementById("women_pic");



        fname.addEventListener("input", function() {
        fname.style.border = "2px solid green";
});
    lname.addEventListener("input" ,function(){
        lname.style.border="2px solid green";    })

        function submitbuttton(){
        if(fname.value.length ==""){
            alert("Ftrst Name cannot be empty");
            
            return false;
        }
        if(lname.value.length ==""){
            alert("Last Name cannot be empty");
            return false;
        }
        if(pass.value.length <8){
            alert("Passowrd must have 8 characters");
            return false;
        }
        else if( !pass.value.match(passw)){
            return true;
        }
        else{
            alert("Password doesnot match the required field");
            return false;;
        }
    }

    //now the check box event starts
   function func(){
    if(document.getElementById("malecheck").checked){
        menphoto.style.display='block';
        womenphoto.style.display='none';
        document.getElementById("femalecheck").disabled=true;

    }
    else{
        document.getElementById("femalecheck").disabled=false;

    }
}
    function func2(){
        if(document.getElementById("femalecheck").checked){
            womenphoto.style.display='block';
            menphoto.style.display="none";
            document.getElementById("malecheck").disabled=true;
            conatinner.style.borderColor="2px solid green";
    }
    else{
        document.getElementById("malecheck").disabled=false;
    }
}