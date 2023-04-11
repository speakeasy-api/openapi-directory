import { SpeakeasyBase } from "../../../internal/utils";
import { OrderForEvergreen } from "./orderforevergreen";
export declare class GetOrderResponseForEvergreenReasons extends SpeakeasyBase {
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
export declare class GetOrderResponseForEvergreen extends SpeakeasyBase {
    /**
     * Represents the order information that will be returned in the GET call.
     */
    order?: OrderForEvergreen;
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    reasons?: GetOrderResponseForEvergreenReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
