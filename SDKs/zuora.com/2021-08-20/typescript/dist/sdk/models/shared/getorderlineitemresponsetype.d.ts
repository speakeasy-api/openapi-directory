import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItem } from "./orderlineitem";
export declare class GetOrderLineItemResponseTypeReasons extends SpeakeasyBase {
    /**
     * The error code of response.
     *
     * @remarks
     *
     */
    code?: string;
    /**
     * The detail information of the error response
     *
     * @remarks
     *
     */
    message?: string;
}
export declare class GetOrderLineItemResponseType extends SpeakeasyBase {
    orderLineItem?: OrderLineItem;
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    reasons?: GetOrderLineItemResponseTypeReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
