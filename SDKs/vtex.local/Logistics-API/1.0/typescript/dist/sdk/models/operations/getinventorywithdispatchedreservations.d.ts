import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetinventorywithdispatchedreservationsRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    itemId: string;
    warehouseId: string;
}
export declare class Getinventorywithdispatchedreservations200ApplicationJSON extends SpeakeasyBase {
    /**
     * Available quantity.
     */
    availableQuantity?: number;
    /**
     * Dispatched reservations quantity.
     */
    dispatchedReservationsQuantity?: number;
    /**
     * Indicates whether the SKU's availability is unlimited ("infinite inventory").
     */
    isUnlimitedQuantity?: boolean;
    /**
     * SKU quantity.
     */
    quantity?: number;
    /**
     * SKU ID.
     */
    skuId?: string;
    /**
     * Total reserved quantity of the SKU.
     */
    totalReservedQuantity?: number;
    /**
     * Warehouse ID.
     */
    warehouseId?: string;
}
export declare class GetinventorywithdispatchedreservationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getinventorywithdispatchedreservations200ApplicationJSONObjects?: Getinventorywithdispatchedreservations200ApplicationJSON[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
