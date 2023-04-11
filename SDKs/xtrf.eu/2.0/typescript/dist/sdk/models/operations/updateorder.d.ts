import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateOrderRequest extends SpeakeasyBase {
    /**
     * Updated view's order settings.
     */
    orderDTO: shared.OrderDTO;
    /**
     * view's identifier
     */
    viewId: number;
}
export declare class UpdateOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    orderDTO?: shared.OrderDTO;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
