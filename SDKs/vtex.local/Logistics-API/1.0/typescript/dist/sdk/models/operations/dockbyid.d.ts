import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DockByIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    dockId: string;
}
export declare class DockById200ApplicationJSONPickupStoreInfo1 extends SpeakeasyBase {
    additionalInfo: string;
    address: string;
    dockId: string;
    friendlyName: string;
    isPickupStore: boolean;
    storeId: string;
}
/**
 * OK
 */
export declare class DockById200ApplicationJSON extends SpeakeasyBase {
    dockTimeFake: string;
    freightTableIds: string[];
    id: string;
    name: string;
    pickupStoreInfo: DockById200ApplicationJSONPickupStoreInfo1;
    priority: number;
    salesChannel: string;
    salesChannels: string[];
    timeFakeOverhead: string;
    wmsEndPoint: string;
}
export declare class DockByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    dockById200ApplicationJSONObject?: DockById200ApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
