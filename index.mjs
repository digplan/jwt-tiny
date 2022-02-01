const crypto = await import('node:crypto');

const replaceChars = (s) => {
  s = s.replaceAll('=', '');
  s = s.replaceAll('+', '-');
  s = s.replaceAll('/', '_');
  return s;
};

class JWT {
  constructor(private_key) {
    this.key = private_key;
  }
  create(payload) {
    const alg = '{"typ":"JWT","alg":"HS256"}';
    const header = replaceChars(Buffer.from(alg).toString('base64'));
    payload = replaceChars(Buffer.from(JSON.stringify(payload)).toString('base64'));
    const signature = this.sign(header, payload);
    return `${header}.${payload}.${signature}`;
  }
  sign(header, payload) {
    let signature = crypto.createHmac('sha256', this.key);
    return replaceChars(
      (signature.update(`${header}.${payload}`), signature.digest('base64'))
    );
  }
  verify(jwt) {
    const [header, payload, signature] = jwt.split('.');
    return this.sign(header, payload) === signature ? Buffer.from(payload, 'base64').toString('utf-8') : false;
  }
}

export { JWT };
