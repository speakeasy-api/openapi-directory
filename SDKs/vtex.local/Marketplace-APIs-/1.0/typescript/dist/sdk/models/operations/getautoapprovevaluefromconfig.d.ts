import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetautoApprovevaluefromconfigRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
     */
    accountName: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
     */
    sellerId: string;
}
/**
 * OK
 */
export declare class GetautoApprovevaluefromconfig200ApplicationJSON extends SpeakeasyBase {
    /**
     * If the auto-approve setting is active for a given seller (`true`) or not (`false`).
     */
    enabled?: boolean;
}
export declare class GetautoApprovevaluefromconfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getautoApprovevaluefromconfig200ApplicationJSONObject?: GetautoApprovevaluefromconfig200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
