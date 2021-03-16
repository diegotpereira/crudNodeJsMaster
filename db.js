//db.js
async function connect(){
    if (global.connection && global.connection.state !== 'disconnected') 
        return global.connection;
    
    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@locaalhost:3306/crud_node_js_master");
    console.log("Conexão ao banco realizada com sucesso!.");
    global.connection = connection;
    return connection;
}