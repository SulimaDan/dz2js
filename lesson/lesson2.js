let studentBodik = {
    firstName: "Bodik",
    lastName: "Shtihalyuk",
    nickNameL: "sk",
    birthDate: "1999-03-10",
    showInfo:function(){
        console.log(`First name : ${firstName}` + '\n' + `Last name : ${lastName}` + '\n' + `Nick name : ${nickName}` + '\n' + `Birth date : ${birthDate}`);
    }
showAge:function(){
    let today = new Date();
    let birth = new Date(this.birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();
    if(month < 0 || (month === 0 && today.getDate() < birth.getDate())){
        age--;
    }
    console.log(age);
}
 
}

studentBodik.showInfo();
studentBodik.showAge();

function student(firstName, lastName, birthDate){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.showInfo = function(){
        console.log(`First name : ${firstName}` + '\n' + `Last name : ${lastName}` + '\n' + `Nick name : ${nickName}` + '\n' + `Birth date : ${birthDate}`);
    }
    
}