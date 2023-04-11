import { SpeakeasyBase } from "../../../internal/utils";
/**
 * * The grant type is invalid.
 *
 * @remarks
 * * The authorization code is invalid.
 * * The redirect URI doesn't match the URI to create the authorization code.
 */
export declare class AuthError extends SpeakeasyBase {
    /**
     * The name of the error.
     */
    error: string;
    /**
     * The description of the error.
     */
    errorDescription: string;
}
