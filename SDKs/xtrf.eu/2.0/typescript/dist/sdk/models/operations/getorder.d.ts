import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetOrderRequest extends SpeakeasyBase {
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    orderDTO?: shared.OrderDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
