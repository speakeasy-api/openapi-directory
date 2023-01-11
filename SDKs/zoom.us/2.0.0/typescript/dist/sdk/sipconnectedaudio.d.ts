import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SipConnectedAudio {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addCalloutCountries - Add internal call-out countries
     *
     * Specify the list of [call-out](https://support.zoom.us/hc/en-us/articles/200942859-How-To-Use-Telephone-Call-Out-) countries for a master account or a sub account. To add call-out enabled countries to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To add call-out enabled countries to a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    addCalloutCountries(req: operations.AddCalloutCountriesRequest, config?: AxiosRequestConfig): Promise<operations.AddCalloutCountriesResponse>;
    /**
     * addInternalNumbers - Add internal numbers
     *
     * This API allows a master account with SIP Connected Audio plan to assign internal phone numbers (i.e., numbers that are not provided by Zoom but are owned by the organization consuming the API) to a master account or a sub account.<br><br>To add internal numbers to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To add internal numbers to a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
     *
     *
    **/
    addInternalNumbers(req: operations.AddInternalNumbersRequest, config?: AxiosRequestConfig): Promise<operations.AddInternalNumbersResponse>;
    /**
     * assignSipConfig - Assign SIP trunk configuration
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br> Using this API, a master account owner can copy the SIP Connected Audio configurations applied on the master account and enable those configurations on a sub account. The owner can also disable the configuration in the sub account where it was previously enabled.
     * **Prerequisites:**<br>
     * * Pro or a higher account with SIP Connected Audio plan enabled.
     * * master account Owner<br>
     * **Scopes:** `sip_trunk:master`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    assignSipConfig(req: operations.AssignSipConfigRequest, config?: AxiosRequestConfig): Promise<operations.AssignSipConfigResponse>;
    /**
     * assignSipTrunks - Assign SIP trunks
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers’ IP telephony network, will be connected over this trunk rather than over the PSTN.<br><br>Use this API to assign SIP trunk(s) that are available on a master account to a sub account. <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a master account with [API Partner Plan](https://zoom.us/plan/api) and SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    assignSipTrunks(req: operations.AssignSipTrunksRequest, config?: AxiosRequestConfig): Promise<operations.AssignSipTrunksResponse>;
    /**
     * assignSipTrunkNumbers - Assign numbers
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br>Use this API to assign internal numbers to a sub account.
     *
     * **Prerequisites:**<br>
     * * Pro or a higher account with SIP Connected Audio plan enabled.
     * * The account must be a master account<br>
     * **Scopes:** `sip_trunk:master`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
    **/
    assignSipTrunkNumbers(req: operations.AssignSipTrunkNumbersRequest, config?: AxiosRequestConfig): Promise<operations.AssignSipTrunkNumbersResponse>;
    /**
     * deleteAllSipNumbers - Delete all numbers
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br>Use this API to delete all internal numbers assigned to a sub account.
     * **Prerequisites:**<br>
     *
     * * Pro or a higher account with SIP Connected Audio plan enabled.
     * * The account must be a master account<br>
     * **Scopes:** `sip_trunk:master`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    deleteAllSipNumbers(req: operations.DeleteAllSipNumbersRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAllSipNumbersResponse>;
    /**
     * deleteInternalCallOutCountry - Delete internal call-out country
     *
     * Delete a previously assigned [call-out](https://support.zoom.us/hc/en-us/articles/200942859-How-To-Use-Telephone-Call-Out-) country from a master account or a sub account. To remove call-out country from a sub account, provide the account ID of the sub account in the `accountId` path parameter. To remove call-out country from a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    deleteInternalCallOutCountry(req: operations.DeleteInternalCallOutCountryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInternalCallOutCountryResponse>;
    /**
     * deleteInternalNumber - Delete an internal number
     *
     * This API allows a master account with SIP Connected Audio plan to delete a previously assigned internal phone number from a master account or a sub account.<br><br>To delete an internal number from a sub account, provide the account ID of the sub account in the `accountId` path parameter. To delete an internal number from a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
     *
     *
     *
    **/
    deleteInternalNumber(req: operations.DeleteInternalNumberRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInternalNumberResponse>;
    /**
     * deleteSipTrunk - Delete a SIP trunk
     *
     * Use this API to remove existing SIP trunk of a sub account.<br>
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a master account with [API Partner Plan](https://zoom.us/plan/api) and SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    deleteSipTrunk(req: operations.DeleteSipTrunkRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSipTrunkResponse>;
    /**
     * listInternalCalloutCountries - List internal call-out countries
     *
     * Retrieve the list of internal [call-out](https://support.zoom.us/hc/en-us/articles/200942859-How-To-Use-Telephone-Call-Out-) countries of a master account or a sub account. To list call-out enabled countries of a sub account, provide the account ID of the sub account in the `accountId` path parameter. To list call-out enabled countries of a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    listInternalCalloutCountries(req: operations.ListInternalCalloutCountriesRequest, config?: AxiosRequestConfig): Promise<operations.ListInternalCalloutCountriesResponse>;
    /**
     * listInternalNumbers - List internal numbers
     *
     * This API allows a master account with SIP Connected Audio plan to list internal phone numbers (i.e., numbers that are not provided by Zoom but are owned by the organization consuming the API) assigned to a master account or a sub account.<br><br>To list internal numbers of a sub account, provide the account ID of the sub account in the `accountId` path parameter. To list internal numbers of a  master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
     *
     *
     *
    **/
    listInternalNumbers(req: operations.ListInternalNumbersRequest, config?: AxiosRequestConfig): Promise<operations.ListInternalNumbersResponse>;
    /**
     * listSipTrunks - List SIP trunks
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers’ IP telephony network, will be connected over this trunk rather than over the PSTN.<br><br>
     * Use this API to list all the SIP trunks assigned to a master account or a sub account of the master account. To retrieve SIP trunks assigned to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To retrieve SIP trunks of a master account, provide `me` as the value of the `accountId` path parameter. <br><br> **Scope:** `sip_trunk:read:admin`
     * <br><b>Prerequisites:</b><br>
     * * The account must either be a master account or a sub account with [API Partner Plan](https://zoom.us/plan/api) and SIP Connected Audio Plan.
    **/
    listSipTrunks(req: operations.ListSipTrunksRequest, config?: AxiosRequestConfig): Promise<operations.ListSipTrunksResponse>;
    /**
     * listSipTrunkNumbers - List SIP trunk numbers
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br>Use this API to list all the numbers that are configured for SIP Connected Audio in a Zoom Account.
     *
     * **Prerequisites:**<br>
     * * Pro or a higher account with SIP Connected Audio plan enabled.
     * * The account must be a master account<br>
     * **Scopes:** `sip_trunk:master`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    listSipTrunkNumbers(req: operations.ListSipTrunkNumbersRequest, config?: AxiosRequestConfig): Promise<operations.ListSipTrunkNumbersResponse>;
}
