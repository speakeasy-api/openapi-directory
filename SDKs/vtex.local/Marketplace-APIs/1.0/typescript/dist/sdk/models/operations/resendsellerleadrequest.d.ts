import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResendSellerLeadRequestRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    resendSellerLeadRequestRequest: shared.ResendSellerLeadRequestRequest;
    /**
     * Name of the VTEX account that belongs to the marketplace.
     */
    accountName: string;
    /**
     * Environment to use. Used as part of the URL.
     */
    environment: string;
    /**
     * ID of the Seller Lead invited to the marketplace.
     */
    sellerLeadId: string;
}
export declare class ResendSellerLeadRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
