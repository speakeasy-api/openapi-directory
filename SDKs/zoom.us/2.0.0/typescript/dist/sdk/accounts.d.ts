import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Account operations
 */
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get sub account details
     *
     * @remarks
     * Get details of a sub account that is listed under a master account. Your account must be a master account in order to retrieve sub accounts' details. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and create sub accounts. Email the partner programs team at **partner-success@zoom.us** for more details.
     *
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled. <br>
     *
     * **Scope**: `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     *
     *
     */
    account(req: operations.AccountRequest, config?: AxiosRequestConfig): Promise<operations.AccountResponse>;
    /**
     * Create a sub account
     *
     * @remarks
     * Create a sub account under a master account. Your account must be a master account in order to create sub accounts.
     * <br><br>Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts. Email the partner programs team at partner-success@zoom.us. for more details. Please note that the created account user will receive a confirmation email.<br><br>
     * <br>
     * **Prerequisites:**<br>
     * * Pro or a higher paid account with master account option enabled. <br>
     *
     * **Scope**: `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     *
     */
    accountCreate(req: operations.AccountCreateApplicationJSON, config?: AxiosRequestConfig): Promise<operations.AccountCreateResponse>;
    /**
     * Disassociate a sub account
     *
     * @remarks
     * Disassociate a sub account from its master account. This will leave the sub account intact but it will no longer be associated with the master account.<br>
     *
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled. <br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis).<br><br>
     *
     *
     * **Scope**: `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     *
     */
    accountDisassociate(req: operations.AccountDisassociateRequest, config?: AxiosRequestConfig): Promise<operations.AccountDisassociateResponse>;
    /**
     * Get managed domains
     *
     * @remarks
     * Get a sub account's [managed domains](https://support.zoom.us/hc/en-us/articles/203395207-What-is-Managed-Domain-).<br><br>
     *
     * **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled. <br><br>
     * To get managed domains of the master account, provide `me` as the value for accountId in the path parameter. Provide the sub account's Account ID as the value of accountId path parameter to get managed domains of the sub account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher paid account with master account option enabled. <br>
     *
     * **Scope:** `account:read:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     *
     *
     */
    accountManagedDomain(req: operations.AccountManagedDomainRequest, security: operations.AccountManagedDomainSecurity, config?: AxiosRequestConfig): Promise<operations.AccountManagedDomainResponse>;
    /**
     * Update options
     *
     * @remarks
     * Update a sub account's options under the master account.<br> <aside>Your account must be a master account in order to update the options for sub accounts. Zoom only assigns this privilege to trusted partners. </aside>
     *
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled.
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis).<br><br>
     *
     * **Scope**: `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     *
     */
    accountOptionsUpdate(req: operations.AccountOptionsUpdateRequest, security: operations.AccountOptionsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.AccountOptionsUpdateResponse>;
    /**
     * Get settings
     *
     * @remarks
     * Get the settings of an account.<br>
     * To get the settings of a master account, use `me` as the value for the `accountId` path parameter.<br><br>
     *  **Prerequisites**:
     *  * The account must be a paid account.<br>
     * **Scopes**: `account:read:admin`
     * <br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    accountSettings(req: operations.AccountSettingsRequest, config?: AxiosRequestConfig): Promise<operations.AccountSettingsResponse>;
    /**
     * Update settings
     *
     * @remarks
     * Update the settings of a sub account that is under a master account.<br> To update the settings of the master account, use `me` as the value of the `accountId` path parameter.<br><br>
     * **Prerequisites**:
     *  * The sub account must be a paid account.<br>
     * **Scopes**: `account:write:admin`
     * <br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     */
    accountSettingsUpdate(req: operations.AccountSettingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AccountSettingsUpdateResponse>;
    /**
     * Get trusted domains
     *
     * @remarks
     * Get trusted domains of a sub account. To get the trusted domains of a master account, use `me` as the value for the `accountId` path parameter.
     *
     * **Prerequisites:**<br>
     * * The sub account must be a paid account.<br>
     * **Scope:** `account:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     */
    accountTrustedDomain(req: operations.AccountTrustedDomainRequest, config?: AxiosRequestConfig): Promise<operations.AccountTrustedDomainResponse>;
    /**
     * List sub accounts
     *
     * @remarks
     * List all the sub accounts that have been created by a master account.<br><br>Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts. Email the partner programs team at **partner-success@zoom.us** for more details.
     *
     * <br>**Prerequisites:**<br>
     * * Pro or a higher paid account with master account option enabled. <br>
     *
     * **Scope**: `account:read:admin`
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     */
    accounts(req: operations.AccountsRequest, config?: AxiosRequestConfig): Promise<operations.AccountsResponse>;
    /**
     * Delete virtual background files
     *
     * @remarks
     * Delete existing virtual background file(s) from an account.
     *
     * **Prerequisites:**<br>
     * * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
     * <br> **Scope:** `account:write:admin`<br> <br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     */
    delVB(req: operations.DelVBRequest, config?: AxiosRequestConfig): Promise<operations.DelVBResponse>;
    /**
     * Get locked settings
     *
     * @remarks
     * [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) allow you turn settings on or off for all users in your account. No user except the account admin or account owner can change these settings. With lock settings, you force the settings on for all users.
     * Use this API to retrieve an account's locked settings.
     *
     * **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled. <br><br>
     * **Prerequisites:**
     * * Pro or a higher paid account. <br>
     *
     * **Scope**: `account:read:admin`.
     * <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     *
     *
     *
     * **Scope:** account:read:admin
     */
    getAccountLockSettings(req: operations.GetAccountLockSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountLockSettingsResponse>;
    /**
     * Update locked settings
     *
     * @remarks
     * [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) allow you turn settings on or off for all users in your account. No user except the account admin or account owner can change these settings. With lock settings, you force the settings on for all users. Use this API to update an account's locked settings.
     *
     * **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher paid account. <br>
     *
     * **Scope:** `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     *
     */
    updateAccountLockSettings(req: operations.UpdateAccountLockSettingsRequest, security: operations.UpdateAccountLockSettingsSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAccountLockSettingsResponse>;
    /**
     * Update the account owner
     *
     * @remarks
     * The current account owner can [change the owner of an account](https://support.zoom.us/hc/en-us/articles/115005686983-Change-Account-Owner) to another user on the same account.<br> Use this API to change the owner of a sub account.
     *
     * **Prerequisites**: <br>
     * * Account owner or admin permissions of an account.
     * * The account making this API request must be on a pro or a hiigher plan with [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) privilege.<br><br>
     *
     * **Scopes:**  `account:write:admin` or `account:master`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     *
     *
     * <br>
     */
    updateAccountOwner(req: operations.UpdateAccountOwnerRequest, security: operations.UpdateAccountOwnerSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateAccountOwnerResponse>;
    /**
     * Upload virtual background files
     *
     * @remarks
     * Use this API to [upload virtual background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_01EJF3YFEWGT8YA0ZJ079JEDQE) for all users on the account to use.
     *
     *
     * **Prerequisites:**<br>
     * * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
     * <br> **Scope:** `account:write:admin`<br><br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     */
    uploadVB(req: operations.UploadVBRequest, config?: AxiosRequestConfig): Promise<operations.UploadVBResponse>;
}
