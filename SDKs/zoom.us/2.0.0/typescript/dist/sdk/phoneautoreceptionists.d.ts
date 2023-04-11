import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PhoneAutoReceptionists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add an auto receptionist
     *
     * @remarks
     * Auto receptionists answer calls with a personalized recording and routes calls to a phone user, call queue, common area phone, voicemail or an IVR system. Use this API to add an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-) to a Zoom Phone.<br>
     *
     * **Prerequisites:**<br>
     * * Pro or higher account with Zoom Phone license.<br>
     * **Scopes:** `phone:write:admin` <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     */
    addAutoReceptionist(req: operations.AddAutoReceptionistApplicationJSON, config?: AxiosRequestConfig): Promise<operations.AddAutoReceptionistResponse>;
    /**
     * Assign phone numbers
     *
     * @remarks
     * Assign available phone numbers to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-). The available numbers can be retrieved using the List Phone Numbers API with `type` query parameter set to "unassigned".
     *
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom Phone License
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    assignPhoneNumbersAutoReceptionist(req: operations.AssignPhoneNumbersAutoReceptionistRequest, security: operations.AssignPhoneNumbersAutoReceptionistSecurity, config?: AxiosRequestConfig): Promise<operations.AssignPhoneNumbersAutoReceptionistResponse>;
    /**
     * Unassign a phone number
     *
     * @remarks
     * Unassign a specific phone number that was previously assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-).
     *
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom Phone License
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    unassignAPhoneNumAutoReceptionist(req: operations.UnassignAPhoneNumAutoReceptionistRequest, security: operations.UnassignAPhoneNumAutoReceptionistSecurity, config?: AxiosRequestConfig): Promise<operations.UnassignAPhoneNumAutoReceptionistResponse>;
    /**
     * Unassign all phone numbers
     *
     * @remarks
     * Unassign all phone numbers that were previously assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-).
     *
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom Phone License
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     */
    unassignAllPhoneNumsAutoReceptionist(req: operations.UnassignAllPhoneNumsAutoReceptionistRequest, security: operations.UnassignAllPhoneNumsAutoReceptionistSecurity, config?: AxiosRequestConfig): Promise<operations.UnassignAllPhoneNumsAutoReceptionistResponse>;
    /**
     * Update auto receptionist details
     *
     * @remarks
     * An auto receptionist answers calls with a personalized recording and routes calls to a phone user, call queue, common area phone, or voicemail. An auto receptionist can also be set up so that it routes calls to an interactive voice response (IVR) system to allow callers to select the routing options.<br>
     * Use this API to [change information](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-#h_1d5ffc56-6ba3-4ce5-9d86-4a1a1ee743f3) such as display name and extension number assigned to the main auto receptionist.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher account with Zoom Phone license.<br>
     * **Scopes:** `phone:write:admin` <br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    updateAutoReceptionist(req: operations.UpdateAutoReceptionistRequest, security: operations.UpdateAutoReceptionistSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAutoReceptionistResponse>;
}
