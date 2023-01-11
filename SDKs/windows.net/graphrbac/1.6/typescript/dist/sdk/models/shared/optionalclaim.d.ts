import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifying the claims to be included in a token.
**/
export declare class OptionalClaim extends SpeakeasyBase {
    additionalProperties?: Record<string, any>;
    essential?: boolean;
    name?: string;
    source?: string;
}
