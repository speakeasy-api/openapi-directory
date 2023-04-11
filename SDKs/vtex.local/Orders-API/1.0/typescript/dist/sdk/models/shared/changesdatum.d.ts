import { SpeakeasyBase } from "../../../internal/utils";
import { ItemsRemoved } from "./itemsremoved";
import { Receipt } from "./receipt";
export declare class ChangesDatum extends SpeakeasyBase {
    /**
     * Order change discount value.
     */
    discountValue: number;
    /**
     * Order change increment value.
     */
    incrementValue: number;
    /**
     * List of items added to the order.
     */
    itemsAdded: string[];
    /**
     * List of items removed from the order.
     */
    itemsRemoved: ItemsRemoved[];
    /**
     * Text explaining why there was a change in the order. This information may be shown to the customer in the UI or transactional emails.
     */
    reason: string;
    /**
     * Information about the receipt for changed orders.
     */
    receipt: Receipt;
}
