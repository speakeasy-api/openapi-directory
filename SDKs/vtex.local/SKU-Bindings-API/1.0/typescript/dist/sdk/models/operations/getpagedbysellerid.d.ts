import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetpagedbySellerIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * Page number.
     */
    page: string;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId: string;
    /**
     * Amount of results per page.
     */
    size: string;
}
export declare class GetpagedbySellerId200ApplicationJSON extends SpeakeasyBase {
    /**
     * The percentage that must be filled in as agreed between the marketplace and the seller.
     */
    freightCommissionPercentage?: number;
    /**
     * Defines if the SKU binding is active.
     */
    isActive?: boolean;
    /**
     * The percentage that must be filled in as agreed between the marketplace and the seller. If there is no such commission, please fill in the field with the value: `0.00`.
     */
    productCommissionPercentage?: number;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId?: string;
    /**
     * SKU ID in the seller's store.
     */
    sellerStockKeepingUnitId?: string;
    /**
     * SKU ID in the marketplace.
     */
    stockKeepingUnitId?: number;
}
export declare class GetpagedbySellerIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getpagedbySellerId200ApplicationJSONObjects?: GetpagedbySellerId200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
