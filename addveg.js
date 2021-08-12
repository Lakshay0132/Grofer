var messagesRef =firebase.database().ref('vegetables');
var file;
document.getElementById('form_details').addEventListener('submit',submitform);

function submitform(e){
    e.preventDefault();
    
    var veg_name = getInputval('veg_name');
    var sabji = getInputval('sabji');
    var price = getInputval('price');
    saveMessages(veg_name,sabji,price);  
    // window.location.reload();
 //   window.alert("Your data has been saved !!!")
    
}


function getInputval(id){
    return document.getElementById(id).value;


}
function saveMessages(veg_name,sabji,price){
    var newMessageRef = messagesRef.push();
    var id = newMessageRef.key;
    // console.log(id)
    console.log(newMessageRef)
    newMessageRef.set({
        English_name:veg_name,
        Hindi_name:sabji,
        price:price,
    }
        , function(error) {
          if (error) {
            // The write failed...
            window.alert(error);
          } else {
            // Data saved successfully!
              //window.alert("SAved data");
              uploadimg(id);
          }
        }
        
        );
    
    


    }
        // database = firebase.database();
        // var ref=database.ref('vegetables');

        // ref.on("value",gotData,errData);

        // function gotData(data){

        //     // console.log(data.val());
        //     var vegetables = data.val();
        //     var keys = Object.keys(vegetables);
        //     // console.log(keys);
        //     for (var i=0; i<keys.length;i++){
        //         var k=keys[i];
        //         var English_name=vegetables[k].English_name;
        //         var Hindi_name=vegetables[k].Hindi_name;
        //         var price=vegetables[k].price;
        //         // console.log(English_name,Hindi_name,price);
            
        //     }
        // }
        // function errData(err){
    
        //     console.log('Error!!');
        //     console.log(err);
        // }
        function home(){
            window.location.href="home.html"
        }

        function uploadimg(id){
            // Get a reference to the storage service, which is used to create references in your storage bucket
        var storage = firebase.storage();

        // Create a storage reference from our storage service
        var storageRef = storage.ref().child(id);

        storageRef.put(file).then(function(snapshot) {
        window.alert("saved");
        window.location.reload();
         // refresh
         });

        }

        function readURL(input) {
            if (input.files && input.files[0]) {
              file = input.files[0];
              var output = document.getElementById('output');
              output.src = URL.createObjectURL(event.target.files[0]);
            
            }
          }

    
    