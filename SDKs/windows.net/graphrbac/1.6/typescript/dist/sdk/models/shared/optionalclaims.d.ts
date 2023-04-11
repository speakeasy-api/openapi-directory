import { SpeakeasyBase } from "../../../internal/utils";
import { OptionalClaim } from "./optionalclaim";
/**
 * Specifying the claims to be included in the token.
 */
export declare class OptionalClaims extends SpeakeasyBase {
    /**
     * Optional claims requested to be included in the access token.
     */
    accessToken?: OptionalClaim[];
    /**
     * Optional claims requested to be included in the id token.
     */
    idToken?: OptionalClaim[];
    /**
     * Optional claims requested to be included in the saml token.
     */
    samlToken?: OptionalClaim[];
}
