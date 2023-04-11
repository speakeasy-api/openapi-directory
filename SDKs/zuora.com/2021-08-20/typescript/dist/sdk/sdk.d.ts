import { AccountingCodes } from "./accountingcodes";
import { AccountingPeriods } from "./accountingperiods";
import { Accounts } from "./accounts";
import { Actions } from "./actions";
import { Amendments } from "./amendments";
import { Attachments } from "./attachments";
import { BillingDocuments } from "./billingdocuments";
import { BillingPreviewRun } from "./billingpreviewrun";
import { BillRun } from "./billrun";
import { Catalog } from "./catalog";
import { ChargeMetrics } from "./chargemetrics";
import { ChargeRevenueSummaries } from "./chargerevenuesummaries";
import { CommunicationProfiles } from "./communicationprofiles";
import { Connections } from "./connections";
import { Contacts } from "./contacts";
import { CreditBalanceAdjustments } from "./creditbalanceadjustments";
import { CreditMemos } from "./creditmemos";
import { CustomExchangeRates } from "./customexchangerates";
import { CustomObjectDefinitions } from "./customobjectdefinitions";
import { CustomObjectJobs } from "./customobjectjobs";
import { CustomObjectRecords } from "./customobjectrecords";
import { DataQueries } from "./dataqueries";
import { DebitMemos } from "./debitmemos";
import { Describe } from "./describe";
import { DocumentProperties } from "./documentproperties";
import { Entities } from "./entities";
import { EntityConnections } from "./entityconnections";
import { EventTriggers } from "./eventtriggers";
import { Exports } from "./exports";
import { Features } from "./features";
import { Files } from "./files";
import { HMACSignatures } from "./hmacsignatures";
import { HostedPages } from "./hostedpages";
import { Imports } from "./imports";
import { InvoiceAdjustments } from "./invoiceadjustments";
import { InvoiceItemAdjustments } from "./invoiceitemadjustments";
import { InvoiceItems } from "./invoiceitems";
import { InvoicePayments } from "./invoicepayments";
import { Invoices } from "./invoices";
import { InvoiceSplitItems } from "./invoicesplititems";
import { InvoiceSplits } from "./invoicesplits";
import { JournalRuns } from "./journalruns";
import { MassUpdater } from "./massupdater";
import { Notifications } from "./notifications";
import { OAuth } from "./oauth";
import { Operations } from "./operations";
import { OrderLineItems } from "./orderlineitems";
import { Orders } from "./orders";
import { PaymentGatewayReconciliation } from "./paymentgatewayreconciliation";
import { PaymentGateways } from "./paymentgateways";
import { PaymentMethods } from "./paymentmethods";
import { PaymentMethodSnapshots } from "./paymentmethodsnapshots";
import { PaymentMethodTransactionLogs } from "./paymentmethodtransactionlogs";
import { PaymentRuns } from "./paymentruns";
import { Payments } from "./payments";
import { PaymentTransactionLogs } from "./paymenttransactionlogs";
import { ProductFeatures } from "./productfeatures";
import { ProductRatePlanCharges } from "./productrateplancharges";
import { ProductRatePlanChargeTiers } from "./productrateplanchargetiers";
import { ProductRatePlans } from "./productrateplans";
import { Products } from "./products";
import { QuotesDocument } from "./quotesdocument";
import { Ramps } from "./ramps";
import { RatePlanCharges } from "./rateplancharges";
import { RatePlanChargeTiers } from "./rateplanchargetiers";
import { RatePlans } from "./rateplans";
import { RefundInvoicePayments } from "./refundinvoicepayments";
import { Refunds } from "./refunds";
import { RefundTransactionLogs } from "./refundtransactionlogs";
import { RevenueEvents } from "./revenueevents";
import { RevenueItems } from "./revenueitems";
import { RevenueRules } from "./revenuerules";
import { RevenueSchedules } from "./revenueschedules";
import { RSASignatures } from "./rsasignatures";
import { SequenceSets } from "./sequencesets";
import { Settings } from "./settings";
import { SubscriptionProductFeatures } from "./subscriptionproductfeatures";
import { Subscriptions } from "./subscriptions";
import { SummaryJournalEntries } from "./summaryjournalentries";
import { TaxationItems } from "./taxationitems";
import { Transactions } from "./transactions";
import { UnitOfMeasure } from "./unitofmeasure";
import { Usage } from "./usage";
import { Users } from "./users";
import { Workflows } from "./workflows";
import { ZuoraRevenueIntegration } from "./zuorarevenueintegration";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://rest.zuora.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 *
 * @remarks
 *
 * # Introduction
 *
 * Welcome to the reference for the Zuora Billing REST API!
 *
 * To learn about the common use cases of Zuora Billing REST APIs, check out the [API Guides](https://www.zuora.com/developer/api-guides/).
 *
 * In addition to Zuora API Reference; Billing, we also provide API references for other Zuora products:
 *
 *   * [API Reference: Collect](https://www.zuora.com/developer/collect-api/)
 *   * [API Reference: Revenue](https://www.zuora.com/developer/revpro-api/)
 *
 * The Zuora REST API provides a broad set of operations and resources that:
 *
 *   * Enable Web Storefront integration from your website.
 *   * Support self-service subscriber sign-ups and account management.
 *   * Process revenue schedules through custom revenue rule models.
 *   * Enable manipulation of most objects in the Zuora Billing Object Model.
 *
 * Want to share your opinion on how our API works for you? <a href="https://community.zuora.com/t5/Developers/API-Feedback-Form/gpm-p/21399" target="_blank">Tell us how you feel </a>about using our API and what we can do to make it better.
 *
 * ## Access to the API
 *
 * If you have a Zuora tenant, you can access the Zuora REST API via one of the following endpoints:
 *
 * | Tenant              | Base URL for REST Endpoints |
 * |-------------------------|-------------------------|
 * |US Production | https://rest.zuora.com   |
 * |US API Sandbox    | https://rest.apisandbox.zuora.com|
 * |US Performance Test | https://rest.pt1.zuora.com |
 * |US Production Copy | Submit a request at <a href="http://support.zuora.com/" target="_blank">Zuora Global Support</a> to enable the Zuora REST API in your tenant and obtain the base URL for REST endpoints. See [REST endpoint base URL of Production Copy (Service) Environment for existing and new customers](https://community.zuora.com/t5/API/REST-endpoint-base-URL-of-Production-Copy-Service-Environment/td-p/29611) for more information. |
 * |US Cloud Production | 	https://rest.na.zuora.com |
 * |US Cloud API Sandbox | 	https://rest.sandbox.na.zuora.com |
 * |US Central Sandbox | 	https://rest.test.zuora.com |
 * |EU Production | https://rest.eu.zuora.com |
 * |EU API Sandbox | https://rest.sandbox.eu.zuora.com |
 * |EU Central Sandbox | 	https://rest.test.eu.zuora.com |
 *
 * The Production endpoint provides access to your live user data. Sandbox tenants are a good place to test code without affecting real-world data. If you would like Zuora to provision a Sandbox tenant for you, contact your Zuora representative for assistance.
 *
 *
 * If you do not have a Zuora tenant, go to <a href="https://www.zuora.com/resource/zuora-test-drive" target="_blank">https://www.zuora.com/resource/zuora-test-drive</a> and sign up for a Production Test Drive tenant. The tenant comes with seed data, including a sample product catalog.
 *
 * # API Changelog
 * You can find the <a href="https://community.zuora.com/t5/Developers/API-Changelog/gpm-p/18092" target="_blank">Changelog</a> of the API Reference: Billing in the Zuora Community.
 *
 * # Authentication
 *
 * ## OAuth v2.0
 *
 * Zuora recommends that you use OAuth v2.0 to authenticate to the Zuora REST API. Currently, OAuth is not available in every environment. See [Zuora Testing Environments](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/D_Zuora_Environments) for more information.
 *
 * Zuora recommends you to create a dedicated API user with API write access on a tenant when authenticating via OAuth, and then create an OAuth client for this user. See <a href="https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/Manage_Users/Create_an_API_User" target="_blank">Create an API User</a> for how to do this. By creating a dedicated API user, you can control permissions of the API user without affecting other non-API users.
 *
 * If a user is deactivated, all of the user's OAuth clients will be automatically deactivated.
 *
 * Authenticating via OAuth requires the following steps:
 * 1. Create a Client
 * 2. Generate a Token
 * 3. Make Authenticated Requests
 *
 * ### Create a Client
 *
 * You must first [create an OAuth client](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/Manage_Users#Create_an_OAuth_Client_for_a_User) in the Zuora UI. To do this, you must be an administrator of your Zuora tenant. This is a one-time operation. You will be provided with a Client ID and a Client Secret. Please note this information down, as it will be required for the next step.
 *
 * **Note:** The OAuth client will be owned by a Zuora user account. If you want to perform PUT, POST, or DELETE operations using the OAuth client, the owner of the OAuth client must have a Platform role that includes the "API Write Access" permission.
 *
 * ### Generate a Token
 *
 * After creating a client, you must make a call to obtain a bearer token using the [Generate an OAuth token](https://www.zuora.com/developer/api-reference/#operation/createToken) operation. This operation requires the following parameters:
 * - `client_id` - the Client ID displayed when you created the OAuth client in the previous step
 * - `client_secret` - the Client Secret displayed when you created the OAuth client in the previous step
 * - `grant_type` - must be set to `client_credentials`
 *
 * **Note**: The Client ID and Client Secret mentioned above were displayed when you created the OAuth Client in the prior step. The [Generate an OAuth token](https://www.zuora.com/developer/api-reference/#operation/createToken) response specifies how long the bearer token is valid for. You should reuse the bearer token until it is expired. When the token is expired, call [Generate an OAuth token](https://www.zuora.com/developer/api-reference/#operation/createToken) again to generate a new one.
 *
 * ### Make Authenticated Requests
 *
 * To authenticate subsequent API requests, you must provide a valid bearer token in an HTTP header:
 *
 * `Authorization: Bearer {bearer_token}`
 *
 * If you have [Zuora Multi-entity](https://www.zuora.com/developer/api-reference/#tag/Entities) enabled, you need to set an additional header to specify the ID of the entity that you want to access. You can use the `scope` field in the [Generate an OAuth token](https://www.zuora.com/developer/api-reference/#operation/createToken) response to determine whether you need to specify an entity ID.
 *
 * If the `scope` field contains more than one entity ID, you must specify the ID of the entity that you want to access. For example, if the `scope` field contains `entity.1a2b7a37-3e7d-4cb3-b0e2-883de9e766cc` and `entity.c92ed977-510c-4c48-9b51-8d5e848671e9`, specify one of the following headers:
 * - `Zuora-Entity-Ids: 1a2b7a37-3e7d-4cb3-b0e2-883de9e766cc`
 * - `Zuora-Entity-Ids: c92ed977-510c-4c48-9b51-8d5e848671e9`
 *
 * **Note**: For a limited period of time, Zuora will accept the `entityId` header as an alternative to the `Zuora-Entity-Ids` header. If you choose to set the `entityId` header, you must remove all "-" characters from the entity ID in the `scope` field.
 *
 * If the `scope` field contains a single entity ID, you do not need to specify an entity ID.
 *
 * ## Other Supported Authentication Schemes
 *
 * Zuora continues to support the following additional legacy means of authentication:
 *
 *   * Use username and password. Include authentication with each request in the header:
 *
 *     * `apiAccessKeyId`
 *     * `apiSecretAccessKey`
 *
 *     Zuora recommends that you create an API user specifically for making API calls. See <a href="https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/Manage_Users/Create_an_API_User" target="_blank">Create an API User</a> for more information.
 *
 *   * Use an authorization cookie. The cookie authorizes the user to make calls to the REST API for the duration specified in  **Administration > Security Policies > Session timeout**. The cookie expiration time is reset with this duration after every call to the REST API. To obtain a cookie, call the [Connections](https://www.zuora.com/developer/api-reference/#tag/Connections) resource with the following API user information:
 *
 *     *   ID
 *     *   Password
 *
 *   * For CORS-enabled APIs only: Include a 'single-use' token in the request header, which re-authenticates the user with each request. See below for more details.
 *
 * ### Entity Id and Entity Name
 *
 * The `entityId` and `entityName` parameters are only used for [Zuora Multi-entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity "Zuora Multi-entity"). These are the legacy parameters that Zuora will only continue to support for a period of time. Zuora recommends you to use the `Zuora-Entity-Ids` parameter instead.
 *
 *
 * The  `entityId` and `entityName` parameters specify the Id and the [name of the entity](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/B_Introduction_to_Entity_and_Entity_Hierarchy#Name_and_Display_Name "Introduction to Entity and Entity Hierarchy") that you want to access, respectively. Note that you must have permission to access the entity.
 *
 * You can specify either the `entityId` or `entityName` parameter in the authentication to access and view an entity.
 *
 *   * If both `entityId` and `entityName` are specified in the authentication, an error occurs.
 *   * If neither `entityId` nor `entityName` is specified in the authentication, you will log in to the entity in which your user account is created.
 *
 *
 * To get the entity Id and entity name, you can use the GET Entities REST call. For more information, see [API User Authentication](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Multi-entity/A_Overview_of_Multi-entity#API_User_Authentication "API User Authentication").
 *
 *   ### Token Authentication for CORS-Enabled APIs
 *
 *   The CORS mechanism enables REST API calls to Zuora to be made directly from your customer's browser, with all credit card and security information transmitted directly to Zuora. This minimizes your PCI compliance burden, allows you to implement advanced validation on your payment forms, and  makes your payment forms look just like any other part of your website.
 *
 * For security reasons, instead of using cookies, an API request via CORS uses **tokens** for authentication.
 *
 * The token method of authentication is only designed for use with requests that must originate from your customer's browser; **it should  not be considered a replacement to the existing cookie authentication** mechanism.
 *
 * See [Zuora CORS REST](https://knowledgecenter.zuora.com/DC_Developers/C_REST_API/Zuora_CORS_REST "Zuora CORS REST") for details on how CORS works and how you can begin to implement customer calls to the Zuora REST APIs. See  [HMAC Signatures](https://www.zuora.com/developer/api-reference/#operation/POSTHMACSignature "HMAC Signatures") for details on the HMAC method that returns the authentication token.
 *
 * # Requests and Responses
 *
 * ## Request IDs
 * As a general rule, when asked to supply a "key" for an account or subscription (accountKey, account-key, subscriptionKey, subscription-key), you can provide either the actual ID or  the number of the entity.
 *
 * ## HTTP Request Body
 *
 * Most of the parameters and data accompanying your requests will be contained in the body of the HTTP request.
 *
 * The Zuora REST API accepts JSON in the HTTP request body. No other data format (e.g., XML) is supported.
 *
 * ### Data Type
 *
 * ([Actions](https://www.zuora.com/developer/api-reference/#tag/Actions) and CRUD operations only) We recommend that you do not specify the decimal values with quotation marks, commas, and spaces. Use characters of `+-0-9.eE`, for example, `5`, `1.9`, `-8.469`, and `7.7e2`. Also, Zuora does not convert currencies for decimal values.
 *
 * ## Testing a Request
 *
 * Use a third party client, such as [curl](https://curl.haxx.se "curl"), [Postman](https://www.getpostman.com "Postman"), or [Advanced REST Client](https://advancedrestclient.com "Advanced REST Client"), to test the Zuora REST API.
 *
 * You can test the Zuora REST API from the Zuora API Sandbox or Production tenants. If connecting to Production, bear in mind that you are working with your live production data, not sample data or test data.
 *
 * ## Testing with Credit Cards
 *
 * Sooner or later it will probably be necessary to test some transactions that involve credit cards. For suggestions on how to handle this, see [Going Live With Your Payment Gateway](https://knowledgecenter.zuora.com/CB_Billing/M_Payment_Gateways/C_Managing_Payment_Gateways/B_Going_Live_Payment_Gateways#Testing_with_Credit_Cards "C_Zuora_User_Guides/A_Billing_and_Payments/M_Payment_Gateways/C_Managing_Payment_Gateways/B_Going_Live_Payment_Gateways#Testing_with_Credit_Cards"
 * ).
 *
 * ## Concurrent Request Limits
 *
 * Zuora enforces tenant-level concurrent request limits. See <a href="https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Policies/Concurrent_Request_Limits" target="_blank">Concurrent Request Limits</a> for more information.
 *
 * ## Timeout Limit
 *
 * If a request does not complete within 120 seconds, the request times out and Zuora returns a Gateway Timeout error.
 *
 *
 * # Error Handling
 *
 * If a request to Zuora Billing REST API with an endpoint starting with `/v1` (except [Actions](https://www.zuora.com/developer/api-reference/#tag/Actions) and CRUD operations) fails, the response will contain an eight-digit error code with a corresponding error message to indicate the details of the error.
 *
 * The following code snippet is a sample error response that contains an error code and message pair:
 *
 * ```
 *  {
 *    "success": false,
 *    "processId": "CBCFED6580B4E076",
 *    "reasons":  [
 *      {
 *       "code": 53100320,
 *       "message": "'termType' value should be one of: TERMED, EVERGREEN"
 *      }
 *     ]
 *  }
 * ```
 * The `success` field indicates whether the API request has succeeded. The `processId` field is a Zuora internal ID that you can provide to Zuora Global Support for troubleshooting purposes.
 *
 * The `reasons` field contains the actual error code and message pair. The error code begins with `5` or `6` means that you encountered a certain issue that is specific to a REST API resource in Zuora Billing. For example, `53100320` indicates that an invalid value is specified for the `termType` field of the `subscription` object.
 *
 * The error code beginning with `9` usually indicates that an authentication-related issue occurred, and it can also indicate other unexpected errors depending on different cases. For example, `90000011` indicates that an invalid credential is provided in the request header.
 *
 * When troubleshooting the error, you can divide the error code into two components: REST API resource code and error category code. See the following Zuora error code sample:
 *
 * <a href="https://assets.zuora.com/zuora-documentation/ZuoraErrorCode.jpeg" target="_blank"><img src="https://assets.zuora.com/zuora-documentation/ZuoraErrorCode.jpeg" alt="Zuora Error Code Sample"></a>
 *
 *
 * **Note:** Zuora determines resource codes based on the request payload. Therefore, if GET and DELETE requests that do not contain payloads fail, you will get `500000` as the resource code, which indicates an unknown object and an unknown field.
 * The error category code of these requests is valid and follows the rules described in the [Error Category Code](https://www.zuora.com/developer/api-reference/#section/Error-Handling/Error-Category-Code) section.
 * In such case, you can refer to the returned error message to troubleshoot.
 *
 *
 * ## REST API Resource Code
 *
 * The 6-digit resource code indicates the REST API resource, typically a field of a Zuora object, on which the issue occurs. In the preceding example, `531003` refers to the `termType` field of the `subscription` object.
 *
 * The value range for all REST API resource codes is from `500000` to `679999`. See [Resource Codes](https://knowledgecenter.zuora.com/Central_Platform/API/AA_REST_API/Resource_Codes) in the Knowledge Center for a full list of resource codes.
 *
 * ## Error Category Code
 *
 * The 2-digit error category code identifies the type of error, for example, resource not found or missing required field.
 *
 * The following table describes all error categories and the corresponding resolution:
 *
 * | Code    | Error category              | Description    | Resolution    |
 * |:--------|:--------|:--------|:--------|
 * | 10      | Permission or access denied | The request cannot be processed because a certain tenant or user permission is missing. | Check the missing tenant or user permission in the response message and contact [Zuora Global Support](https://support.zuora.com) for enablement. |
 * | 11      | Authentication failed       | Authentication fails due to invalid API authentication credentials. | Ensure that a valid API credential is specified. |
 * | 20      | Invalid format or value     | The request cannot be processed due to an invalid field format or value. | Check the invalid field in the error message, and ensure that the format and value of all fields you passed in are valid. |
 * | 21      | Unknown field in request    | The request cannot be processed because an unknown field exists in the request body. | Check the unknown field name in the response message, and ensure that you do not include any unknown field in the request body. |
 * | 22      | Missing required field      | The request cannot be processed because a required field in the request body is missing. | Check the missing field name in the response message, and ensure that you include all required fields in the request body. |
 * | 30      | Rule restriction            | The request cannot be processed due to the violation of a Zuora business rule. | Check the response message and ensure that the API request meets the specified business rules. |
 * | 40      | Not found                   | The specified resource cannot be found. | Check the response message and ensure that the specified resource exists in your Zuora tenant. |
 * | 45      | Unsupported request         | The requested endpoint does not support the specified HTTP method. | Check your request and ensure that the endpoint and method matches. |
 * | 50      | Locking contention          | This request cannot be processed because the objects this request is trying to modify are being modified by another API request, UI operation, or batch job process. | <p>Resubmit the request first to have another try.</p> <p>If this error still occurs, contact [Zuora Global Support](https://support.zuora.com) with the returned `Zuora-Request-Id` value in the response header for assistance.</p> |
 * | 60      | Internal error              | The server encounters an internal error. | Contact [Zuora Global Support](https://support.zuora.com) with the returned `Zuora-Request-Id` value in the response header for assistance. |
 * | 70      | Request exceeded limit      | The total number of concurrent requests exceeds the limit allowed by the system. | <p>Resubmit the request after the number of seconds specified by the `Retry-After` value in the response header.</p> <p>Check [Concurrent request limits](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Policies/Concurrent_Request_Limits) for details about Zuora’s concurrent request limit policy.</p> |
 * | 90      | Malformed request           | The request cannot be processed due to JSON syntax errors. | Check the syntax error in the JSON request body and ensure that the request is in the correct JSON format. |
 * | 99      | Integration error           | The server encounters an error when communicating with an external system, for example, payment gateway, tax engine provider. | Check the response message and take action accordingly. |
 *
 *
 * # Pagination
 *
 * When retrieving information (using GET methods), the optional `pageSize` query parameter sets the maximum number of rows to return in a response. The maximum is `40`; larger values are treated as `40`. If this value is empty or invalid, `pageSize` typically defaults to `10`.
 *
 * The default value for the maximum number of rows retrieved can be overridden at the method level.
 *
 * If more rows are available, the response will include a `nextPage` element, which contains a URL for requesting the next page.  If this value is not provided, no more rows are available. No "previous page" element is explicitly provided; to support backward paging, use the previous call.
 *
 * ## Array Size
 *
 * For data items that are not paginated, the REST API supports arrays of up to 300 rows.  Thus, for instance, repeated pagination can retrieve thousands of customer accounts, but within any account an array of no more than 300 rate plans is returned.
 *
 * # API Versions
 *
 * The Zuora REST API are version controlled. Versioning ensures that Zuora REST API changes are backward compatible. Zuora uses a major and minor version nomenclature to manage changes. By specifying a version in a REST request, you can get expected responses regardless of future changes to the API.
 *
 * ## Major Version
 *
 * The major version number of the REST API appears in the REST URL. Currently, Zuora only supports the **v1** major version. For example, `POST https://rest.zuora.com/v1/subscriptions`.
 *
 * ## Minor Version
 *
 * Zuora uses minor versions for the REST API to control small changes. For example, a field in a REST method is deprecated and a new field is used to replace it.
 *
 * Some fields in the REST methods are supported as of minor versions. If a field is not noted with a minor version, this field is available for all minor versions. If a field is noted with a minor version, this field is in version control. You must specify the supported minor version in the request header to process without an error.
 *
 * If a field is in version control, it is either with a minimum minor version or a maximum minor version, or both of them. You can only use this field with the minor version between the minimum and the maximum minor versions. For example, the `invoiceCollect` field in the POST Subscription method is in version control and its maximum minor version is 189.0. You can only use this field with the minor version 189.0 or earlier.
 *
 * If you specify a version number in the request header that is not supported, Zuora will use the minimum minor version of the REST API. In our REST API documentation, if a field or feature requires a minor version number, we note that in the field description.
 *
 * You only need to specify the version number when you use the fields require a minor version. To specify the minor version, set the `zuora-version` parameter to the minor version number in the request header for the request call. For example, the `collect` field is in 196.0 minor version. If you want to use this field for the POST Subscription method, set the  `zuora-version` parameter to `196.0` in the request header. The `zuora-version` parameter is case sensitive.
 *
 * For all the REST API fields, by default, if the minor version is not specified in the request header, Zuora will use the minimum minor version of the REST API to avoid breaking your integration.
 *
 * ### Minor Version History
 *
 * The supported minor versions are not serial. This section documents the changes made to each Zuora REST API minor version.
 *
 * The following table lists the supported versions and the fields that have a Zuora REST API minor version.
 *
 * | Fields         | Minor Version      | REST Methods    | Description |
 * |:--------|:--------|:--------|:--------|
 * | invoiceCollect | 189.0 and earlier  | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Generates an invoice and collects a payment for a subscription. |
 * | collect        | 196.0 and later    | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Collects an automatic payment for a subscription. |
 * | invoice | 196.0 and 207.0| [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Generates an invoice for a subscription. |
 * | invoiceTargetDate | 196.0 and earlier  | [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription") |Date through which charges are calculated on the invoice, as `yyyy-mm-dd`. |
 * | invoiceTargetDate | 207.0 and earlier  | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Date through which charges are calculated on the invoice, as `yyyy-mm-dd`. |
 * | targetDate | 207.0 and later | [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription") |Date through which charges are calculated on the invoice, as `yyyy-mm-dd`. |
 * | targetDate | 211.0 and later | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Date through which charges are calculated on the invoice, as `yyyy-mm-dd`. |
 * | includeExisting DraftInvoiceItems | 196.0 and earlier| [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") | Specifies whether to include draft invoice items in subscription previews. Specify it to be `true` (default) to include draft invoice items in the preview result. Specify it to be `false` to excludes draft invoice items in the preview result. |
 * | includeExisting DraftDocItems | 207.0 and later  | [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") | Specifies whether to include draft invoice items in subscription previews. Specify it to be `true` (default) to include draft invoice items in the preview result. Specify it to be `false` to excludes draft invoice items in the preview result. |
 * | previewType | 196.0 and earlier| [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") | The type of preview you will receive. The possible values are `InvoiceItem`(default), `ChargeMetrics`, and `InvoiceItemChargeMetrics`. |
 * | previewType | 207.0 and later  | [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") | The type of preview you will receive. The possible values are `LegalDoc`(default), `ChargeMetrics`, and `LegalDocChargeMetrics`. |
 * | runBilling  | 211.0 and later  | [Create Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_Subscription "Create Subscription"); [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription"); [Renew Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_RenewSubscription "Renew Subscription"); [Cancel Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_CancelSubscription "Cancel Subscription"); [Suspend Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_SuspendSubscription "Suspend Subscription"); [Resume Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_ResumeSubscription "Resume Subscription"); [Create Account](https://www.zuora.com/developer/api-reference/#operation/POST_Account "Create Account")|Generates an invoice or credit memo for a subscription. **Note:** Credit memos are only available if you have the Invoice Settlement feature enabled. |
 * | invoiceDate | 214.0 and earlier  | [Invoice and Collect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment "Invoice and Collect") |Date that should appear on the invoice being generated, as `yyyy-mm-dd`. |
 * | invoiceTargetDate | 214.0 and earlier  | [Invoice and Collect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment "Invoice and Collect") |Date through which to calculate charges on this account if an invoice is generated, as `yyyy-mm-dd`. |
 * | documentDate | 215.0 and later | [Invoice and Collect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment "Invoice and Collect") |Date that should appear on the invoice and credit memo being generated, as `yyyy-mm-dd`. |
 * | targetDate | 215.0 and later | [Invoice and Collect](https://www.zuora.com/developer/api-reference/#operation/POST_TransactionInvoicePayment "Invoice and Collect") |Date through which to calculate charges on this account if an invoice or a credit memo is generated, as `yyyy-mm-dd`. |
 * | memoItemAmount | 223.0 and earlier | [Create credit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromPrpc "Create credit memo from charge"); [Create debit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_DebitMemoFromPrpc "Create debit memo from charge") | Amount of the memo item. |
 * | amount | 224.0 and later | [Create credit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromPrpc "Create credit memo from charge"); [Create debit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_DebitMemoFromPrpc "Create debit memo from charge") | Amount of the memo item. |
 * | subscriptionNumbers | 222.4 and earlier | [Create order](https://www.zuora.com/developer/api-reference/#operation/POST_Order "Create order") | Container for the subscription numbers of the subscriptions in an order. |
 * | subscriptions | 223.0 and later | [Create order](https://www.zuora.com/developer/api-reference/#operation/POST_Order "Create order") | Container for the subscription numbers and statuses in an order. |
 * | creditTaxItems | 238.0 and earlier | [Get credit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItems "Get credit memo items"); [Get credit memo item](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItem "Get credit memo item") | Container for the taxation items of the credit memo item. |
 * | taxItems | 238.0 and earlier | [Get debit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItems "Get debit memo items"); [Get debit memo item](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItem "Get debit memo item") | Container for the taxation items of the debit memo item. |
 * | taxationItems | 239.0 and later | [Get credit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItems "Get credit memo items"); [Get credit memo item](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItem "Get credit memo item"); [Get debit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItems "Get debit memo items"); [Get debit memo item](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItem "Get debit memo item") | Container for the taxation items of the memo item. |
 * | chargeId | 256.0 and earlier | [Create credit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromPrpc "Create credit memo from charge"); [Create debit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_DebitMemoFromPrpc "Create debit memo from charge") | ID of the product rate plan charge that the memo is created from. |
 * | productRatePlanChargeId | 257.0 and later | [Create credit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromPrpc "Create credit memo from charge"); [Create debit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_DebitMemoFromPrpc "Create debit memo from charge") | ID of the product rate plan charge that the memo is created from. |
 * | comment | 256.0 and earlier | [Create credit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromPrpc "Create credit memo from charge"); [Create debit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_DebitMemoFromPrpc "Create debit memo from charge"); [Create credit memo from invoice](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromInvoice "Create credit memo from invoice"); [Create debit memo from invoice](https://www.zuora.com/developer/api-reference/#operation/POST_DebitMemoFromInvoice "Create debit memo from invoice"); [Get credit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItems "Get credit memo items"); [Get credit memo item](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItem "Get credit memo item"); [Get debit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItems "Get debit memo items"); [Get debit memo item](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItem "Get debit memo item") | Comments about the product rate plan charge, invoice item, or memo item. |
 * | description | 257.0 and later | [Create credit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromPrpc "Create credit memo from charge"); [Create debit memo from charge](https://www.zuora.com/developer/api-reference/#operation/POST_DebitMemoFromPrpc "Create debit memo from charge"); [Create credit memo from invoice](https://www.zuora.com/developer/api-reference/#operation/POST_CreditMemoFromInvoice "Create credit memo from invoice"); [Create debit memo from invoice](https://www.zuora.com/developer/api-reference/#operation/POST_DebitMemoFromInvoice "Create debit memo from invoice"); [Get credit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItems "Get credit memo items"); [Get credit memo item](https://www.zuora.com/developer/api-reference/#operation/GET_CreditMemoItem "Get credit memo item"); [Get debit memo items](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItems "Get debit memo items"); [Get debit memo item](https://www.zuora.com/developer/api-reference/#operation/GET_DebitMemoItem "Get debit memo item") | Description of the the product rate plan charge, invoice item, or memo item. |
 *
 *
 * #### Version 207.0 and Later
 *
 * The response structure of the [Preview Subscription](https://www.zuora.com/developer/api-reference/#operation/POST_SubscriptionPreview "Preview Subscription") and [Update Subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription "Update Subscription") methods are changed. The following invoice related response fields are moved to the invoice container:
 *
 *   * amount
 *   * amountWithoutTax
 *   * taxAmount
 *   * invoiceItems
 *   * targetDate
 *   * chargeMetrics
 *
 * # Zuora Billing Object Model
 *
 * The following diagram is a high-level view of how key business objects are related to one another within Zuora Billing.
 *
 * Click the diagram to open it in a new tab and zoom in.
 * For more information about the different sections of the diagram, see
 * <a href="https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/A_Zuora_Billing_business_object_model" target="_blank">Zuora Billing business object model</a>.
 *
 * <a href="https://assets.zuora.com/zuora-documentation/Zuora_Billing_object_model_Sep2020.png" target="_blank"><img src="https://assets.zuora.com/zuora-documentation/Zuora_Billing_object_model_Sep2020.png" alt="Zuora Billing object model diagram"></a>
 *
 * This diagram is intended to provide a conceptual understanding; it does not illustrate a specific way to integrate with Zuora.
 *
 * The diagram includes the Orders feature and the Invoice Settlement feature.
 * If your organization does not use either of these features, see
 * <a href="https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/B_Zuora_Billing_business_object_model_prior_to_Orders_and_Invoice_Settlement" target="_blank">Zuora Billing business object model prior to Orders and Invoice Settlement</a>
 * for an alternative diagram.
 *
 * ## API Names
 *
 * You can use the [Describe object](https://www.zuora.com/developer/api-reference/#operation/GET_Describe) operation to list the fields of each Zuora object that is available in your tenant. When you call the operation, you must specify the API name of the Zuora object.
 *
 * The following table provides the API name of each Zuora object:
 *
 * | Object                                        | API Name                                   |
 * |-----------------------------------------------|--------------------------------------------|
 * | Account                                       | `Account`                                  |
 * | Accounting Code                               | `AccountingCode`                           |
 * | Accounting Period                             | `AccountingPeriod`                         |
 * | Amendment                                     | `Amendment`                                |
 * | Application Group                             | `ApplicationGroup`                         |
 * | Billing Run                                   | <p>`BillingRun` - API name used  in the [Describe object](https://www.zuora.com/developer/api-reference/#operation/GET_Describe) operation, Export ZOQL queries, and Data Query.</p> <p>`BillRun` - API name used in the [Actions](https://www.zuora.com/developer/api-reference/#tag/Actions). See the CRUD oprations of [Bill Run](https://www.zuora.com/developer/api-reference/#tag/Bill-Run) for more information about the `BillRun` object. `BillingRun` and `BillRun` have different fields. |
 * | Contact                                       | `Contact`                                  |
 * | Contact Snapshot                              | `ContactSnapshot`                          |
 * | Credit Balance Adjustment                     | `CreditBalanceAdjustment`                  |
 * | Credit Memo                                   | `CreditMemo`                               |
 * | Credit Memo Application                       | `CreditMemoApplication`                    |
 * | Credit Memo Application Item                  | `CreditMemoApplicationItem`                |
 * | Credit Memo Item                              | `CreditMemoItem`                           |
 * | Credit Memo Part                              | `CreditMemoPart`                           |
 * | Credit Memo Part Item                         | `CreditMemoPartItem`                       |
 * | Credit Taxation Item                          | `CreditTaxationItem`                       |
 * | Custom Exchange Rate                          | `FXCustomRate`                             |
 * | Debit Memo                                    | `DebitMemo`                                |
 * | Debit Memo Item                               | `DebitMemoItem`                            |
 * | Debit Taxation Item                           | `DebitTaxationItem`                        |
 * | Discount Applied Metrics                      | `DiscountAppliedMetrics`                   |
 * | Entity                                        | `Tenant`                                   |
 * | Feature                                       | `Feature`                                  |
 * | Gateway Reconciliation Event                  | `PaymentGatewayReconciliationEventLog`     |
 * | Gateway Reconciliation Job                    | `PaymentReconciliationJob`                 |
 * | Gateway Reconciliation Log                    | `PaymentReconciliationLog`                 |
 * | Invoice                                       | `Invoice`                                  |
 * | Invoice Adjustment                            | `InvoiceAdjustment`                        |
 * | Invoice Item                                  | `InvoiceItem`                              |
 * | Invoice Item Adjustment                       | `InvoiceItemAdjustment`                    |
 * | Invoice Payment                               | `InvoicePayment`                           |
 * | Journal Entry                                 | `JournalEntry`                             |
 * | Journal Entry Item                            | `JournalEntryItem`                         |
 * | Journal Run                                   | `JournalRun`                               |
 * | Order                                         | `Order`                                    |
 * | Order Action                                  | `OrderAction`                              |
 * | Order ELP                                     | `OrderElp`                                 |
 * | Order Line Items                              | `OrderLineItems`                           |
 * | Order Item                                    | `OrderItem`                                |
 * | Order MRR                                     | `OrderMrr`                                 |
 * | Order Quantity                                | `OrderQuantity`                            |
 * | Order TCB                                     | `OrderTcb`                                 |
 * | Order TCV                                     | `OrderTcv`                                 |
 * | Payment                                       | `Payment`                                  |
 * | Payment Application                           | `PaymentApplication`                       |
 * | Payment Application Item                      | `PaymentApplicationItem`                   |
 * | Payment Method                                | `PaymentMethod`                            |
 * | Payment Method Snapshot                       | `PaymentMethodSnapshot`                    |
 * | Payment Method Transaction Log                | `PaymentMethodTransactionLog`              |
 * | Payment Method Update                         | `UpdaterDetail`                            |
 * | Payment Part                                  | `PaymentPart`                              |
 * | Payment Part Item                             | `PaymentPartItem`                          |
 * | Payment Run                                   | `PaymentRun`                               |
 * | Payment Transaction Log                       | `PaymentTransactionLog`                    |
 * | Processed Usage                               | `ProcessedUsage`                           |
 * | Product                                       | `Product`                                  |
 * | Product Feature                               | `ProductFeature`                           |
 * | Product Rate Plan                             | `ProductRatePlan`                          |
 * | Product Rate Plan Charge                      | `ProductRatePlanCharge`                    |
 * | Product Rate Plan Charge Tier                 | `ProductRatePlanChargeTier`                |
 * | Rate Plan                                     | `RatePlan`                                 |
 * | Rate Plan Charge                              | `RatePlanCharge`                           |
 * | Rate Plan Charge Tier                         | `RatePlanChargeTier`                       |
 * | Refund                                        | `Refund`                                   |
 * | Refund Application                            | `RefundApplication`                        |
 * | Refund Application Item                       | `RefundApplicationItem`                    |
 * | Refund Invoice Payment                        | `RefundInvoicePayment`                     |
 * | Refund Part                                   | `RefundPart`                               |
 * | Refund Part Item                              | `RefundPartItem`                           |
 * | Refund Transaction Log                        | `RefundTransactionLog`                     |
 * | Revenue Charge Summary                        | `RevenueChargeSummary`                     |
 * | Revenue Charge Summary Item                   | `RevenueChargeSummaryItem`                 |
 * | Revenue Event                                 | `RevenueEvent`                             |
 * | Revenue Event Credit Memo Item                | `RevenueEventCreditMemoItem`               |
 * | Revenue Event Debit Memo Item                 | `RevenueEventDebitMemoItem`                |
 * | Revenue Event Invoice Item                    | `RevenueEventInvoiceItem`                  |
 * | Revenue Event Invoice Item Adjustment         | `RevenueEventInvoiceItemAdjustment`        |
 * | Revenue Event Item                            | `RevenueEventItem`                         |
 * | Revenue Event Item Credit Memo Item           | `RevenueEventItemCreditMemoItem`           |
 * | Revenue Event Item Debit Memo Item            | `RevenueEventItemDebitMemoItem`            |
 * | Revenue Event Item Invoice Item               | `RevenueEventItemInvoiceItem`              |
 * | Revenue Event Item Invoice Item Adjustment    | `RevenueEventItemInvoiceItemAdjustment`    |
 * | Revenue Event Type                            | `RevenueEventType`                         |
 * | Revenue Schedule                              | `RevenueSchedule`                          |
 * | Revenue Schedule Credit Memo Item             | `RevenueScheduleCreditMemoItem`            |
 * | Revenue Schedule Debit Memo Item              | `RevenueScheduleDebitMemoItem`             |
 * | Revenue Schedule Invoice Item                 | `RevenueScheduleInvoiceItem`               |
 * | Revenue Schedule Invoice Item Adjustment      | `RevenueScheduleInvoiceItemAdjustment`     |
 * | Revenue Schedule Item                         | `RevenueScheduleItem`                      |
 * | Revenue Schedule Item Credit Memo Item        | `RevenueScheduleItemCreditMemoItem`        |
 * | Revenue Schedule Item Debit Memo Item         | `RevenueScheduleItemDebitMemoItem`         |
 * | Revenue Schedule Item Invoice Item            | `RevenueScheduleItemInvoiceItem`           |
 * | Revenue Schedule Item Invoice Item Adjustment | `RevenueScheduleItemInvoiceItemAdjustment` |
 * | Subscription                                  | `Subscription`                             |
 * | Subscription Product Feature                  | `SubscriptionProductFeature`               |
 * | Taxable Item Snapshot                         | `TaxableItemSnapshot`                      |
 * | Taxation Item                                 | `TaxationItem`                             |
 * | Updater Batch                                 | `UpdaterBatch`                             |
 * | Usage                                         | `Usage`                                    |
 *
 */
export declare class SDK {
    accountingCodes: AccountingCodes;
    accountingPeriods: AccountingPeriods;
    /**
     * Some operations in this section are similar to each other, but are provided for different use scenarios. You should choose the one that best suits your needs.
     *
     * @remarks
     *
     * For example, the [Create account](https://www.zuora.com/developer/api-reference/#operation/POST_Account) operation is used to create an account with a credit card payment method, a bill-to contact, and optionally an sold-to contact or an associated subscription. If you want to create an account without creating any associated objects such as subscriptions, use [CRUD: Create Account](https://www.zuora.com/developer/api-reference/#operation/Object_POSTAccount) instead.
     *
     * If you want to create an account and the associated subscription at the same time without providing credit card information, use the [Subscribe](https://www.zuora.com/developer/api-reference/#operation/Action_POSTsubscribe) action.
     *
     */
    accounts: Accounts;
    /**
     * Actions are operations that are batch in nature. For example, the "create", "update", "delete", and other operations allow changes to up-to 50 objects at a time. The "query" operation will return up-to 2000 result records back at a time, before requiring additional pages of data to be returned via a subsequent "queryMore" operation.
     *
     * @remarks
     *
     * The default WSDL version for Actions is 79. If you want to change the WSDL version, set the `X-Zuora-WSDL-Version` header. To find out in which WSDL version a particular object or field was introduced, see [Zuora SOAP API Version History](https://knowledgecenter.zuora.com/DC_Developers/G_SOAP_API/Zuora_SOAP_API_Version_History).
     *
     * **Note**: Actions do not support the Invoice Settlement feature. This feature includes Unapplied Payments, Credit and Debit Memo, and Invoice Item Settlement. Actions also do not support the Orders feature.
     *
     */
    actions: Actions;
    /**
     * You can use amendments to modify subscriptions. However, Zuora recommends you to use [Update subscription](https://www.zuora.com/developer/api-reference/#operation/PUT_Subscription) (recommended) or [Amend](https://www.zuora.com/developer/api-reference/#operation/Action_POSTamend) to do so.
     *
     * @remarks
     *
     */
    amendments: Amendments;
    attachments: Attachments;
    /**
     * Use the Bill Run call to create ad hoc bill runs and Post, Cancel, Query, and Delete bill runs.
     *
     * @remarks
     *
     */
    billRun: BillRun;
    billingDocuments: BillingDocuments;
    billingPreviewRun: BillingPreviewRun;
    catalog: Catalog;
    /**
     * Charge Metrics provides a service to access key metrics for rate plan charges in Zuora, for example, Gross MRR, Net MRR, Gross TCV, and Net TCV.
     *
     * @remarks
     *
     */
    chargeMetrics: ChargeMetrics;
    chargeRevenueSummaries: ChargeRevenueSummaries;
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
    communicationProfiles: CommunicationProfiles;
    connections: Connections;
    contacts: Contacts;
    creditBalanceAdjustments: CreditBalanceAdjustments;
    creditMemos: CreditMemos;
    customExchangeRates: CustomExchangeRates;
    /**
     * With Custom Objects service, you can define custom objects, extending the Zuora data model to accommodate your specific use cases.
     *
     * @remarks
     *
     * If you use Postman, you can import the custom objects endpoints as a collection into your Postman app and try out different requests to learn how the API works. Click the following button to get started:
     *
     * [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/1f068ba43651bf63c0d4)
     *
     * You can sign up for a free account on the [Postman website](https://identity.getpostman.com/signup) and download the app in case you do not use Postman yet.
     *
     * Note that the Custom Object Definitions API is versioned by `Zuora-Version` in the request header. The response may be different for the same request with a different API version. Specify `Zuora-Version` in the request header if you expect a specific response schema.
     *
     * ### Error handling
     * If the Custom Objects API call fails, an error code will be returned in the response body. See [Custom Objects API error code](https://knowledgecenter.zuora.com/Central_Platform/Custom_Objects/Z_Custom_Objects_API#Custom_Objects_API_error_code) for details.
     *
     */
    customObjectDefinitions: CustomObjectDefinitions;
    /**
     * With Custom Objects service, you can submit a bulk job request to delete or create custom object records in a batch.
     *
     * @remarks
     *
     * If you use Postman, you can import the custom objects endpoints as a collection into your Postman app and try out different requests to learn how the API works. Click the following button to get started:
     *
     * [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/1f068ba43651bf63c0d4)
     *
     * You can sign up for a free account on the [Postman website](https://identity.getpostman.com/signup) and download the app in case you do not use Postman yet.
     *
     * Note that the Custom Object Jobs API is versioned by `Zuora-Version` in the request header. The response may be different for the same request with a different API version. Specify `Zuora-Version` in the request header if you expect a specific response schema.
     *
     * ### Error handling
     * If the Custom Objects API call fails, an error code will be returned in the response body. See [Custom Objects API error code](https://knowledgecenter.zuora.com/Central_Platform/Custom_Objects/Z_Custom_Objects_API#Custom_Objects_API_error_code) for details.
     *
     */
    customObjectJobs: CustomObjectJobs;
    /**
     * With Custom Objects service, you can create, update, delete and find custom object records.
     *
     * @remarks
     *
     * If you use Postman, you can import the custom objects endpoints as a collection into your Postman app and try out different requests to learn how the API works. Click the following button to get started:
     *
     * [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/1f068ba43651bf63c0d4)
     *
     * You can sign up for a free account on the [Postman website](https://identity.getpostman.com/signup) and download the app in case you do not use Postman yet.
     *
     * Note that the Custom Object Records API is versioned by `Zuora-Version` in the request header. The response may be different for the same request with a different API version. Specify `Zuora-Version` in the request header if you expect a specific response schema.
     *
     * ### Error handling
     * If the Custom Objects API call fails, an error code will be returned in the response body. See [Custom Objects API error code](https://knowledgecenter.zuora.com/Central_Platform/Custom_Objects/Z_Custom_Objects_API#Custom_Objects_API_error_code) for details.
     *
     */
    customObjectRecords: CustomObjectRecords;
    /**
     * The Data Query feature enables you to perform SQL queries in your Zuora tenant. To learn how to get started with Data Query, see [Overview of Data Query](https://knowledgecenter.zuora.com/DC_Developers/BA_Data_Query/A_Overview_of_Data_Query).
     *
     * @remarks
     *
     */
    dataQueries: DataQueries;
    debitMemos: DebitMemos;
    describe: Describe;
    documentProperties: DocumentProperties;
    entities: Entities;
    entityConnections: EntityConnections;
    /**
     * The Event Trigger service manages the business events and trigger conditions that are defined on [Zuora Business Object Model](http://knowledgecenter.zuora.com/BB_Introducing_Z_Business/D_Zuora_Business_Objects_Relationship). When a Zuora object changes, the trigger conditions defined on the object are evaluated, and if any condition qualifies, a business event will be triggered and turned into a notification.
     *
     * @remarks
     *
     * **Note**: Event Triggers operations are only applicable to custom events.
     *
     */
    eventTriggers: EventTriggers;
    exports: Exports;
    features: Features;
    files: Files;
    hmacSignatures: HMACSignatures;
    hostedPages: HostedPages;
    imports: Imports;
    invoiceAdjustments: InvoiceAdjustments;
    invoiceItemAdjustments: InvoiceItemAdjustments;
    invoiceItems: InvoiceItems;
    invoicePayments: InvoicePayments;
    invoiceSplitItems: InvoiceSplitItems;
    invoiceSplits: InvoiceSplits;
    invoices: Invoices;
    journalRuns: JournalRuns;
    massUpdater: MassUpdater;
    /**
     * Notifications are the actions taken to inform users or call third-party endpoints when a certain event happens. Typical actions include emails and callouts. Callouts typically refer to HTTP invocations, such as HTTP calls to REST services.
     *
     * @remarks
     *
     * **NOTE:** Notifications are processed asynchronously and may be delivered with a delay and out of order.
     *
     * Notifications are associated with Communication Profiles, which allow you to send specific event-driven notifications to targeted customers. Zuora provides the following Settings API to access the settings of Communication Profiles:
     *   * [Get all Communication Profiles](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Communication_Profiles)
     *   * [Create a new Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Communication_Profile)
     *   * [Modify a Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Modify_a_Communication_Profile)
     *   * [Get all Notifications under a particular Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Notifications_under_a_particular_Communication_Profile)
     *
     */
    notifications: Notifications;
    oAuth: OAuth;
    operations: Operations;
    orderLineItems: OrderLineItems;
    orders: Orders;
    paymentGatewayReconciliation: PaymentGatewayReconciliation;
    paymentGateways: PaymentGateways;
    paymentMethodSnapshots: PaymentMethodSnapshots;
    paymentMethodTransactionLogs: PaymentMethodTransactionLogs;
    paymentMethods: PaymentMethods;
    paymentRuns: PaymentRuns;
    paymentTransactionLogs: PaymentTransactionLogs;
    payments: Payments;
    productFeatures: ProductFeatures;
    /**
     * To manage product rate plan charge tiers, use the [Product Rate Plan Charges](https://www.zuora.com/developer/api-reference/#tag/Product-Rate-Plan-Charges) operations instead to update the corresponding product rate plan charge with all the tiers.
     *
     * @remarks
     *
     */
    productRatePlanChargeTiers: ProductRatePlanChargeTiers;
    productRatePlanCharges: ProductRatePlanCharges;
    productRatePlans: ProductRatePlans;
    products: Products;
    quotesDocument: QuotesDocument;
    rsaSignatures: RSASignatures;
    ramps: Ramps;
    ratePlanChargeTiers: RatePlanChargeTiers;
    ratePlanCharges: RatePlanCharges;
    ratePlans: RatePlans;
    refundInvoicePayments: RefundInvoicePayments;
    refundTransactionLogs: RefundTransactionLogs;
    refunds: Refunds;
    revenueEvents: RevenueEvents;
    revenueItems: RevenueItems;
    revenueRules: RevenueRules;
    revenueSchedules: RevenueSchedules;
    sequenceSets: SequenceSets;
    /**
     * The Setting API provides a central API for managing settings in your Zuora tenant.
     *
     * @remarks
     *
     * If you use Postman, you can import the Settings API endpoints as a collection into your Postman app and try out different requests to learn how the API works. Click the following button to get started:
     *
     * [![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com/run-collection/1379901-d43e93a3-7d51-437c-b4cd-14163dd62fa2-SWLk4kiK)
     *
     * You can sign up for a free account on the [Postman website](https://identity.getpostman.com/signup) and download the app in case you do not use Postman yet.
     *
     */
    settings: Settings;
    /**
     * **Note:** The Entitlements settings must be enabled to use this operation. Access to the Entitlements feature requires a specific edition of Zuora. See [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for details.
     *
     * @remarks
     *
     */
    subscriptionProductFeatures: SubscriptionProductFeatures;
    subscriptions: Subscriptions;
    summaryJournalEntries: SummaryJournalEntries;
    taxationItems: TaxationItems;
    transactions: Transactions;
    unitOfMeasure: UnitOfMeasure;
    usage: Usage;
    users: Users;
    workflows: Workflows;
    /**
     * **Note:** You can only use the operations in this section if you have the Billing - Revenue Integration feature enabled. See [Billing - Revenue Integration](https://knowledgecenter.zuora.com/Zuora_Revenue/Billing_-_Revenue_Integration) for more information.
     *
     * @remarks
     *
     */
    zuoraRevenueIntegration: ZuoraRevenueIntegration;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
