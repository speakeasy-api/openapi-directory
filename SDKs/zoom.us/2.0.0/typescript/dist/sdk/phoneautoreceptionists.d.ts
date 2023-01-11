import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PhoneAutoReceptionists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addAutoReceptionist - Add an auto receptionist
     *
     * Auto receptionists answer calls with a personalized recording and routes calls to a phone user, call queue, common area phone, voicemail or an IVR system. Use this API to add an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-) to a Zoom Phone.<br>
     *
     * **Prerequisites:**<br>
     * * Pro or higher account with Zoom Phone license.<br>
     * **Scopes:** `phone:write:admin` <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    addAutoReceptionist(req: operations.AddAutoReceptionistRequest, config?: AxiosRequestConfig): Promise<operations.AddAutoReceptionistResponse>;
    /**
     * assignPhoneNumbersAutoReceptionist - Assign phone numbers
     *
     * Assign available phone numbers to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-). The available numbers can be retrieved using the List Phone Numbers API with `type` query parameter set to "unassigned".
     *
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom Phone License
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    assignPhoneNumbersAutoReceptionist(req: operations.AssignPhoneNumbersAutoReceptionistRequest, config?: AxiosRequestConfig): Promise<operations.AssignPhoneNumbersAutoReceptionistResponse>;
    /**
     * unassignAPhoneNumAutoReceptionist - Unassign a phone number
     *
     * Unassign a specific phone number that was previously assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-).
     *
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom Phone License
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    unassignAPhoneNumAutoReceptionist(req: operations.UnassignAPhoneNumAutoReceptionistRequest, config?: AxiosRequestConfig): Promise<operations.UnassignAPhoneNumAutoReceptionistResponse>;
    /**
     * unassignAllPhoneNumsAutoReceptionist - Unassign all phone numbers
     *
     * Unassign all phone numbers that were previously assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-).
     *
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom Phone License
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
    **/
    unassignAllPhoneNumsAutoReceptionist(req: operations.UnassignAllPhoneNumsAutoReceptionistRequest, config?: AxiosRequestConfig): Promise<operations.UnassignAllPhoneNumsAutoReceptionistResponse>;
    /**
     * updateAutoReceptionist - Update auto receptionist details
     *
     * An auto receptionist answers calls with a personalized recording and routes calls to a phone user, call queue, common area phone, or voicemail. An auto receptionist can also be set up so that it routes calls to an interactive voice response (IVR) system to allow callers to select the routing options.<br>
     * Use this API to [change information](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-#h_1d5ffc56-6ba3-4ce5-9d86-4a1a1ee743f3) such as display name and extension number assigned to the main auto receptionist.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher account with Zoom Phone license.<br>
     * **Scopes:** `phone:write:admin` <br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    updateAutoReceptionist(req: operations.UpdateAutoReceptionistRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAutoReceptionistResponse>;
}
