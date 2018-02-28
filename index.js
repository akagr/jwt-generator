var jwt = require('jsonwebtoken');
var email = process.argv[2] || '';
var secret = process.argv[3] || ''; // <-- put your secret here

var token = {
  'sub': email,
  'ticket': {
    'validUpto': Date.now() + 5 * 60 * 1000,
    'valid': true,
    'validityReason': null,
    'masterLoginId': email
  }
}

console.log(jwt.sign(token, Buffer.from(secret, 'base64'), {
  header: {
    'alg': 'HS256',
    'typ': undefined
  }
}));
