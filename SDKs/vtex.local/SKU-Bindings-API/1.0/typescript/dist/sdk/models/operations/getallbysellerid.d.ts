import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetallbySellerIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation _Accept_ Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Describes the type of the content being sent.
     */
    contentType: string;
    /**
     * ID that identifies the seller in the marketplace. It can be the same as the seller name or a unique number. Check the **Sellers management** section in the Admin to get the correct ID.
     */
    sellerId: string;
}
export declare class GetallbySellerId200ApplicationJSON extends SpeakeasyBase {
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
export declare class GetallbySellerIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getallbySellerId200ApplicationJSONObjects?: GetallbySellerId200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
