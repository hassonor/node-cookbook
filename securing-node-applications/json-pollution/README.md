1. `npm i`
2. `node server.js`
3. Run On the second
   terminal: `curl -H "Content-Type: application/json" -X POST -d '{"msg":"Hello","name":"Or"}' http://localhost:3000`
4. Run with additional JSON property named
   hasOwnProperty:`curl -H "Content-Type: application/json" -X POST -d '{"msg":"Hello","name":"Or", "hasOwnProperty":0}' http://localhost:3000`