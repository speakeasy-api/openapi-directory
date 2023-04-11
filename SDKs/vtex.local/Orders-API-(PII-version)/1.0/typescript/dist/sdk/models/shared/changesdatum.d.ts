import { SpeakeasyBase } from "../../../internal/utils";
import { ItemsRemoved } from "./itemsremoved";
import { Receipt } from "./receipt";
export declare class ChangesDatum extends SpeakeasyBase {
    /**
     * Discount value in cents.
     */
    discountValue: number;
    /**
     * Order value increment in cents.
     */
    incrementValue: number;
    /**
     * Array with information on items added to the order.
     */
    itemsAdded: string[];
    /**
     * Array with information on items removed from the order.
     */
    itemsRemoved: ItemsRemoved[];
    /**
     * Change reason.
     */
    reason: string;
    receipt: Receipt;
}
