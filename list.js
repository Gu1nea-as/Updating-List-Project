class Passenger{
    constructor(firstName, lastName, DoB, departure, arrival, leavedate, returndate, bags, meal, extra, id){
        this.firstName = firstName
        this.lastName = lastName
        this.DoB = DoB
        this.departure = departure
        this.arrival = arrival
        this.leavedate = leavedate
        this.returndate = returndate
        this.bags = bags
        this.meal = meal
        this.extra = extra
        this.id = id
    }
}

let passengerList = []
let idCount = 0
let extracost = 0
let age = 0
let tripDuration = 0

function addToList(){
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let DoB = document.getElementById("DoB").value
    let departure = document.getElementById("departure").value
    let arrival = document.getElementById("arrival").value
    let leavedate = document.getElementById("leavedate").value
    let returndate = document.getElementById("returndate").value
    let bags = document.getElementById('bags').value
    let radio = document.getElementsByName('meal')
    for(let i = 0; i < radio.length; i++){
        if(radio[i].checked){
            var meal = radio[i].value
            break
        }
    }
    let checkbox = document.getElementsByName('extra')
    let extra = ""
    for(let j = 0; j < checkbox.length; j++){
        if(checkbox[j].checked){
            extra += `${checkbox[j].value} `
            extracost += 10
        }
    }

    if(firstName != "" && lastName != "" && DoB != "" && departure != "" && arrival != "" && leavedate != "" && returndate != ""){
        let passenger = new Passenger(firstName, lastName, DoB, departure, arrival, leavedate, returndate, bags, meal, extra, idCount)
        
        idCount++
        passengerList.push(passenger)
        console.log(passengerList[0])
        let birthdate = new Date(DoB)
        age = Date.now() - birthdate.getTime()
        age = Math.abs(Math.floor(age / (1000 * 60 * 60 * 24 * 365.25)))
        
        let leave = new Date(leavedate)
        let returnD = new Date(returndate)
        diff = returnD.getTime() - leave.getTime()
        tripDuration = Math.abs(Math.floor(diff / (1000 * 60 * 60 * 24)))

        document.getElementById("firstName").value = ""
        document.getElementById("lastName").value = ""
        document.getElementById("DoB").value = ""
        document.getElementById("departure").value = ""
        document.getElementById("arrival").value = ""
        document.getElementById("leavedate").value = ""
        document.getElementById("returndate").value = ""
        document.getElementById("bags").value = ""
        
        
    }
}


function print(){
    let space = document.getElementById("names")
    
    for(let i = 0; i < passengerList.length; i++){
        space.innerHTML += `<div><span>${passengerList[i].id}</span>${passengerList[i].firstName} ${passengerList[i].lastName}</div>`
    }
}


function search(){
    let searchedID = document.getElementById("search").value
    document.getElementById('outfirstName').value = passengerList[searchedID].firstName
    document.getElementById('outlastName').value = passengerList[searchedID].lastName
    document.getElementById('outDoB').value = passengerList[searchedID].DoB
    document.getElementById('outdeparture').value = passengerList[searchedID].departure
    document.getElementById('outarrival').value = passengerList[searchedID].arrival
    document.getElementById('outleaveDate').value = passengerList[searchedID].leavedate
    document.getElementById('outreturnDate').value = passengerList[searchedID].returndate
    document.getElementById('outbags').value = passengerList[searchedID].bags
    document.getElementById('outmeal').value = passengerList[searchedID].meal
    document.getElementById('outextras').value = passengerList[searchedID].extra
    document.getElementById('outcost').textContent = `$3${extracost}`
    document.getElementById('outage').textContent = `${age}`
    document.getElementById('outduration').textContent = `${tripDuration}`

}

