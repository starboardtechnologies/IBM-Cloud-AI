var request = require("request");

var translationUsername=""
var translationPassword=""
var transUrl="https://gateway.watsonplatform.net/language-translator/api"

var data={};

data source="English";
data target="Spanish"
data text="";

request.post({
  url:transUrl,
  json:data,
  auth:{
    user:translationUsername
    pass:translationPassword
  }
},
function(err, response, body){
  console.log(body);
});


)
