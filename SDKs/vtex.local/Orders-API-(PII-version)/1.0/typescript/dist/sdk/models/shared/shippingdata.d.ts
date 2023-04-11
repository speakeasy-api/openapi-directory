import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { LogisticsInfo } from "./logisticsinfo";
import { SelectedAddress } from "./selectedaddress";
export declare class ShippingData extends SpeakeasyBase {
    address: Address;
    /**
     * Field ID.
     */
    id: string;
    /**
     * Array with logistics information of each item in the order.
     */
    logisticsInfo: LogisticsInfo[];
    /**
     * Array of the selected addresses' information.
     */
    selectedAddresses: SelectedAddress[];
    /**
     * Tracking hints.
     */
    trackingHints: string;
}
