import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetsuggestionsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    /**
     * Define your pagination range, by adding the pagination starting value. Values should be bigger than 0, with a maximum of 50 records per page.
     */
    from?: number;
    /**
     * Define your pagination range, by adding the pagination ending value. Values should be bigger than 0, with a maximum of 50 records per page.
     */
    to?: number;
    /**
     * Name of the VTEX account. Used as part of the URL
     */
    accountName: string;
    /**
     * This field allows you to filter SKUs that have mapping or not. Insert `true` to filter SKUs that have mapping, or `false` to retrieve SKUs that aren't mapped.
     */
    hasmapping?: string;
    /**
     * Identifies the matching entity. It can be either VTEX's matcher, or an external matcher developed by partners, for example. The `matcherId`'s value can be obtained through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.
     */
    matcherid?: string;
    /**
     * This field allows you to customize your search. You can fill in this query param if you want to narrow down your search using the available filters on Received SKU modules.
     */
    q?: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller so it can call this endpoint.
     */
    seller?: string;
    /**
     * Narrow down you search, filtering by status. Values allowed on this field include: `accepted`, `pending` and `denied.`
     */
    status?: string;
    /**
     * This field allows users to filter SKU suggestions, by searching only the new suggestions that were just sent, and suggestions that have already been sent, but were updated. Possible values for this field include `new` and `update`.
     */
    type?: string;
}
export declare class GetsuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
