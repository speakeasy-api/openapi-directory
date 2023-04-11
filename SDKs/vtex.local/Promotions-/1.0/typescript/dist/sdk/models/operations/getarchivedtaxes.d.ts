import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetArchivedTaxesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
}
/**
 * Response object.
 */
export declare class GetArchivedTaxes200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array with taxes.
     */
    items?: shared.GetTaxes[];
}
export declare class GetArchivedTaxesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getArchivedTaxes200ApplicationJSONObject?: GetArchivedTaxes200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
