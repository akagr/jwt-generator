# JWT Generator

Small node cli app to generate json web token

## How to use it

Clone the repo and run `npm install` in it. After that, use it with `node index.js <email> <secret>`.

## Example

```
> node index.js 'akagr@outlook.com' 'mysecret'

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJha2FnckBvdXRsb29rLmNvbSIsInRpY2tldCI6eyJ2YWxpZFVwdG8iOjE1MTk3MzQ1NjUyMjcsInZhbGlkIjp0cnVlLCJ2YWxpZGl0eVJlYXNvbiI6bnVsbCwibWFzdGVyTG9naW5JZCI6ImFrYWdyQG91dGxvb2suY29tIn0sImlhdCI6MTUxOTczNDI2NTIyN30.DI5T6ugsrwW6aJYAQiTq1y7g45yN0_wMKlauvUgEFBs
```

## Notes

* The secret is assumed to be base64 encoded. If it's not the case, replace `Buffer.from(secret, 'base64')` in index.js with `secret`.
* The `typ` field in header is removed by default. If that's not desirable, remove `'typ': undefined` from `index.js`.
