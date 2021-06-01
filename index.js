const app = require("./src/server");
const http = require('http').createServer(app);

//? Funcion to start the server
async function init(){
    http.listen(app.get('port'), () => {
        console.log(`Server running on port ${app.get('port')}`);
    });
}

//? Starting server
init();