const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, 'public', 'build');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));


app.get('/api/users',async (req,res)=>{
   const user=[
      {user:"saleemabdullah764@gmail.com", password:"123456"},
      {user:"asad@gmail.com", password:"123456"},
      {user:"anas@gmail.com", password:"123456"},
      {user:"saif@gmail.com", password:"123456"}
   ]
   res.send(user)
})
app.get('/', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});