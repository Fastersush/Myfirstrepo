export const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.REACT_APP_USER_POOL_ID || 'YOUR_USER_POOL_ID',
      userPoolClientId: process.env.REACT_APP_USER_POOL_CLIENT_ID || 'YOUR_USER_POOL_CLIENT_ID',
      region: process.env.REACT_APP_AWS_REGION || 'us-east-1',
      signUpVerificationMethod: 'code' as const,
      loginWith: {
        email: true,
      },
    },
  },
  API: {
    REST: {
      cloudBlueprintAPI: {
        endpoint: process.env.REACT_APP_API_ENDPOINT || 'YOUR_API_GATEWAY_ENDPOINT',
        region: process.env.REACT_APP_AWS_REGION || 'us-east-1',
      },
    },
  },
}