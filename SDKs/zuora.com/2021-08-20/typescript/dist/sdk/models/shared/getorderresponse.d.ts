import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
export declare class GetOrderResponseReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    order?: Order;
    processId?: string;
    reasons?: GetOrderResponseReasons[];
    success?: boolean;
}
