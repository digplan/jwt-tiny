# jwt-tiny

Zero dependency, pure JS, tiny JWT for servers.

```js
const jwt = new JWT(secret);
const jwtstr = jwt.create(payload);
console.log(jwtstr);  // JWT string
console.log(jwt.verify(jwtstr));  // Payload, or false if invalid signature
```
