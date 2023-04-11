import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * To change the description use /examples/TagsDescriptions.json
 */
export declare class Browser {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Searches for data (ie. customer, task, etc) and returns it in a CSV form.
     *
     * @remarks
     * Searches for data (ie. customer, task, etc) and returns it in a CSV form.
     */
    browseCSV(req: operations.BrowseCSVRequest, config?: AxiosRequestConfig): Promise<operations.BrowseCSVResponse>;
    /**
     * Searches for data (ie. customer, task, etc) and returns it in a tabular form.
     *
     * @remarks
     * Searches for data (ie. customer, task, etc) and returns it in a tabular form.
     */
    browseJSON(req: operations.BrowseJSONRequest, config?: AxiosRequestConfig): Promise<operations.BrowseJSONResponse>;
    /**
     * Creates view for given class.
     *
     * @remarks
     * Creates view for given class.
     */
    create(req: operations.CreateRequest, config?: AxiosRequestConfig): Promise<operations.CreateResponse>;
    /**
     * Removes a view.
     *
     * @remarks
     * Removes a view. No content is returned upon success (204).
     */
    delete(req: operations.DeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResponse>;
    /**
     * Deletes a single column from view.
     *
     * @remarks
     * Deletes a single column from view.
     */
    deleteColumn(req: operations.DeleteColumnRequest, config?: AxiosRequestConfig): Promise<operations.DeleteColumnResponse>;
    /**
     * Returns all view's information.
     *
     * @remarks
     * Returns all view's information (ie. name, columns, filters, etc).
     */
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * Returns column's specific settings.
     *
     * @remarks
     * Returns column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.
     */
    getColumnSettings(req: operations.GetColumnSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetColumnSettingsResponse>;
    /**
     * Returns columns defined in view.
     *
     * @remarks
     * Returns columns defined in view.
     */
    getColumns(req: operations.GetColumnsRequest, config?: AxiosRequestConfig): Promise<operations.GetColumnsResponse>;
    /**
     * Returns current view's detailed information, suitable for browser.
     *
     * @remarks
     * Returns current view's detailed information, suitable for browser.
     */
    getCurrentViewDetails(req: operations.GetCurrentViewDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetCurrentViewDetailsResponse>;
    /**
     * Returns view's filter.
     *
     * @remarks
     * Returns view's filter.
     */
    getFilter(req: operations.GetFilterRequest, config?: AxiosRequestConfig): Promise<operations.GetFilterResponse>;
    /**
     * Returns view's local settings (for current user).
     *
     * @remarks
     * Returns view's local settings (for current user).
     */
    getLocalSettings(req: operations.GetLocalSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetLocalSettingsResponse>;
    /**
     * Returns view's order settings.
     *
     * @remarks
     * Returns view's order settings.
     */
    getOrder(req: operations.GetOrderRequest, config?: AxiosRequestConfig): Promise<operations.GetOrderResponse>;
    /**
     * Returns view's permissions.
     *
     * @remarks
     * Returns view's permissions.
     */
    getPermissions(req: operations.GetPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPermissionsResponse>;
    /**
     * Returns view's settings.
     *
     * @remarks
     * Returns view's settings (ie. name).
     */
    getSettings(req: operations.GetSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSettingsResponse>;
    /**
     * Returns view's detailed information, suitable for browser.
     *
     * @remarks
     * Returns view's detailed information, suitable for browser.
     */
    getViewDetails(req: operations.GetViewDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetViewDetailsResponse>;
    /**
     * Returns views' brief.
     *
     * @remarks
     * Returns views' brief.
     */
    getViewsBrief(req: operations.GetViewsBriefRequest, config?: AxiosRequestConfig): Promise<operations.GetViewsBriefResponse>;
    /**
     * Selects given view as current and returns its detailed information, suitable for browser.
     *
     * @remarks
     * Selects given view as current and returns its detailed information, suitable for browser.
     */
    selectViewAndGetItsDetails(req: operations.SelectViewAndGetItsDetailsRequest, config?: AxiosRequestConfig): Promise<operations.SelectViewAndGetItsDetailsResponse>;
    /**
     * Updates all view's information.
     *
     * @remarks
     * Updates all view's information (ie. name, columns, filters, etc).
     */
    update(req: operations.UpdateRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResponse>;
    /**
     * Updates column's specific settings.
     *
     * @remarks
     * Updates column's specific settings. For example when column describes money amount we can decide whether it should display currency or not.
     */
    updateColumnSettings(req: operations.UpdateColumnSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateColumnSettingsResponse>;
    /**
     * Updates columns in view.
     *
     * @remarks
     * Updates columns in view.
     */
    updateColumns(req: operations.UpdateColumnsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateColumnsResponse>;
    /**
     * Updates view's filter.
     *
     * @remarks
     * Updates view's filter.
     */
    updateFilter(req: operations.UpdateFilterRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFilterResponse>;
    /**
     * Updates view's filter property.
     *
     * @remarks
     * Updates view's filter property.
     */
    updateFilterProperty(req: operations.UpdateFilterPropertyRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFilterPropertyResponse>;
    /**
     * Updates view's local settings (for current user).
     *
     * @remarks
     * Updates view's local settings (for current user).
     */
    updateLocalSettings(req: operations.UpdateLocalSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocalSettingsResponse>;
    /**
     * Updates view's order settings.
     *
     * @remarks
     * Updates view's order settings.
     */
    updateOrder(req: operations.UpdateOrderRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrderResponse>;
    /**
     * Updates view's permissions.
     *
     * @remarks
     * Updates view's permissions.
     */
    updatePermissions(req: operations.UpdatePermissionsRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePermissionsResponse>;
    /**
     * Updates view's settings.
     *
     * @remarks
     * Updates view's settings.
     */
    updateSettings(req: operations.UpdateSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSettingsResponse>;
}
