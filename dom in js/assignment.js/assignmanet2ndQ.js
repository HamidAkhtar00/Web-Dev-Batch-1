 const obj1={
    Name:"usama",
    roll_no:"060",
    con_no:4848484,
    
}
obj1.Name="saif",
console.log(obj1)
console.log("second const obj2")
 let obj2={
    Name:"usama",
    roll_no:"060",
    con_no:4848484,
    
}
Object.freeze(obj2)

//ver1.Name="saif",
console.log(obj2)