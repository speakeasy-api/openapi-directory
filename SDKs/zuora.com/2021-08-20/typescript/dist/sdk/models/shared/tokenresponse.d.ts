import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class TokenResponse extends SpeakeasyBase {
    /**
     * The generated token.
     */
    accessToken?: string;
    /**
     * The number of seconds until the token expires.
     */
    expiresIn?: number;
    /**
     * A globally unique identifier for the token.
     */
    jti?: string;
    /**
     * A space-delimited list of scopes that the token can be used to access.
     */
    scope?: string;
    /**
     * The type of token that was generated, i.e., `bearer`.
     */
    tokenType?: string;
}
