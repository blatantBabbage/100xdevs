const allPeople = [{firstname : "SNN",
gender : "Male",
metadata : {
    age : 28,
    address : "123 Atocha"
}},{firstname : "Tan",
gender : "Female",
metadata : {
    age : 28,
    address : "123 Atocha"
}},{firstname : "Vik",
gender : "Male",
metadata : {
    age : 29,
    address : "123 Atocha"
}}]

for(let i=0; i<allPeople.length; i++) {
    if(allPeople[i]["metadata"]["age"] == 29) {
        console.log(allPeople[i]["firstname"] + " is 29 years old")
    }
}