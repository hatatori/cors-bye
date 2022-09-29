# cors-bye
### Mensagem de erro
Se você já se deparou com esse erro:
```
Cross-Origin Request Blocked: The Same Origin Policy disallows
reading the remote resource at https://some-url-here. (Reason:
additional information here).
```
<br>Vamos solucionar.
### Parte 1
`git clone https://github.com/hatatori/cors-bye`<br>
`node server.js`<br>
`http://localhost:8080/?link=<URL>`
### Parte 2
```js
fetch("http://localhost:8080/?link=https://api.pi.delivery/v1/pi?start=0&numberOfDigits=100")
.then(e=>e.json())
.then(e=>console.log(e))
```

