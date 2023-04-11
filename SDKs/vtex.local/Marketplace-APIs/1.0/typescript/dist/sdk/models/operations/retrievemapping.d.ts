import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RetrieveMappingRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the VTEX account that belongs to the marketplace. Used as part of the URL
     */
    accountName: string;
    /**
     * Marketplace's account name, the same one inputted on the endpoint's path.
     */
    an: string;
    /**
     * Environment to use. Used as part of the URL.
     */
    environment: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace.
     */
    sellerId: string;
}
export declare class RetrieveMapping200ApplicationJSON extends SpeakeasyBase {
    /**
     * Marketplace's sales channel that will be associated to the seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187).
     */
    marketplaceSalesChannel?: string;
    /**
     * Seller's [affiliate](https://help.vtex.com/en/tutorial/configuring-affiliates--tutorials_187) that will be associated with the marketplace's sales channel. Through the affiliate, the seller determines which of his sales channel will be used for the mapping.
     */
    sellerChannel?: string;
}
export declare class RetrieveMappingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    retrieveMapping200ApplicationJSONObjects?: RetrieveMapping200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
