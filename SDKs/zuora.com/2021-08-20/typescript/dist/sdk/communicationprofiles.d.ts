import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A communication profile enables you to send specific event-driven notifications to targeted customer accounts.
 *
 * @remarks
 * For more information, see [Communication profiles](https://knowledgecenter.zuora.com/Central_Platform/Notifications/C_Viewing_Profiles).
 *
 * You can manage communication profiles using the REST API:
 *
 *   - [Retrieve a communication profile](https://www.zuora.com/developer/api-reference/#operation/Object_GETCommunicationProfile)
 *   - [Retrieve all notifications under a communication profile (using the Settings API)](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Get_all_Notifications_under_a_particular_Communication_Profile)
 *   - [Retrieve all communication profiles (using the Settings API)](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Get_all_Communication_Profiles)
 *   - [Update a communication profile (using the Settings API)](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Modify_a_Communication_Profile)
 *   - [Create a communication profile (using the Settings API)](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Communication_Profile)
 *
 */
export declare class CommunicationProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CRUD: Retrieve a communication profile
     */
    objectGETCommunicationProfile(req: operations.ObjectGETCommunicationProfileRequest, config?: AxiosRequestConfig): Promise<operations.ObjectGETCommunicationProfileResponse>;
}
