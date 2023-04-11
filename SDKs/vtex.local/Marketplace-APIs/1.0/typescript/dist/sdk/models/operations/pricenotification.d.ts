import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PriceNotificationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Name of the VTEX account that belongs to the marketplace. The notification will be posted into this account.
     */
    accountName: string;
    /**
     * Environment to use. Used as part of the URL.
     */
    environment: string;
    /**
     * A string that identifies the seller in the marketplace. This ID must be created by the marketplace and informed to the seller before the integration is built.
     */
    sellerId: string;
    /**
     * A string that identifies the seller's SKU that suffered the change. This is the ID that the marketplace will use for all  references to this SKU, such as price and inventory notifications.
     */
    skuId: string;
}
export declare class PriceNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
