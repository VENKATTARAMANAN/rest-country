var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div");
container.setAttribute("class","row");
row.classList.add("row","m-3");
container.append(row);

async function getdata(){
  var res=await fetch("https://restcountries.com/v2/all");
  var res1= await res.json();
  for(var i=0;i<res1.length;i++){  
    try {
        row.innerHTML+=
        `<div class="col-md-4">
        <div class="card border-primary mb-3" >
        <div class="card-body text-primary" style="margin:0 auto">
        <h5 class="card-title fluid">${res1[i].name}</h5>
        <img src="${res1[i].flag}" class="card-img-top" alt="Country Flags">
          <p class="card-text"> Capital:${res1[i].capital}</p>
          <p class="card-text">Region:${res1[i].region}</p>
          <p class="card-text">Country Code:${res1[i].alpha3Code}</p>
        <button class="btn btn-primary" onclick="weatherdata(${res1[i].latlng[0]},${res1[i].latlng[1]},'${res1[i].name}')">Check Weather</button>
        </div>
      </div>
      </div>`
      
      } 
 catch (error) {
  console.log(error);
}
document.body.append(container);
}
}
getdata();



// async function data(){
//   var res=await fetch("https://restcountries.com/v2/all");
//   var res1= await res.json();

//   for(var i=0;i<res1.length;i++){
//       try {
//           weatherdata(res1[i].latlng[0],res1[i].latlng[1]);
//       } 
//  catch (error) {
//   console.log(error);
// }
// }
// }  

async function weatherdata(lat,lon,countryName){
  try {
    if(lon===undefined) throw new Error("Invalid Coordinates");
    let res2=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fa4973b1fa1ca717811b9566c55321ec`);
    let res3=await res2.json();
    alert(`Country Name: ${countryName}\nTemp: ${res3.main.temp}`)
  } catch (error) {
   console.log(error) 
  }
  }
  // data();



 



