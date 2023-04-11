import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Holidays {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List all holidays
     *
     * @remarks
     * Lists information of all holidays.
     */
    allHolidays(req: operations.AllHolidaysRequest, config?: AxiosRequestConfig): Promise<operations.AllHolidaysResponse>;
    /**
     * Create/update holiday
     *
     * @remarks
     * Creates or updates holidays through holiday ID.
     */
    createUpdateHoliday(req: operations.CreateUpdateHolidayRequest, config?: AxiosRequestConfig): Promise<operations.CreateUpdateHolidayResponse>;
    /**
     * Delete holiday
     *
     * @remarks
     * Deletes given holidays set up in your store.
     */
    holiday(req: operations.HolidayRequest, config?: AxiosRequestConfig): Promise<operations.HolidayResponse>;
    /**
     * List holiday by ID
     *
     * @remarks
     * Lists holiday's information by holiday ID.
     */
    holidayById(req: operations.HolidayByIdRequest, config?: AxiosRequestConfig): Promise<operations.HolidayByIdResponse>;
}
