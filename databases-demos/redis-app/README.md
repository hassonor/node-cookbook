Running Redis:<br>
`docker run --publish 6379:6379 --name node-redis --detach redis` <br><br>
Running Redis with Authentication:<br>
`docker run --publish 6380:6379 --name node-redis-pw --detach redis redis-server --requirepass PASSWORD`