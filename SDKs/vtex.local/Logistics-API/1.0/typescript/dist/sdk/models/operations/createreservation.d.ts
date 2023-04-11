import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension extends SpeakeasyBase {
    height: number;
    length: number;
    weight: number;
    width: number;
}
export declare class CreateReservationCreateReservationRequestDeliveryItemOptionItem extends SpeakeasyBase {
    additionalHandlingTime: string;
    dimension: CreateReservationCreateReservationRequestDeliveryItemOptionItemDimension;
    groupItemId: string;
    id: string;
    kitItem: string[];
    price: number;
    quantity: number;
}
export declare class CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore extends SpeakeasyBase {
    isCheckedIn: boolean;
    storeId: string;
}
export declare class CreateReservationCreateReservationRequestDeliveryItemOptionLocation extends SpeakeasyBase {
    country: string;
    inStore: CreateReservationCreateReservationRequestDeliveryItemOptionLocationInStore;
    zipCode: string;
}
export declare class CreateReservationCreateReservationRequestDeliveryItemOption extends SpeakeasyBase {
    aditionalTimeBlockedDays: string;
    deliveryWindows: string[];
    dockId: string;
    dockTime: string;
    item: CreateReservationCreateReservationRequestDeliveryItemOptionItem;
    listPrice: number;
    location: CreateReservationCreateReservationRequestDeliveryItemOptionLocation;
    promotionalPrice: number;
    slaType: string;
    slaTypeName: string;
    timeToDockPlusDockTime: string;
    totalTime: string;
    transitTime: string;
    wareHouseId: string;
}
export declare class CreateReservationCreateReservationRequest extends SpeakeasyBase {
    autorizationExpirationTTL: string;
    deliveryItemOptions: CreateReservationCreateReservationRequestDeliveryItemOption[];
    lockId: string;
    salesChannel: string;
}
export declare class CreateReservationRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand.
     */
    accept: string;
    /**
     * Type of the content being sent.
     */
    contentType: string;
    requestBody: CreateReservationCreateReservationRequest;
}
export declare class CreateReservation200ApplicationJSONSlaRequestItem1Dimension1 extends SpeakeasyBase {
    height: number;
    length: number;
    maxSumDimension: number;
    weight: number;
    width: number;
}
export declare class CreateReservation200ApplicationJSONSlaRequestItem1 extends SpeakeasyBase {
    additionalHandlingTime: string;
    dimension: CreateReservation200ApplicationJSONSlaRequestItem1Dimension1;
    groupItemId: string;
    id: string;
    kitItem: string[];
    modal: string;
    price: number;
    quantity: number;
    unlimitedQuantity: boolean;
}
export declare class CreateReservation200ApplicationJSONSlaRequestLocation1InStore1 extends SpeakeasyBase {
    isCheckedIn: boolean;
    storeId: string;
}
export declare class CreateReservation200ApplicationJSONSlaRequestLocation1 extends SpeakeasyBase {
    country: string;
    deliveryPointId: string;
    inStore: CreateReservation200ApplicationJSONSlaRequestLocation1InStore1;
    point: string;
    zipCode: string;
}
export declare class CreateReservation200ApplicationJSONSlaRequest extends SpeakeasyBase {
    deliveryWindows: string;
    dockId: string;
    dockTime: string;
    freightTableId: string;
    freightTableName: string;
    item: CreateReservation200ApplicationJSONSlaRequestItem1;
    listPrice: number;
    location: CreateReservation200ApplicationJSONSlaRequestLocation1;
    pickupStoreInfo: string;
    promotionalPrice: number;
    slaType: string;
    slaTypeName: string;
    timeToDockPlusDockTime: string;
    totalTime: string;
    transitTime: string;
    wareHouseId: string;
    wmsEndPoint: string;
}
/**
 * OK
 */
export declare class CreateReservation200ApplicationJSON extends SpeakeasyBase {
    authorizedDateUtc: string;
    canceledDateUtc: string;
    confirmedDateUtc: string;
    errors: string[];
    isSucess: boolean;
    lastUpdateDateUtc: string;
    lockId: string;
    maximumConfirmationDateUtc: string;
    pickupPointItemOptions: string;
    reservationDateUtc: string;
    salesChannel: string;
    slaRequest: CreateReservation200ApplicationJSONSlaRequest[];
    status: number;
}
export declare class CreateReservationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createReservation200ApplicationJSONObject?: CreateReservation200ApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
