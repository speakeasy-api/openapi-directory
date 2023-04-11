import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Reservations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Acknowledgment reservation
     *
     * @remarks
     * Acknowledges reservations made by reservation ID.
     */
    acknowledgmentReservation(req: operations.AcknowledgmentReservationRequest, config?: AxiosRequestConfig): Promise<operations.AcknowledgmentReservationResponse>;
    /**
     * Cancel reservation
     *
     * @remarks
     * Cancels reservation by reservation ID.
     */
    cancelReservation(req: operations.CancelReservationRequest, config?: AxiosRequestConfig): Promise<operations.CancelReservationResponse>;
    /**
     * Confirm reservation
     *
     * @remarks
     * Confirms reservation by reservation ID.
     */
    confirmReservation(req: operations.ConfirmReservationRequest, config?: AxiosRequestConfig): Promise<operations.ConfirmReservationResponse>;
    /**
     * Create reservation
     *
     * @remarks
     * Creates [reservation](https://help.vtex.com/en/tutorial/how-does-reservation-work--tutorials_92).
     */
    createReservation(req: operations.CreateReservationRequest, config?: AxiosRequestConfig): Promise<operations.CreateReservationResponse>;
    /**
     * List reservation by ID
     *
     * @remarks
     * Lists reservation's information by ID.
     */
    reservationById(req: operations.ReservationByIdRequest, config?: AxiosRequestConfig): Promise<operations.ReservationByIdResponse>;
    /**
     * List reservation by warehouse and SKU
     *
     * @remarks
     * Lists reservations in your store, by searching through warehouse and SKU.
     */
    reservationbyWarehouseandSku(req: operations.ReservationbyWarehouseandSkuRequest, config?: AxiosRequestConfig): Promise<operations.ReservationbyWarehouseandSkuResponse>;
}
