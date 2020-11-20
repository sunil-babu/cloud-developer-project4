// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'bcvigdxena'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-ht4686bt.eu.auth0.com',            // Auth0 domain
  clientId: '72wR1lb3lda2QbaTnL5MO0btkp6D3fJy',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
