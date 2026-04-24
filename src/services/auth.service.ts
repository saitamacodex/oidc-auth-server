import jose from "node-jose";
import { PUBLIC_KEY } from "../utils/cert.js";

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

  // fetch public key
  public async getPublicKey() {
    const key = await jose.JWK.asKey(PUBLIC_KEY, "pem");
    return key.toJSON();
  }
}

export default AuthServerController;
