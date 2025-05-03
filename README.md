<img
  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIzMCIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzE4Ml8yKSIvPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0icGFpbnQwX3JhZGlhbF8xODJfMiIgY3g9IjAiIGN5PSIwIiByPSIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSgzMCAzMCkgcm90YXRlKDkwKSBzY2FsZSgzMCAzMCkiPjxzdG9wIHN0b3AtY29sb3I9IiM2MGE1ZmEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2MGE1ZmEiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4="
  width="100"
  height="100"
/>

# jwt-tiny

[![npm version](https://badge.fury.io/js/jwt-tiny.svg)](https://badge.fury.io/js/jwt-tiny)
![size](http://img.badgesize.io/digplan/jwt-tiny/master/module.mjs)

A lightweight, zero-dependency JWT (JSON Web Token) implementation for Node.js and modern browsers. Perfect for server-side authentication and data exchange.

## Features

- 🔒 Zero dependencies
- 📦 Ultra-lightweight (minimal bundle size)
- ⚡ Pure JavaScript implementation
- 🔄 Supports both Node.js and browser environments
- 🛡️ Secure token generation and verification
- 📝 Simple and intuitive API

## Installation

```bash
npm install jwt-tiny
```

## Usage

```js
import { JWT } from 'jwt-tiny'

// Initialize with your secret key
const secret = 'your-256-bit-secret'
const jwt = new JWT(secret)

// Create a payload with claims
const payload = {
  name: "John Doe",
  roles: ["admin"],
  iat: +new Date(), // issued at timestamp
  exp: +new Date() + (60 * 60 * 1000) // expires in 1 hour
}

// Create a JWT token
const token = jwt.create(payload)

// Verify and decode the token
const verifiedPayload = jwt.verifyJSON(token)
if (!verifiedPayload) {
  console.log('Invalid token')
} else if (verifiedPayload.exp < +new Date()) {
  console.log('Token has expired')
} else {
  console.log('Token is valid:', verifiedPayload)
}
```

## API Reference

### `new JWT(secret)`
Creates a new JWT instance with the provided secret key.

### `jwt.create(payload)`
Generates a new JWT token from the provided payload.

### `jwt.verify(token)`
Verifies and returns the decoded payload from a JWT token.

### `jwt.verifyJSON(token)`
Verifies and returns the decoded payload as a JSON object.

## Security Considerations

- Always use a strong, random secret key
- Keep your secret key secure and never expose it in client-side code
- Consider implementing token expiration (exp claim)
- Use HTTPS for token transmission

## License

MIT
