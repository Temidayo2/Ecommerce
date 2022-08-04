const logout=()=>{
  if (localStorage.userLoggedIn) {
    localStorage.removeItem('userLoggedIn') 
    console.log("user has been logged out")
  }
  else{
    alert("No user is logged in")
  }
}
const cart =()=>{
    if(localStorage.userLoggedIn){
        console.log("A user is logged in")
    }
    else{
      window.location.href = "signup.html";
    }
 }
    
 let user = [
    {
      firstName: 'Samuel',
      lastName: 'Samuel',
      eMail: 'sam@gmail.com',
      passWord: '4567890',
      
    }
  
  ]
  let getUserInfo = () => {
    if (localStorage.userInfo) {
      user = JSON.parse(localStorage.userInfo)
    }
  }

  login =()=>{
    if (email.value==""||password.value=="") {
      alertt.innerText="Fill all fields"
    }
    else{
      if (localStorage.userInfo) {
        user = JSON.parse(localStorage.userInfo)
        console.log(user)
        var foundd=false
        user.forEach(user => {
            if(email.value==user.eMail){
             foundd=true;
              if(password.value==user.passWord){
                alertt.innerText="Login successful"
                localStorage.userLoggedIn=true
                window.location.href="cart.html"
              }
              else{
                alertt.innerText="Unsuccessful login"
              }
             }
            }); 
            console.log(foundd)
            if (foundd===false) {
              alertt.innerText="No user found"
            }
     
      } else {
        alertt.innerText="No account found"
         }
    }


  }
  let register = () => {
    let ftName = fName.value;
    let ltName = lName.value;
    let eMl = email.value;
    let pWord = password.value;
    
    if (ftName != '' && ltName != '' && eMl != '' && pWord != '') {
      let newUser = {
        firstName: ftName,
        lastName: ltName,
        eMail: eMl,
        passWord: pWord,
  
      }
      user.push(newUser)
      localStorage.userInfo = JSON.stringify(user)
      fName.value = '';
      lName.value = '';
      email.value = '';
      password.value = '';
      alert(`Registration Successful`)
      window.location.href = 'index.html';
    }
    else {
      alert(`Complete the information above`)
    }
  }


