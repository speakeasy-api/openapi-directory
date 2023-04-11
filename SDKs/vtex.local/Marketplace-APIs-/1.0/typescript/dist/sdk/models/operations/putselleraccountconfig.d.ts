import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutselleraccountconfigRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    putselleraccountconfigRequest: shared.PutselleraccountconfigRequest;
    /**
     * Name of the VTEX account that belongs to the marketplace. All data extracted, and changes added will be posted into this account.
     */
    accountName: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
     */
    sellerId: string;
}
export declare class PutselleraccountconfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
