class Emplayees {

    login(){
        console.log('Employ has login!')
    }

    logout(){
        console.log('user has logout!')
    }

    requestLeaves(leaves){
        console.log(`Employ has requested for ${leaves}`)
    }
}

class programmer extends Emplayees{
    requestProject(){
        console.log('Programmer needs a project!')
    }

    requestLeaves(leaves){
        super.requestLeaves(leaves + 1)
        console.log('he is a programmer , one extra leave has auto add')
    } 
}

let Employ_1 = new programmer();

Employ_1.login()
Employ_1.requestLeaves(9)