# jwt-tiny
<div class="orb"></div>

[![npm version](https://badge.fury.io/js/jwt-tiny.svg)](https://badge.fury.io/js/jwt-tiny)
![size](http://img.badgesize.io/digplan/jwt-tiny/master/index.mjs)

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
  iat: +new Date() // issued at timestamp
}

// Create a JWT token
const token = jwt.create(payload)

// Verify and decode the token
const verifiedPayload = jwt.verify(token)
const jsonPayload = jwt.verifyJSON(token)

console.log('Token:', token)
console.log('Verified Payload:', verifiedPayload)
console.log('JSON Payload:', jsonPayload)
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

<style>
.orb {
    width: 60px;
    height: 60px;
    background: radial-gradient(circle at 30% 30%, #60a5fa, var(--primary));
    border-radius: 50%;
    margin: 0 auto 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
