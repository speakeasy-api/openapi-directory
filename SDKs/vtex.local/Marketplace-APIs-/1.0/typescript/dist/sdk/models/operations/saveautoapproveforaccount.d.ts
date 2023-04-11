import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveautoapproveforaccountRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    saveautoapproveforaccountRequest: shared.SaveautoapproveforaccountRequest;
    /**
     * Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
     */
    accountName: string;
}
/**
 * OK
 */
export declare class Saveautoapproveforaccount200ApplicationJSON extends SpeakeasyBase {
    /**
     * If the auto-approve setting is active (`true`) or not (`false`).
     */
    enabled?: boolean;
}
export declare class SaveautoapproveforaccountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    saveautoapproveforaccount200ApplicationJSONObject?: Saveautoapproveforaccount200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
