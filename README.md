# cors-bye
### Error message
```
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```
## Solution
### Start server
`git clone https://github.com/hatatori/cors-bye`<br>
`cd cors-bye`<br>
`node server.js`<br>
### Url
`http://localhost:8080/?link=<URL>`
#### Code js
```js
fetch("http://localhost:8080/?link=https://api.pi.delivery/v1/pi?start=0&numberOfDigits=100")
.then(e=>e.json())
.then(e=>console.log(e))
```

