const express = require('express');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


const {getHomePage} = require('./routes/index');
const {getExamplesHomePage, getBasicEmbedPage, getDynamicLoadPage, getFilterViewPage} = require ('./routes/examples');
const port = 5000;

app.set('port', process.env.port || port);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());

app.get('/', getHomePage);
app.get('/examples_home', getExamplesHomePage)
app.get('/basic_embed', getBasicEmbedPage);
app.get('/dynamic_load', getDynamicLoadPage);
app.get('/filter_view', getFilterViewPage);

app.listen(port, () => {
  console.log('Server running on port:' + port);
});
