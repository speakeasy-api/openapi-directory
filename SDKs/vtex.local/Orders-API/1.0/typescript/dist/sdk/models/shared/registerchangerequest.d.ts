import { SpeakeasyBase } from "../../../internal/utils";
export declare class RegisterChangeRequestItemsAdded extends SpeakeasyBase {
    /**
     * Product ID of the item.
     */
    id: string;
    /**
     * Price of the item in cents.
     */
    price: number;
    /**
     * Amount of items to be added.
     */
    quantity: number;
}
export declare class RegisterChangeRequestItemsRemoved extends SpeakeasyBase {
    /**
     * Product ID of the item.
     */
    id: string;
    /**
     * Price of the item in cents.
     */
    price: number;
    /**
     * Amount of items to be removed.
     */
    quantity: number;
}
export declare class RegisterChangeRequest extends SpeakeasyBase {
    /**
     * This field can be used to apply a discount to the total value of the order. Value in cents.
     */
    discountValue: number;
    /**
     * This field can be used to increment the total value of the order. Value in cents.
     */
    incrementValue: number;
    /**
     * List of items that should be added to the order.
     */
    itemsAdded?: RegisterChangeRequestItemsAdded[];
    /**
     * List of items that should be removed from the order.
     */
    itemsRemoved?: RegisterChangeRequestItemsRemoved[];
    /**
     * Reason for order change. This may be shown to the shopper in the UI or transactional emails.
     */
    reason: string;
    /**
     * Request identification of the change. Only the first change made with each `requestId` will be effective on a given order. Use different IDs for different changes to the same order.
     */
    requestId: string;
}
