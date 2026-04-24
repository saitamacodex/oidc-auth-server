class AuthServerController {
  // service discovery
  public async authServiceDiscovery(baseUrl: string) {
    return {
      issuer: baseUrl,
      authorization_endpoint: `${baseUrl}/o/authenticate`,
      userinfo_endpoint: `${baseUrl}/o/userinfo`,
      jwks_uri: `${baseUrl}/o/certs/jwks.json`,
    };
  }
}

export default AuthServerController;
