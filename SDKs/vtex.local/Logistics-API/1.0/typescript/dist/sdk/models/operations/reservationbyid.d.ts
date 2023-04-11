import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReservationByIdRequest extends SpeakeasyBase {
    /**
     * HTTP Client Negotiation Accept Header. Indicates the types of responses the client can understand
     */
    accept: string;
    /**
     * Type of the content being sent
     */
    contentType: string;
    reservationId: string;
}
export declare class ReservationById200ApplicationJSONSlaRequestItem1Dimension1 extends SpeakeasyBase {
    height: number;
    length: number;
    maxSumDimension: number;
    weight: number;
    width: number;
}
export declare class ReservationById200ApplicationJSONSlaRequestItem1 extends SpeakeasyBase {
    additionalHandlingTime: string;
    dimension: ReservationById200ApplicationJSONSlaRequestItem1Dimension1;
    groupItemId: string;
    id: string;
    kitItem: string[];
    modal: string;
    price: number;
    quantity: number;
    unlimitedQuantity: boolean;
}
export declare class ReservationById200ApplicationJSONSlaRequestLocation1InStore1 extends SpeakeasyBase {
    isCheckedIn: boolean;
    storeId: string;
}
export declare class ReservationById200ApplicationJSONSlaRequestLocation1 extends SpeakeasyBase {
    country: string;
    deliveryPointId: string;
    inStore: ReservationById200ApplicationJSONSlaRequestLocation1InStore1;
    point: string;
    zipCode: string;
}
export declare class ReservationById200ApplicationJSONSlaRequest extends SpeakeasyBase {
    deliveryWindows?: string;
    dockId?: string;
    dockTime?: string;
    freightTableId?: string;
    freightTableName?: string;
    item?: ReservationById200ApplicationJSONSlaRequestItem1;
    listPrice?: number;
    location?: ReservationById200ApplicationJSONSlaRequestLocation1;
    pickupStoreInfo?: string;
    promotionalPrice?: number;
    slaType?: string;
    slaTypeName?: string;
    timeToDockPlusDockTime?: string;
    totalTime?: string;
    transitTime?: string;
    wareHouseId?: string;
    wmsEndPoint?: string;
}
/**
 * OK
 */
export declare class ReservationById200ApplicationJSON extends SpeakeasyBase {
    /**
     * Authorized date in UTC.
     */
    authorizedDateUtc?: string;
    /**
     * Canceled date in UTC.
     */
    canceledDateUtc?: string;
    /**
     * Confirmed date in UTC.
     */
    confirmedDateUtc?: string;
    /**
     * Information on errors, if there are any.
     */
    errors?: string[];
    isSucess?: boolean;
    /**
     * Date of the last update in UTC.
     */
    lastUpdateDateUtc?: string;
    /**
     * Lock ID.
     */
    lockId?: string;
    /**
     * Maximum confirmation date in UTC.
     */
    maximumConfirmationDateUtc?: string;
    /**
     * Pickup point item options.
     */
    pickupPointItemOptions?: string;
    /**
     * Reservation date in UTC.
     */
    reservationDateUtc?: string;
    /**
     * Sales channel.
     */
    salesChannel?: string;
    /**
     * Information on SLA request.
     */
    slaRequest?: ReservationById200ApplicationJSONSlaRequest[];
    /**
     * Reservation status, being:
     *
     * @remarks
     *
  `0`: `NotCommitted`
     *
  `1`: `Authorized`
     *
  `2`: `Confirmed`
     *
  `3`: `Canceled_AbortedCommitted`
     *
  `4`: `Canceled_AuthorizationExpired`
     *
  `5`: `Canceled_Manually`
     */
    status?: number;
}
export declare class ReservationByIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * OK
     */
    reservationById200ApplicationJSONObject?: ReservationById200ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
