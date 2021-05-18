const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/walter'));
app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/src/app/meni/meni.component.html/employees'));});
app.listen(process.env.PORT || 8080);
