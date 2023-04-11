import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MatchRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    matchRequest: shared.MatchRequest;
    /**
     * Name of the VTEX account. Used as part of the URL
     */
    accountName: string;
    /**
     * Whenever an SKU suggestion is matched, it is associated to a unique ID. Fill in this field with the matchId you wish to filter by. The `matchId`'s value can be obtained through the *[Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion) endpoint.
     */
    matchid: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.
     */
    sellerId: string;
    /**
     * A string that identifies the SKU in the marketplace. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.
     */
    sellerskuid: string;
    /**
     * Whenever an SKU Suggestion is updated or changed, a new version of the original one is created. All versions are logged, so you can search for previous our current states of SKU suggestions. This field is the versionId associated to the version you choose to search for. You can get this field's value through the[Get SKU Suggestion by ID](https://developers.vtex.com/vtex-rest-api/reference/getsuggestion). through the `latestVersionId` field.
     */
    version: string;
}
export declare class MatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
