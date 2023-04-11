import { SpeakeasyBase } from "../../../internal/utils";
export declare class HookFilter extends SpeakeasyBase {
    /**
     * Sets a limit to how many times a specific order shows on the hook, after it first meets filtering conditions. Using the `FromOrders` type configuration with JSONata filtering expressions might cause orders to appear more than once on a feed, whenever changes are made to that order. If this field is `false` orders will appear in the hook only once. Send this field if you want to filter `FromOrders`.
     */
    disableSingleFire?: boolean;
    /**
     * JSONata query expression that defines what conditions must be met for an order to be included in the hook. This should only be used in case `type` is `FromOrders`.
     */
    expression?: string;
    /**
     * List of order statuses that should be included in the hook. This should only be used in case `type` is `FromWorkflow`.
     */
    status?: string[];
    /**
     * Determines what orders appear in the hook and how they are filtered. As shown in the examples above, there are two ways:
     *
     * @remarks
     *
     *  - `FromWorkflow`: the hook will receive order updates only when there is a change or update in the [order status](https://help.vtex.com/en/tutorial/order-flow-and-status--tutorials_196). You must send at least one value for the `status` field to determine by which status the orders will be filtered.
     *
     *  - `FromOrders`: the hook will receive order updates when there is a change in the order. In this case, orders can be filtered by any property, according to JSONata expressions passed in the `expression` field. You must send the request with values for the `expression` and `disableSingleFire` fields.
     */
    type: string;
}
