import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSuggestionbyversionRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the VTEX account. Used as part of the URL
     */
    accountName: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.
     */
    sellerId: string;
    /**
     * A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.
     */
    sellerskuid: string;
    /**
     * Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the `versionId` associated to the version you choose to search for. You can get this field's value through the [Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field.
     */
    version: string;
}
export declare class GetSuggestionbyversionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
