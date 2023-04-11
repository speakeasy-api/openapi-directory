import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllWarehousesRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
}
/**
 * Information related to the docks available for the given warehouse.
 */
export declare class AllWarehouses200ApplicationJSONWarehouseDock1 extends SpeakeasyBase {
    /**
     * Extra charges added to the shipping rate when **Additional shipping costs** are configured.
     */
    cost: number;
    /**
     * Code that identifies a dock.
     */
    dockId: string;
    /**
     * This field returns the dock's processing time in days and hours. If none is configured, the request returns `00:00:00`.
     */
    time: string;
}
export declare class AllWarehouses200ApplicationJSON extends SpeakeasyBase {
    /**
     * Code that identifies a warehouse.
     */
    id: string;
    /**
     * Shows if the warehouse is active (`true`) or inactive (`false`).
     */
    isActive: boolean;
    /**
     * Name of the warehouse.
     */
    name: string;
    /**
     * This field returns a list of the [pickup points' IDs](https://help.vtex.com/en/tutorial/pickup-points--2fljn6wLjn8M4lJHA6HP3R) associated with the given warehouse.
     */
    pickupPointIds: any[];
    /**
     * If the warehouse was configured as a priority. When no priority was set, the value returns`0`.
     */
    priority: number;
    /**
     * Information related to the docks available for the warehouses.
     */
    warehouseDocks: AllWarehouses200ApplicationJSONWarehouseDock1[];
}
export declare class AllWarehousesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    allWarehouses200ApplicationJSONObjects?: AllWarehouses200ApplicationJSON[];
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
