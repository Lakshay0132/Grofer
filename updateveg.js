// var item = localStorage.getItem("item");
const database=firebase.database()
var item = JSON.parse(localStorage.getItem("item"));
if (item != null) {
  console.log(item);
  document.getElementById("eng_input").innerHTML=`<input
  type="text "
  placeholder="English name"
  class="input"
  id="veg_name"
  value="${item.English_name}"
/>`
document.getElementById("hindi_input").innerHTML=`
<input type="text " placeholder="Hindi name" class="input" id="sabji" value="${item.Hindi_name}" />
`
document.getElementById("price_input").innerHTML=`
<input
          type="text "
          placeholder="Price/Kg"
          class="input"
          id="price"
          value="${item.price}"
        />
`
}
function home(){
    window.location.href="home.html"
}
const rootref=database.ref('vegetables');
const update_btn=document.getElementById("updatebtn")


update_btn.addEventListener('click',(e)=>{
  e.preventDefault();
  
  const newdata={

    English_name:veg_name.value,
    Hindi_name:sabji.value,
    price:price.value,
  }

  rootref.child(item.id).update(newdata),function(error) {
    if (error) {
      // The write failed...
      window.alert(error);
    } else {
      // Data saved successfully!
        window.alert("SAved data");
        
    }
  }
  ;
  window.location.href="home.html "
  // window.alert("Data has been updated")
  
})

