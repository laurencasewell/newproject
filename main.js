const hello = "hello";

function greeting(myName) {
    return hello+' '+myName
}
const log=(thing)=>{
    console.log(thing)
}

const fakeconsole={
    log:log,
    name:"lauren"
}

fakeconsole.log(hello)
fakeconsole.log(greeting(fakeconsole.name))