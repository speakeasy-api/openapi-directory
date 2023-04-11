import { SpeakeasyBase } from "../../../internal/utils";
import { Order } from "./order";
export declare class GetOrderResponseReasons extends SpeakeasyBase {
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
export declare class GetOrderResponse extends SpeakeasyBase {
    /**
     * Represents the order information that will be returned in the GET call.
     */
    order?: Order;
    /**
     * The Id of the process that handle the operation.
     *
     * @remarks
     *
     */
    processId?: string;
    reasons?: GetOrderResponseReasons[];
    /**
     * Indicates whether the call succeeded.
     *
     * @remarks
     *
     */
    success?: boolean;
}
