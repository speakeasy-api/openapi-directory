import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProviderAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteProviderAccount - Delete Provider Account
     *
     * The delete provider account service is used to delete a provider account from the Yodlee system. This service also deletes the accounts that are created in the Yodlee system for that provider account. <br>This service does not return a response. The HTTP response code is 204 (Success with no content).<br>
    **/
    deleteProviderAccount(req: operations.DeleteProviderAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProviderAccountResponse>;
    /**
     * editCredentialsOrRefreshProviderAccount - Update Account
     *
     * The update account API is used to:<br> <ul><li>Retrieve the latest information for accounts that belong to one providerAccount from the provider site. You must allow at least 15 min between requests.<li>Retrieve the latest information of all the eligible accounts that belong to the user.<li>Data to be retrieved from the provider site can be overridden using datasetName or dataset. If you do pass datasetName, all the datasets that are implicitly configured for the dataset will be retrieved. This action is allowed for single provider account refresh flows only.<li>Check the status of the providerAccount before invoking this API. Do not call this API to trigger any action on a providerAccount when an action is already in progress for the providerAccount.<li>If the customer has subscribed to the REFRESH event notification and invoked this API, relevant notifications will be sent to the customer.<li>A dataset may depend on another dataset for retrieval, so the response will include the requested and dependent datasets.<li>Check all the dataset additional statuses returned in the response because the provider account status is drawn from the dataset additional statuses.<li>Updating preferences using this API will trigger refreshes.<li> The content type has to be passed as application/json for the body parameter.</ul><br>-----------------------------------------------------------------------------------------------------------------------------------------<br><br><b>Update All Eligible Accounts - Notes:</b><br><ul><li>This API will trigger a refresh for all the eligible provider accounts(both OB and credential-based accounts).<li>This API will not refresh closed, inactive, or UAR accounts, or accounts with refreshes in-progress or recently refreshed non-OB accounts.<li>No parameters should be passed to this API to trigger this action.<li>Do not call this API often. Our recommendation is to call this only at the time the user logs in to your app because it can hamper other API calls performance.<li>The response only contains information for accounts that were refreshed. If no accounts are eligible for refresh, no response is returned.</ul>
    **/
    editCredentialsOrRefreshProviderAccount(req: operations.EditCredentialsOrRefreshProviderAccountRequest, config?: AxiosRequestConfig): Promise<operations.EditCredentialsOrRefreshProviderAccountResponse>;
    /**
     * getAllProviderAccounts - Get Provider Accounts
     *
     * The get provider accounts service is used to return all the provider accounts added by the user. <br>This includes the failed and successfully added provider accounts.<br>
    **/
    getAllProviderAccounts(req: operations.GetAllProviderAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllProviderAccountsResponse>;
    /**
     * getProviderAccount - Get Provider Account Details
     *
     * The get provider account details service is used to learn the status of adding accounts and updating accounts.<br>This service has to be called continuously to know the progress level of the triggered process. This service also provides the MFA information requested by the provider site.<br>When <i>include = credentials</i>, questions is passed as input, the service returns the credentials (non-password values) and questions stored in the Yodlee system for that provider account. <br><br><b>Note:</b> <li>The password and answer fields are not returned in the response.</li>
    **/
    getProviderAccount(req: operations.GetProviderAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetProviderAccountResponse>;
    /**
     * getProviderAccountProfiles - Get User Profile Details
     *
     * The get provider accounts profile service is used to return the user profile details that are associated to the provider account. <br>
    **/
    getProviderAccountProfiles(req: operations.GetProviderAccountProfilesRequest, config?: AxiosRequestConfig): Promise<operations.GetProviderAccountProfilesResponse>;
    /**
     * updatePreferences - Update Preferences
     *
     * This endpoint is used to update preferences like data extracts and auto refreshes without triggering refresh for the providerAccount.<br>Setting isDataExtractsEnabled to false will not trigger data extracts notification and dataExtracts/events will not reflect any data change that is happening for the providerAccount.<br>Modified data will not be provided in the dataExtracts/userData endpoint.<br>Setting isAutoRefreshEnabled to false will not trigger auto refreshes for the provider account.<br>
    **/
    updatePreferences(req: operations.UpdatePreferencesRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePreferencesResponse>;
}
