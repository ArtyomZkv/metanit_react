const http = require("http");
const fs = require("fs"); //fileSystem

http.createServer(function(request, response){  //Создание веб-сервера
    
    let filePath = "index.html";
    if(request.url !== "/"){//если запрос идёт не к корню (localhost:3000/)
        //получаем путь после слеша
        filePath = request.url.substring(1);
    }
    fs.readFile(filePath, function(error, data){//считывааем из системы запрошенный файл

        if(error){

            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else{
            response.end(data);//отправляем считанные данные пользователю
        }
    });

}).listen(3000, function(){//запуск созданного сервера на 3000 порту 
    console.log("Server started at 3000");
});