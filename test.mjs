import { JWT } from './index.mjs';

// Don't use this secret for anything. Testing only.

const secret = 'your-256-bit-secret';
const payload = {
  sub: '1234567890',
  name: 'John Doe',
  iat: 1516239022,
};

const jwt = new JWT(secret);
const jwtstr = jwt.create(payload);
const verify = jwt.verify(jwtstr);
console.log(jwtstr, verify);
