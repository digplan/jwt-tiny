#!/usr/bin/env node
import { JWT } from './module.mjs';
import assert from 'node:assert'

// Don't use this secret for anything. Testing only.

const secret = 'your-256-bit-secret'
const payload = {
  name: 'John Doe',
  iat: +new Date(),
  roles: ['admin']
}

const jwt = new JWT(secret)
const jwtstr = jwt.create(payload)
console.log(jwtstr)

const verify = jwt.verify(jwtstr)
assert.match(verify, /../)

const o = jwt.verifyJSON(jwtstr)
console.log(o)
assert.deepEqual(o, payload)

assert.equal(jwt.verify('invalid'), false)