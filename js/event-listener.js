function  checkUsername(){
    var elMsg = document.getElementById('feedback');
    if(this.value.length < 5){
        elMsg.textContent = 'Username must be 5 characters or more';
    }else{
        elMsg.textContent = '';
    }
}

var ulUsername = document.getElementById('username');

elUsername.addEventListener('blur', checkUsername, false);