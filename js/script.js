


// API Begins Here. Pulling from AJAX 
const api = {
    "async": true,
    "crossDomain": true,
    "url": "https://motivational-quotes1.p.rapidapi.com/motivation",
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "X-RapidAPI-Key": "2c7bc1880bmshbc56370d627469cp1aef62jsn3ccfa31b1ad3",
        "X-RapidAPI-Host": "motivational-quotes1.p.rapidapi.com"
    },
    "processData": false,
    "data": {
        "key1": "value",
        "key2": "value"
    }
};

$.ajax(api).done(function (response) {
    console.log(response);

const api= document.getElementById('quote').innerHTML = response;
    
});
function ajaxpost () {
    // Get Data from html email form with AJAX pull
    var form = document.getElementById("myForm");
    var data = new FormData(form);
   
   
    //This command will poste-mail input to server (though it currently isn't connected to one)
    fetch("index.html", { method:"POST", body:data })
    .then(res=>res.text())
   
    // Show message when submit is clicked. Will show confirmation message. This form isn't connected to server 
    // yet but, I hope to connect it in the future. Will reflect else statement.
    .then((response) => {
      console.log(response);
      if (response == "OK") { alert("SUCCESSFUL!"); }
      else { alert("☀️Your Sunshine has been sent ☀️"); }
    })
   
    // HANDLE FETCH ERROR
    .catch((err) => { console.error(err); });
   
    // PREVENT FORM SUBMIT
    return false;
  }





