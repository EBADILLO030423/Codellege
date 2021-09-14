const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const PORT = process.env.PORT || 3000;


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.use(express.static('public'));
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`);
});

console.log('Running at Port 3000');