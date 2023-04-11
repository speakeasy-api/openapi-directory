import { SpeakeasyBase } from "../../../internal/utils";
import { OffersPerSalesChannel } from "./offerspersaleschannel";
export declare class Offer extends SpeakeasyBase {
    /**
     * The sales channel (or [trade policy](https://help.vtex.com/en/tutorial/como-funciona-uma-politica-comercial--6Xef8PZiFm40kg2STrMkMV#master-data)) ID in which the SKU is available.
     */
    availableSalesChannels: string;
    offersPerSalesChannel: OffersPerSalesChannel[];
    /**
     * ID of the seller in the marketplace. This ID must be created by the marketplace.
     */
    sellerId: string;
    /**
     * A string that identifies the SKU in the seller. This is the ID that the marketplace will use for future references to this SKU, such as price and inventory notifications.
     */
    sellerSkuId: string;
}
