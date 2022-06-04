Created by the command:<br>
`npx express-generator --no-view benchmarking-http`

### Benchmarking HTTP Request:

1. `npm install -g autocannon`
2. `npm i`
3. `npm start`
4. Open new Terminal and run: `autocannon --connections 100 http://localhost:3000/`
5. Open new Terminal and run: `autocannon --connections 100 --duration 20 http://localhost:3000/`

### Benchmarking POST HTTP Request:

1. `npm i`
2. `node post-server.js`
3. Open new Terminal and
   run: `autocannon --connections 100 --method POST --headers 'content-type=application/json' --body '{"hello":"world"}' http://localhost:3000/`
