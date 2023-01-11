import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * accountBilling - Get billing information
     *
     * Get [billing information](https://support.zoom.us/hc/en-us/articles/201363263-About-Billing) of a sub account.<br><br>Only master accounts can use this API. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' billing information. Email the partner programs team at **partner-success@zoom.us** for more details.<br>
     *
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled. <br>
     *
     * **Scope**:`billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
    **/
    accountBilling(req: operations.AccountBillingRequest, config?: AxiosRequestConfig): Promise<operations.AccountBillingResponse>;
    /**
     * accountBillingInvoices - List billing invoices
     *
     * List [invoices](https://support.zoom.us/hc/en-us/articles/207276556-Viewing-your-invoice-history#h_6710542f-23cc-4059-9cc7-ff02bec7314e) of a Zoom account.
     *
     * To list a regular Zoom account's invoices or a master account's invoices, provide `me` as the value of the `accountId` path parameter. To list a sub account's invoices, provide the account ID of the sub account in the `accountId` path parameter.
     *
     * **Prerequisites:**
     * * Account must be enrolled in Pro or a higher plan.<br>
     *
     * **Scope**:`billing:master`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Additional Rate Limit:** You can make **one** API request per account(`accountId`) every **five** minutes until the daily limit is reached. This API has a daily limit of **6** requests per account(`accountId`).
    **/
    accountBillingInvoices(req: operations.AccountBillingInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.AccountBillingInvoicesResponse>;
    /**
     * accountBillingUpdate - Update billing information
     *
     * Update [billing information](https://support.zoom.us/hc/en-us/articles/201363263-About-Billing) of a sub account.<br><br>
     * This API can only be used by master accounts that pay all billiing charges of their associated sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' billing information. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     *
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled. <br>
     *
     * **Scope**:`billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     *
     *
    **/
    accountBillingUpdate(req: operations.AccountBillingUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AccountBillingUpdateResponse>;
    /**
     * accountPlanAddonCancel - Cancel additional plans
     *
     * [Cancel additional plan](https://support.zoom.us/hc/en-us/articles/203634215-How-Do-I-Cancel-My-Subscription-) of a sub account. The cancellation does not provide refund for the current subscription. The service remains active for the current session.
     *
     * This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     *
     * **Prerequisites:**<br>
     * * Pro or a higher plan with master account option enabled.
     * * The sub account must be a paid account.<br>
     * **Scope:** `billing:master`<br>
     *
    **/
    accountPlanAddonCancel(req: operations.AccountPlanAddonCancelRequest, config?: AxiosRequestConfig): Promise<operations.AccountPlanAddonCancelResponse>;
    /**
     * accountPlanAddonCreate - Subscribe additional plan
     *
     * Subscribe a sub account to a Zoom addon plan. This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * <br>**Prerequisites:**<br>
     * * Pro or a higher plan with master account option enabled.
     * * The sub account must be a paid account. The billing charges for the sub account must be paid by its master account.<br><br>
     *
     * **Scopes**: `billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     *
     *
    **/
    accountPlanAddonCreate(req: operations.AccountPlanAddonCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccountPlanAddonCreateResponse>;
    /**
     * accountPlanAddonUpdate - Update an additional plan
     *
     * Update an additional plan for a sub account.
     *
     * This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * <br>**Prerequisites:**<br>
     * * Pro or a higher plan with master account enabled.
     * * The sub account must be a paid account. The billing charges for the sub account must be paid by the master account.<br><br>
     *
     * **Scopes**: `billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     *
     *
     *
    **/
    accountPlanAddonUpdate(req: operations.AccountPlanAddonUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AccountPlanAddonUpdateResponse>;
    /**
     * accountPlanBaseDelete - Cancel a base plan
     *
     * [Cancel a base plan](https://support.zoom.us/hc/en-us/articles/203634215-How-Do-I-Cancel-My-Subscription-) for a sub account.
     *
     * This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     *
     * **Scopes**: `billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * The sub account must have a Pro or a higher plan.
     *
    **/
    accountPlanBaseDelete(req: operations.AccountPlanBaseDeleteRequest, config?: AxiosRequestConfig): Promise<operations.AccountPlanBaseDeleteResponse>;
    /**
     * accountPlanBaseUpdate - Update a base plan
     *
     * Update a base plan of a sub account.
     *
     * This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * **Scopes:** `billing:master`<br><br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * The sub account must have a Pro or a higher plan.
     *
    **/
    accountPlanBaseUpdate(req: operations.AccountPlanBaseUpdateRequest, config?: AxiosRequestConfig): Promise<operations.AccountPlanBaseUpdateResponse>;
    /**
     * accountPlanCreate - Subscribe plans
     *
     * Subscribe a sub account to a Zoom plan using your master account. This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * **Scopes**: `billing:master`<br>
     *
    **/
    accountPlanCreate(req: operations.AccountPlanCreateRequest, config?: AxiosRequestConfig): Promise<operations.AccountPlanCreateResponse>;
    /**
     * accountPlans - Get plan Information
     *
     * Get plan information of a sub account that is managed by a master account. <br><br>This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' billing information. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * **Scopes:** `billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     *
    **/
    accountPlans(req: operations.AccountPlansRequest, config?: AxiosRequestConfig): Promise<operations.AccountPlansResponse>;
    /**
     * downloadInvoicePdf - Download an invoice file
     *
     * Download a [billed](https://support.zoom.us/hc/en-us/articles/201363263-About-Billing) invoice file of a Zoom account in PDF format. To download a regular account's invoice or a  master account's invoice, provide `me` as the value of `accountId` path parameter. To download a sub account's invoice, provide the account ID of the sub account in the `accountId` path parameter.
     *
     *
     * **Prerequisites:**
     * * Account must be enrolled in Pro or a higher plan.<br>
     *
     * **Scope**:`billing:master`<br>
     * **Rate Limit:** You can make **one** request to this API every **thirty** minutes until the daily limit is reached. This API has a daily limit of **100** requests per **account**.
    **/
    downloadInvoicePdf(req: operations.DownloadInvoicePdfRequest, config?: AxiosRequestConfig): Promise<operations.DownloadInvoicePdfResponse>;
    /**
     * getAccountBillingInvoice - Get invoice details
     *
     * Get detailed information about a specific [invoice](https://support.zoom.us/hc/en-us/articles/207276556-Viewing-your-invoice-history#h_6710542f-23cc-4059-9cc7-ff02bec7314e). <br>To retrieve a regular Zoom account's invoice details or a master account's invoice details, provide `me` as the value of `accountId` path parameter. To list a sub account's invoice details, provide the account ID of the sub account in the `accountId` path parameter.
     *
     * **Prerequisites:**
     * * Account must be enrolled in Pro or a higher plan. <br>
     *
     * **Scope**:`billing:master`<br>
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Additional Rate Limit:** You can make **one** API request every **thirty** minutes until the daily limit is reached. This API has a daily limit of **100** requests per **account**.
    **/
    getAccountBillingInvoice(req: operations.GetAccountBillingInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountBillingInvoiceResponse>;
    /**
     * getPlanUsage - Get plan usage
     *
     * Get information on usage of [plans](https://marketplace.zoom.us/docs/api-reference/other-references/plans) of an account. This API supports regular accounts as well as master and sub accounts. To get plan usage of a regular account, use the `account:read:admin` scope and provide “me” as the value of the  `accountId` path parameter.To get plan usage of a master account, provide the keyword "me" as the value of the `accountId` path parameter and use the `billing:master` scope. To get plan usage of a sub account, provide the actual account Id of the sub account as the value of the `accountId` path parameter and use the `billing:master` scope.
     *
     * **Prerequisite**:<br>
     * Account type: master account on a paid Pro, Business or Enterprise plan.<br>
     * **Scope:** `billing:master` for master and sub accounts. `account:read:admin` for regular Zoom accounts.<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
    **/
    getPlanUsage(req: operations.GetPlanUsageRequest, config?: AxiosRequestConfig): Promise<operations.GetPlanUsageResponse>;
}
