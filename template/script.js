var sum     =  0
var show    =  0
var route   = []
let text_area = document.querySelector("#text-area")
let pad_button = document.querySelector("#pad")
let fun_button = document.querySelector("#fun")

function roundToFive(num) {
    return +(Math.round(num + "e+5")  + "e-5");
}

function check_not_ope(){
    try{
        if (route[route.length-1] != "+" && route[route.length-1] != "-" && route[route.length-1] != "*" && route[route.length-1] != "/"){return 1}
        else{return 0}
    }
    catch{}
}

function display(){
    text_area.innerHTML = Number(show)
    
}

function AC(){
    sum   =  0
    show  =  0
    route = []
    display()

}

function C(){
    show = 0
    display()
}

function backspace(){
    if (show.toString().length>1){
        show = show.toString().slice(0,-1)
    }
    else{
        show = 0
    }
    display()
}

function square() {
    show *= show
    display()    
}

function click_number(number){
    if (isNaN(route[route.length-1])){
        route.push("")
    }
    show = show.toString() + number.toString()
    display()
}

function add(){
    if (check_not_ope()){
        route.push(show)
        route.push("+")
    }
    else{
        route.pop()
        route.push("+")
    }
    show = 0
}

function minus(){
    if (check_not_ope()){
        route.push(show)
        route.push("-")
    }
    else{
        route.pop()
        route.push("-")
    }
    show = 0
}

function times(){
    if (check_not_ope()){
        route.push(show)
        route.push("*")
    }
    else{
        route.pop()
        route.push("*")
    }
    show = 0
}

function divmod(){
    if (check_not_ope()){
        route.push(show)
        route.push("/")
    }
    else{
        route.pop()
        route.push("/")
    }
    show = 0
}

function decimal() {
    show += "."
    text_area.innerHTML = Number(show)+"." 
    
}

function answer(){
    route.push(show)
    ope_route = ""
    console.log(route)
    route.forEach(function(value){
        if(value!=""){
            if (isNaN(value)){
                ope_route += value.toString()
            }
            else{
                ope_route += Number(value).toString()
            }
        }
    })
    show = eval(ope_route)
    text_area.innerHTML = roundToFive(show)
    route = []
}

function padmode() {
    pad_button.style.backgroundColor = "brown"
    fun_button.style.backgroundColor = "darkolivegreen"
}

function funmode() {
    fun_button.style.backgroundColor = "brown"
    pad_button.style.backgroundColor = "darkolivegreen"
}