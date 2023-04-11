import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifying the claims to be included in a token.
 */
export declare class OptionalClaim extends SpeakeasyBase {
    additionalProperties?: Record<string, any>;
    /**
     * Is this a required claim.
     */
    essential?: boolean;
    /**
     * Claim name.
     */
    name?: string;
    /**
     * Claim source.
     */
    source?: string;
}
