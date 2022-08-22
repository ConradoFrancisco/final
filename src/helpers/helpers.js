const bcrypt = require ('bcryptjs')

const helpers = {}

helpers.cifrarpw = async (pw) => {
    const alg = await bcrypt.genSalt(10);
    const pwfinal = await bcrypt.hash(pw,alg);
    return pwfinal
}

helpers.comparepw = async (pw,dbpw) =>{
    try {
        return  await bcrypt.compare(pw,dbpw);
    } catch(e){
        console.log(e)
    }
    
}

helpers.contNum = (input) =>{
    if (input.includes("1") || input.includes("2") || input.includes("3")|| input.includes("4") || input.includes("5") || input.includes("6") || input.includes("7") || input.includes("8") || input.includes("9") || input.includes("0")){
        return true
    }
}






module.exports = helpers