import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SaveSuggestionRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    saveSuggestionRequest: shared.SaveSuggestionRequest;
    /**
     * Name of the VTEX account to which the seller wants to suggest a new SKU. It is used as part of the request URL.
     */
    accountName: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.
     */
    sellerId: string;
    /**
     * A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.
     */
    sellerSkuId: string;
}
export declare class SaveSuggestionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
