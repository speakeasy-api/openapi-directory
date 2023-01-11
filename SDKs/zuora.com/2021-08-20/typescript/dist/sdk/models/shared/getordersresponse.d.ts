import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
export declare class GetOrdersResponseReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetOrdersResponse extends SpeakeasyBase {
    nextPage?: string;
    orders?: Order[];
    processId?: string;
    reasons?: GetOrdersResponseReasons[];
    success?: boolean;
}
