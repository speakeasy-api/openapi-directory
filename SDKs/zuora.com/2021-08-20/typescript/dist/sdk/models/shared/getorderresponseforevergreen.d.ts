import { SpeakeasyBase } from "../../../internal/utils";
import { OrderForEvergreen } from "./orderforevergreen";
export declare class GetOrderResponseForEvergreenReasons extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class GetOrderResponseForEvergreen extends SpeakeasyBase {
    order?: OrderForEvergreen;
    processId?: string;
    reasons?: GetOrderResponseForEvergreenReasons[];
    success?: boolean;
}
