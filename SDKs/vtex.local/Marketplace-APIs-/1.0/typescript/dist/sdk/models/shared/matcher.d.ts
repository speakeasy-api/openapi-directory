import { SpeakeasyBase } from "../../../internal/utils";
export declare class Matcher extends SpeakeasyBase {
    /**
     * Insert in this field any notes about the approval. This field is optional.
     */
    description?: string;
    /**
     * Whether the matcher is active in the account (`true`), or not (`false`).
     */
    isActive: boolean;
    /**
     * Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.
     */
    matcherId: string;
    /**
     * The Received SKUs module uses this endpoint to send updates about a suggestion, to the chosen Matcher.
     */
    updatesNotificationEndpoint: string;
    /**
     * The chosen Matcher's url. It is the endpoint that the Received SKUs module calls, to send new suggestions for the Matcher's review.
     */
    hookBaseAddress: string;
}
