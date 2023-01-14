function PasswordValid(password) {

    const validLength = password.length >= 8
    let hasLetter = /[a-zA-Z]/g.test(password)
    let hasNumber = /[0-9]/g.test(password)
    return hasNumber && hasLetter && validLength

    // let validPassword = true
    // if(password == ""){
    //     //    handleError('Min Passwords length of 5','password')
    //        validPassword = false
    // }
    // if(password.length<5){
    //     //    handleError('Min Passwords length of 5','password')
    //        validPassword = false
    // }
    // return validPassword
}
module.exports=PasswordValid;