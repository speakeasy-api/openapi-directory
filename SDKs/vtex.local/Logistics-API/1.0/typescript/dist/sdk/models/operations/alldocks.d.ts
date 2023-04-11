import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AllDocksRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
}
export declare class AllDocks200ApplicationJSONPickupStoreInfo1 extends SpeakeasyBase {
    additionalInfo: string;
    address: string;
    dockId: string;
    friendlyName: string;
    isPickupStore: boolean;
    storeId: string;
}
export declare class AllDocks200ApplicationJSON extends SpeakeasyBase {
    dockTimeFake: string;
    freightTableIds: string[];
    id: string;
    name: string;
    pickupStoreInfo: AllDocks200ApplicationJSONPickupStoreInfo1;
    priority: number;
    salesChannel: string;
    salesChannels: string[];
    timeFakeOverhead: string;
    wmsEndPoint: string;
}
export declare class AllDocksResponse extends SpeakeasyBase {
    /**
     * OK
     */
    allDocks200ApplicationJSONObjects?: AllDocks200ApplicationJSON[];
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
