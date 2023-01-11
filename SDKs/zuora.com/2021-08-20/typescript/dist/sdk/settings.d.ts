import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getListAllSettings - List all settings
     *
     * Get a list of all available settings in your tenant.
     *
     * The response message is by default in JSON format. If you want to receive all the availabe settings in csv format, include `Accept` in the header parameters and set it to `application/csv`.
     *
     * See a [200 response sample in JSON format](https://assets.zuora.com/zuora-documentation/ListAllSettingsResponseSample.json).
     *
     * See a [200 response sample in CSV format](https://assets.zuora.com/zuora-documentation/ListAllSettingsResponseSample.csv).
     *
     * You can find a specific operate of an available setting item in your tenant from the 200 response body of this call. See the following tutorials of Settings API for how to operate on a specifc setting item.
     *
     *  * Billing Rules:
     *    * [Get a specific setting - Billing Rules](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/AA_Get_a_specific_setting_-_Billing_Rules)
     *    * [Update a specific setting - Billing Rules](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/AB_Update_a_specific_setting_-_Billing_Rules)
     *  * Age Buckets:
     *    * [Get Age Buckets](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_Age_Buckets)
     *    * [Update Age Buckets](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Update_Age_Buckets)
     *  * Invoice Templates:
     *    * [Get a specific Invoice Template](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_a_specific_Invoice_Template)
     *    * [Get all Invoice Templates](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Invoice_Templates)
     *    * [Create a new Invoice Template](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Invoice_Template)
     *  * Communications Profiles:
     *    * [Get all Communication Profiles](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Communication_Profiles)
     *    * [Create a new Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Communication_Profile)
     *    * [Modify a Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Modify_a_Communication_Profile)
     *    * [Get all Notifications under a particular Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Notifications_under_a_particular_Communication_Profile)
     *  * Chart of Accounts:
     *    * [Get Chart of Accounts](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_Chart_of_Accounts)
     *    * [Add a new Chart of Account](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Add_a_new_Chart_of_Account)
     *  * Quote Templates:
     *    * [Get all Quote Templates](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Get_all_Quote_Templates)
     *    * [Get a specific Quote Template](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Get_a_specific_Quote_Template)
     *    * [Create a new Quote Template](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Quote_Template)
     *  * Custom Fields:
     *    * [View all custom fields](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/View_all_custom_fields)
     *    * [View custom fields of a specific object](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/View_custom_fields_of_a_specific_object)
     *    * [Update custom fields of a specific object](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Update_custom_fields_of_a_specific_object)
     *
    **/
    getListAllSettings(req: operations.GetListAllSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetListAllSettingsResponse>;
    /**
     * postProcessSettingsBatchRequest - Submit settings requests
     *
     * Submit a batch of settings requests by this single API operation.
     *
     * By default, one batch settings request can contain a maximum of 100 single operation requests, including:
     * * All the single requests in the process batch settings request.
     * * All the children requests of the single requests.
     *
     * This maximum value is configurable.
     *
    **/
    postProcessSettingsBatchRequest(req: operations.PostProcessSettingsBatchRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostProcessSettingsBatchRequestResponse>;
}
