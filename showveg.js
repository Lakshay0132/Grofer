var Vegetables = [];
var database=firebase.database();
var storage = firebase.storage();

function getTrips(){
  // var database = firebase.database();
 database.ref("vegetables").once("value").then(function (veg) {
  if(veg.val()!=null){
    var num=veg.numChildren(), nums=0;
    veg.forEach(function(childveg){
    nums++;
      var vegid = childveg.key;
      var item = {
        id : vegid,
        English_name:childveg.child('English_name').val(),
        Hindi_name:childveg.child('Hindi_name').val(),
        price:childveg.child('price').val(),
      };
      Vegetables.push(item);
      if(num==nums){
        showHtml();
        document.getElementById("loading").style.display = "none";
      }
    })
  }
  
})}

getTrips();




function showHtml(){

  document.getElementById("veg_tile").innerHTML += ` ${Vegetables.map(function(veg){
    
    return `
    <div class="col-sm-3 div_veg">
  <br /><a href=""><img  alt="${veg.English_name} photo" class="vege" id="${veg.id}"/></a><p></p>
  ${getimage(veg.id)}

  <h5>${veg.English_name}</h5> 
  <h5> ${veg.Hindi_name}</h5>
  <h6>Price: ${veg.price} <i class="fa fa-inr" aria-hidden="true"></i> per Kg/-</h6>
  <button class="del_btn" onclick="remove(this.id)" id="${veg.id}">Delete <i class="fa fa-minus-square-o" aria-hidden="true"></i></button>
  <button class="add_btn" onclick="sender(this.id)" id="${veg.id}">Edit</i></button>
        
  </div>`

  }).join('')}`;

}

function remove(id) {
  database.ref("vegetables").child(id).remove();
  window.alert("Your item was deleted 'PLEASE REFRESH THE PAGE'");
  window.location.reload();
  
}

function sender(id){
  Vegetables.forEach(myfunction)
  function myfunction(item){
    if(item.id==id){
      console.log(item)
      item=JSON.stringify(item);
      localStorage.setItem("item",item);
      
      window.location.href="update.html";
    }
  }
}
function getimage(id){

    storage.ref().child(id).getDownloadURL().then(function(url) {

      var img = document.getElementById(id);
      img.src = url;


    }).catch(function(error) {
      // Handle any errors
    });
    return ""


}

function logout(){
  firebase.auth().signOut();
  window.location.href="form2.html"

}
