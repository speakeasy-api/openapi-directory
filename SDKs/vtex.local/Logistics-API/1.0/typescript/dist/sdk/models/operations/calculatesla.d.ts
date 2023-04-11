import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CalculateSLACalculateSLARequestItem3Dimension extends SpeakeasyBase {
    height: number;
    length: number;
    weight: number;
    width: number;
}
export declare class CalculateSLACalculateSLARequestItem3KitItemDimension extends SpeakeasyBase {
    height: number;
    length: number;
    weight: number;
    width: number;
}
export declare class CalculateSLACalculateSLARequestItem3KitItem extends SpeakeasyBase {
    additionalHandlingTime: string;
    dimension: CalculateSLACalculateSLARequestItem3KitItemDimension;
    groupItemId: string;
    id: string;
    kitItem: string[];
    price: number;
    quantity: number;
}
export declare class CalculateSLACalculateSLARequestItem3 extends SpeakeasyBase {
    additionalHandlingTime: string;
    dimension: CalculateSLACalculateSLARequestItem3Dimension;
    groupItemId: string;
    id: string;
    kitItem: CalculateSLACalculateSLARequestItem3KitItem[];
    price: number;
    quantity: number;
}
export declare class CalculateSLACalculateSLARequestLocation3 extends SpeakeasyBase {
    country: string;
    point: number[];
    zipCode: string;
}
export declare class CalculateSLACalculateSLARequest extends SpeakeasyBase {
    items: CalculateSLACalculateSLARequestItem3[];
    location: CalculateSLACalculateSLARequestLocation3;
    salesChannel: string;
}
export declare class CalculateSLARequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: CalculateSLACalculateSLARequest[];
}
export declare class CalculateSla200ApplicationJSONDeliveryWindow extends SpeakeasyBase {
    endDateUtc?: string;
    listPrice?: number;
    startDateUtc?: string;
}
export declare class CalculateSla200ApplicationJSONLocation1InStore1 extends SpeakeasyBase {
    isCheckedIn: boolean;
    storeId: string;
}
export declare class CalculateSla200ApplicationJSONLocation1 extends SpeakeasyBase {
    country: string;
    deliveryPointId: string;
    inStore: CalculateSla200ApplicationJSONLocation1InStore1;
    point: string;
    zipCode: string;
}
export declare class CalculateSla200ApplicationJSON extends SpeakeasyBase {
    aditionalTimeBlockedDays: string;
    availabilityQuantity: number;
    carrierSchedule: string[];
    coordinates: string;
    deliveryOnWeekends: boolean;
    deliveryWindows: CalculateSla200ApplicationJSONDeliveryWindow[];
    dockId: string;
    dockTime: string;
    freightTableId: string;
    freightTableName: string;
    itemId: string;
    listPrice: number;
    location: CalculateSla200ApplicationJSONLocation1;
    pickupStoreInfo: string;
    quantity: number;
    restrictedFreight: string;
    salesChannel: string;
    slaType: string;
    slaTypeName: string;
    timeToDockPlusDockTime: string;
    totalTime: string;
    transitTime: string;
    wareHouseId: string;
}
export declare class CalculateSLAResponse extends SpeakeasyBase {
    calculateSLA200ApplicationJSONArrays?: CalculateSla200ApplicationJSON[][];
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
