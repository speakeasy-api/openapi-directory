import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Sets user's password to a new value.
     *
     * @remarks
     * Sets user's password to a new value.
     */
    changePassword(req: operations.ChangePasswordRequest, config?: AxiosRequestConfig): Promise<operations.ChangePasswordResponse>;
    /**
     * Returns list of simple users representations
     *
     * @remarks
     * Returns list of simple users representations
     */
    getAllNamesWithIds1(config?: AxiosRequestConfig): Promise<operations.GetAllNamesWithIds1Response>;
    /**
     * Returns user details.
     *
     * @remarks
     * Returns user details.
     */
    getById6(req: operations.GetById6Request, config?: AxiosRequestConfig): Promise<operations.GetById6Response>;
    /**
     * Returns custom field of a given user.
     *
     * @remarks
     * Returns custom field of a given user.
     */
    getCustomField1(req: operations.GetCustomField1Request, config?: AxiosRequestConfig): Promise<operations.GetCustomField1Response>;
    /**
     * Returns custom fields of a given user.
     *
     * @remarks
     * Returns custom fields of a given user.
     */
    getCustomFields4(req: operations.GetCustomFields4Request, config?: AxiosRequestConfig): Promise<operations.GetCustomFields4Response>;
    /**
     * Returns currently signed in user details.
     *
     * @remarks
     * Returns currently signed in user details.
     */
    getMe(config?: AxiosRequestConfig): Promise<operations.GetMeResponse>;
    /**
     * Returns time zone preferred by user currently signed in.
     *
     * @remarks
     * Returns time zone preferred by user currently signed in.
     */
    getTimeZone(config?: AxiosRequestConfig): Promise<operations.GetTimeZoneResponse>;
    /**
     * Updates given custom field of a given user.
     *
     * @remarks
     * Updates given custom field of a given user.
     */
    updateCustomField1(req: operations.UpdateCustomField1Request, config?: AxiosRequestConfig): Promise<operations.UpdateCustomField1Response>;
    /**
     * Updates custom fields of a given user.
     *
     * @remarks
     * Updates custom fields of a given user.
     */
    updateCustomFields2(req: operations.UpdateCustomFields2Request, config?: AxiosRequestConfig): Promise<operations.UpdateCustomFields2Response>;
    /**
     * Updates an existing user.
     *
     * @remarks
     * Updates an existing user.
     */
    update3(req: operations.Update3Request, config?: AxiosRequestConfig): Promise<operations.Update3Response>;
}
