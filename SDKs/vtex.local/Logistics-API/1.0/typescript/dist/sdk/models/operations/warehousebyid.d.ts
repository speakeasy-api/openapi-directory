import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WarehouseByIdRequest extends SpeakeasyBase {
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
export declare class WarehouseById200ApplicationJSONWarehouseDock1 extends SpeakeasyBase {
    cost: number;
    dockId: string;
    time: string;
}
/**
 * OK
 */
export declare class WarehouseById200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    /**
     * Shows if the warehouse is active (`true`) or inactive (`false`).
     */
    isActive?: boolean;
    name?: string;
    /**
     * This field returns a list of the [pickup points' IDs](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) associated with the given warehouse.
     */
    pickupPointIds?: any[];
    /**
     * If the warehouse was configured as a priority. When no priority was set, the value returns`0`.
     */
    priority?: number;
    warehouseDocks?: WarehouseById200ApplicationJSONWarehouseDock1[];
}
export declare class WarehouseByIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    warehouseById200ApplicationJSONObject?: WarehouseById200ApplicationJSON;
}
