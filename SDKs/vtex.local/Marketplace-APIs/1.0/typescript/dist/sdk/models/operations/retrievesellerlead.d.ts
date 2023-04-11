import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RetrieveSellerLeadRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
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
export declare class RetrieveSellerLeadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
