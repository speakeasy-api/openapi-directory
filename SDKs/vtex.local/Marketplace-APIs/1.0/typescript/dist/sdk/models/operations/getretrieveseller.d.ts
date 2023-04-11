import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRetrieveSellerRequest extends SpeakeasyBase {
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
     * Sales channel (or [trade policy](https://help.vtex.com/en/tutorial/how-trade-policies-work--6Xef8PZiFm40kg2STrMkMV)) associated to the seller account created.
     */
    sc?: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace
     */
    sellerId: string;
}
export declare class GetRetrieveSellerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
