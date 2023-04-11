import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { LogisticsInfo } from "./logisticsinfo";
import { SelectedAddress } from "./selectedaddress";
/**
 * Object containing shipping data.
 */
export declare class ShippingData extends SpeakeasyBase {
    /**
     * Shipping address details.
     */
    address: Address;
    /**
     * Object ID, the expected value is `shippingData`.
     */
    id: string;
    /**
     * Array of objects containing item's logistics information.
     */
    logisticsInfo: LogisticsInfo[];
    /**
     * Information about selected adresses.
     */
    selectedAddresses: SelectedAddress[];
    trackingHints: string;
}
