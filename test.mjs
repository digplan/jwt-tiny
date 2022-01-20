import { JWT } from './index.mjs';

// Don't use this secret for anything. Testing only.

const secret =
  'NTNv7j0TuYARvmNMmWXo6fKvM4o6nv/aUi9ryX38ZH+L1bkrnD1ObOQ8JAUmHCBq7Iy7otZcyAagBLHVKvvYaIpmMuxmARQ97jUVG16Jkpkp1wXOPsrF9zwew6TpczyHkHgX5EuLg2MeBuiT/qJACs1J0apruOOJCg/gOtkjB4c=';
const payload = {
  sub: '1234567890',
  name: 'John Doe',
  admin: true,
  iat: 1642638486,
  exp: 1642642086,
};

const jwt = new JWT(secret);
const jwtstr = jwt.create(payload);
console.log(jwtstr);
console.log(jwt.verify(jwtstr));
