const vax = [
  {
      name: "Yasin",
      age: 21,
      temperature: 99
  },
  {
      name: "Bappy",
      age: 32,
      temperature: 98
  },
  {
      name: "Asif",
      age: 42,
      temperature: 99
  },
  {
      name: "Islam",
      age: 52,
      temperature: 400
  },
  {
      name: "Akib",
      age: 20,
      temperature: 98
  },
  {
      name: "Sazzad",
      age: 35,
      temperature: 102
  },
  {
      name: "Samy",
      age: 26,
      temperature: 65
  },
  {
      name: "Kaif",
      age: 18,
      temperature: 98
  },
  {
      name: "Tamim",
      age: 14,
      temperature: 100
  },
  {
      name: "Keya",
      age: 33,
      temperature: 96
  },
  {
      name: "Chaity",
      age: 23,
      temperature: 99
  }
];




const vaxTrail=(vax)=>{
  
//  const arr1=vax.filter((el,i)=>i<=1)
//  const arr2=vax.filter((el,i)=>i>1 &&i<=3)
//  const arr3=vax.filter((el,i)=>i>3 &&i<=5)
//  const arr4=vax.filter((el,i)=>i>5 &&i<=7)


// const obj={A:arr1,B:arr2,C:arr3,D:arr4}
// const a=arr1.map((ar)=>ar.age)

// const age=vax.map((p)=>p.age)
// const temp=vax.map((p)=>p.temperature)

const arry1=vax.filter((el,i)=>el.age>20&& el.age<30 && el.temperature<100)
const arry2=vax.filter((el,i)=>el.age>31&& el.age<40 && el.temperature<100)
const arry3=vax.filter((el,i)=>el.age>41&& el.age<50 && el.temperature<100)
const arry4=vax.filter((el,i)=>el.temperature>=100)




  let obj={A:arry1,B:arry2,C:arry3,D:arry4}


return obj

// if(arry1){
// obj={A:arry1} 
// }else if(arry2){

//   obj={B:arry2}
// }

// console.log(obj);





// if(age>=20 && age<=30 ||temp<100){

// console.log(age);

// }





// const arr2=vax.filter((el,i)=>i==2 || i==3)
// const arr2=vax.filter((el,i)=>i>1 && i<=3) 

// const arr2=vax.filter((el,i)=>i>=2 && i<=3)
// const arr3=vax.filter((el,i)=>i>3 && i<=5) 

// const arr3=vax.filter((el,i)=>i==4 || i==5 ) 
 



}
console.log(vaxTrail(vax));



// console.log(vaxTrail(vax));
