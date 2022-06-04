Created by the command:<br>
`npx express-generator --views=pug benchmarking-views`

### Replicating benchmark in a production environment

1. `npm install -g autocannon`
2. `npm i`
3. `NODE_ENV=production npm start`
4. Open new Terminal and run: `autocannon --connections 100 http://localhost:3000/`



