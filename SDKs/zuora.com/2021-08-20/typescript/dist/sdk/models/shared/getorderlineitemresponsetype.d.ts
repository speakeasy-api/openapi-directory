import { SpeakeasyBase } from "../../../internal/utils";
import { OrderLineItem } from "./orderlineitem";
export declare class GetOrderLineItemResponseTypeReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetOrderLineItemResponseType extends SpeakeasyBase {
    orderLineItem?: OrderLineItem;
    processId?: string;
    reasons?: GetOrderLineItemResponseTypeReasons[];
    success?: boolean;
}
