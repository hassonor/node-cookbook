Created by the command:<br>
`npx express-generator --views=pug flamegraph-app`

### Replicating benchmark in a production environment

1. `npm install -g autocannon 0x`
2. `npm i`
3. Run: `0x ./bin/www`
4. Open new Terminal and run: `autocannon --connections 100 http://localhost:3000/`
5. After ~1 min go to the process run terminal and cancel it by `Ctrl + C`
6. `flamegraph.html` with be created with results.
7. Run: `NODE_ENV=production 0x ./bin/www`
8. Re-Run and Open new Terminal and run: `autocannon --connections 100 http://localhost:3000/`
9. After ~1 min go to the process run terminal and cancel it by `Ctrl + C`
10. Another `flamegraph.html` with be created with results.
11. `node --inspect ./bin/www`
12. On Chrome Browser Navigate to: `chrome://inspect/#devices`
13. Click on **inspect** hyperlink.
14. Click on **Profiler** tab.
15. Click on **Start** to begin profiling.
16. Re-Run and Open new Terminal and run: `autocannon --connections 100 http://localhost:3000/`
17. After the `autocannon` requests complete click **Stop** within the **Profiler** interface.




