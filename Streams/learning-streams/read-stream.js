const fs = require('fs');
const rs = fs.createReadStream("./file.text");

rs.on("data", (data)=>{
    console.log("Read chunk: ", data);
});

rs.on("end",()=>{
    console.log("No more data.");
});

