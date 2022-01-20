# jwt-tiny

Zero dependency, pure JS, tiny JWT for servers.

```js
const {JWT} = import('jwt-tiny');
const secret = 'your-256-bit-secret';
const payload = {
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022
};

const jwt = new JWT(secret);
const jwtstr = jwt.create(payload);
const payload = jwt.verify(jwtstr);
console.log(jwtstr, payload);
```
