import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveWarehouseRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    warehouseId: string;
}
export declare class RemoveWarehouseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
